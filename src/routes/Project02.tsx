import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { fetchNews } from "../api";

import styled from "styled-components";
import { faBars, faL } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import news01 from "../img/project02/news01.jpeg";
import news02 from "../img/project02/news02.jpeg";
import news03 from "../img/project02/news03.jpeg";
import messi from "../img/project02/messi.jpeg";

gsap.registerPlugin(ScrollTrigger);
const Wrap = styled.div`
  background-color: white;
  color: black;
`;

interface INewsData {
  data: {
    items: {
      title: string;
      originallink: string;
      link: string;
      description: string;
      pubDate: string;
    };
  };
}

function Project02() {
  const { isLoading, data } = useQuery<INewsData | any>("allnews", fetchNews);
  const [hide, setHide] = useState(true);

  const [setbtn, setSetbtn] = useState(0);

  const [modal, setModal] = useState("");
  const [rotateBtn, setRotateBtn] = useState(0);
  const [windowSize, setWindowSize] = useState(0);
  useEffect(() => {
    // const fetchNews = async () => {
    //   try {
    //     const response = await axios.get("/v 1/search/news.json", {
    //       params: {
    //         query: "김민재",
    //         display: 10,
    //         start: 1,
    //         sort: "sim",
    //       },
    //       headers: {
    //         "X-Naver-Client-Id": CLIENT_ID,
    //         "X-Naver-Client-Secret": CLIENT_SECRET,
    //       },
    //     });
    //     setNews(response);
    //     console.log(response.data.items);
    //   } catch (error) {
    //     console.error("Error fetching news", error);
    //   }
    // };
    // fetchNews();
  }, []);

  useEffect(() => {
    const handelResize = () => {
      setWindowSize(window.innerWidth);

      // if (windowSize > 1070 && modal === "none") {
      //   setModal("block");
      // }
      if (windowSize < 1070) {
        console.log(1);
      }
    };

    window.addEventListener("resize", handelResize);
  }, [{ windowSize }]);

  const onClick = () => {
    setHide((prev) => !prev);
  };

  const rotatebtn = () => {
    setSetbtn((prev) => prev + 1);
    if (setbtn % 2 == 0) {
      setRotateBtn(180);
      setModal("block");
    }
    if (setbtn % 2 !== 0) {
      setRotateBtn(0);
      setModal("");
    }
  };

  return (
    <>
      <Helmet>
        <title>Project02</title>
      </Helmet>
      <Wrap>
        <div className="project02">
          <div className="header">
            <div className="left-side">
              <FontAwesomeIcon
                className="icon"
                icon={faBars}
                onClick={onClick}
              />
              <div className="red-box">
                <h1>CNN</h1>
              </div>
              <a href="https://edition.cnn.com/us">
                <span>US</span>
              </a>
              <a href="https://edition.cnn.com/world">
                <span>World</span>
              </a>
              <a href="https://edition.cnn.com/politics">
                <span>Politics</span>
              </a>
              <a href="https://edition.cnn.com/business">
                <span>Business</span>
              </a>
              <a href="https://edition.cnn.com/opinion">
                <span>Opinion</span>
              </a>
              <a href="https://edition.cnn.com/health">
                <span>Health</span>
              </a>
              <a href="https://edition.cnn.com/entertainment">
                <span>US</span>
              </a>
              <a href="https://edition.cnn.com/style">
                <span>Style</span>
              </a>
              <a href="https://edition.cnn.com/travel">
                <span>Travel</span>
              </a>
              <a href="https://edition.cnn.com/sports">
                <span>Sports</span>
              </a>
              <a href="https://edition.cnn.com/weather">
                <span>Weather</span>
              </a>
            </div>
            <div className="right-side">
              <a href="https://edition.cnn.com/video">
                <span>Watch</span>
              </a>
              <a href="https://edition.cnn.com/audio">
                <span>Listen</span>
              </a>
              <a href="https://edition.cnn.com/live-tv">
                <span>Watch</span>
              </a>
              <FontAwesomeIcon
                className="icon"
                icon={faMagnifyingGlass}
                onClick={onClick}
              />
            </div>
          </div>
          {hide ? null : (
            <div className="hidden-screen">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <input type="text" placeholder="검색내용 입력" />
                <FontAwesomeIcon
                  className="icon"
                  icon={faMagnifyingGlass}
                  style={{
                    position: "absolute",
                    right: "0",
                    color: "black",
                    fontSize: 20,
                    paddingRight: "15px",
                  }}
                />
              </div>
              <div className="top">
                <div className="btn-box">
                  <h2>EdEdition</h2>
                  <button
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      color: "white",
                      fontSize: 20,
                      transform: `rotate(${rotateBtn}deg)`,
                      transition: "all 0.5s",
                    }}
                    onClick={rotatebtn}
                  >
                    ⇓
                  </button>
                </div>
                <div
                  className="hide-modal-wrap"
                  style={{ display: `${modal}` }}
                >
                  <div className="hide-modal">
                    <h1>US</h1>
                    <h1>International</h1>
                    <h1>Arabic</h1>
                    <h1>Espanol</h1>
                  </div>
                </div>
              </div>
              <div className="body">
                <div className="section">
                  <div className="hello"></div>
                  <h1>World</h1>
                  <div className="span-box">
                    <span>Africa</span>
                    <span>Americas</span>
                    <span>Asia</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                  </div>
                </div>
                <div className="section">
                  <h1>NEWS</h1>
                  <div className="span-box">
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                  </div>
                </div>
                <div className="section">
                  <h1>NEWS</h1>
                  <div className="span-box">
                    <span>Foreseeable Future</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                  </div>
                </div>
                <div className="section">
                  <h1>NEWS</h1>
                  <div className="span-box">
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                  </div>
                </div>
                <div className="section">
                  <h1>NEWS</h1>
                  <div className="span-box">
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                  </div>
                </div>
                <div className="section">
                  <h1>NEWS</h1>
                  <div className="span-box">
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                  </div>
                </div>
                <div className="section">
                  <h1>NEWS</h1>
                  <div className="span-box">
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                  </div>
                </div>
                <div className="section">
                  <h1>NEWS</h1>
                  <div className="span-box">
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                  </div>
                </div>
                <div className="section">
                  <h1>NEWS</h1>
                  <div className="span-box">
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                  </div>
                </div>
                <div className="section">
                  <h1>NEWS</h1>
                  <div className="span-box">
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                  </div>
                </div>
                <div className="section">
                  <h1>NEWS</h1>
                  <div className="span-box">
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                  </div>
                </div>
                <div className="section">
                  <h1>NEWS</h1>
                  <div className="span-box">
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                  </div>
                </div>
                <div className="section">
                  <h1>NEWS</h1>
                  <div className="span-box">
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                  </div>
                </div>
                <div className="section">
                  <h1>NEWS</h1>
                  <div className="span-box">
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                  </div>
                </div>
                <div className="section">
                  <h1>NEWS</h1>
                  <div className="span-box">
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                  </div>
                </div>
                <div className="section">
                  <h1>NEWS</h1>
                  <div className="span-box">
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                    <span>hello</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="main">
            <div className="main-hidden">
              <div className="main__header">
                <span>
                  현재 대한민국 뜨거운 주제&nbsp;:&nbsp;<p>출산율</p>
                </span>
                <p>자살율</p>
                <p>집값</p>
                <p>빈부격차</p>
                <p>국민연금</p>
                <p>네이버 라인</p>
                <p>청년실업</p>
              </div>
            </div>
            <div className="con01">
              <div className="kim">
                <a href="https://m.sports.naver.com/wfootball/article/005/0001693066">
                  <h1>PK 헌납까지… 김민재 부진 길어지나</h1>
                </a>
                <a href="https://m.sports.naver.com/wfootball/article/005/0001693066">
                  <img src={news01} />
                </a>
                <a href="https://m.sports.naver.com/wfootball/article/005/0001693066">
                  <span>
                    김민재(바이에른 뮌헨)가 불필요한 반칙으로 실점의 빌미를
                    줬다. 토마스 투헬 뮌헨 감독도 그를 향한 직격 발언을
                    쏟아냈다. 계속된 부진으로 김민재의 입지는 더욱 좁아질 것으로
                    보인다.
                  </span>
                </a>
              </div>
              <div className="con01-rigth">
                <div className="trump">
                  <div className="trump01">
                    <img src={news02} alt="" />
                    <h1>'트럼프가 이긴다면'...한국 방위비 분담금 5조 원+α?</h1>
                    <span></span>
                  </div>
                  <div className="trump01">
                    <img src={news02} alt="" />
                    <h1>'트럼프가 이긴다면'...한국 방위비 분담금 5조 원+α?</h1>
                    <span></span>
                  </div>
                </div>
                <div className="trump">
                  <div className="trump01">
                    <img src={news02} alt="" />
                    <h1>'트럼프가 이긴다면'...한국 방위비 분담금 5조 원+α?</h1>
                    <span></span>
                  </div>
                  <div className="trump01">
                    <img src={news02} alt="" />
                    <h1>'트럼프가 이긴다면'...한국 방위비 분담금 5조 원+α?</h1>
                    <span></span>
                  </div>
                </div>
                <div className="trump">
                  <div className="trump01">
                    <img src={news02} alt="" />
                    <h1>'트럼프가 이긴다면'...한국 방위비 분담금 5조 원+α?</h1>
                    <span></span>
                  </div>
                  <div className="trump01">
                    <img src={news02} alt="" />
                    <h1>'트럼프가 이긴다면'...한국 방위비 분담금 5조 원+α?</h1>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="con02">
              <div className="con02-right">
                <div className="con02-right-top">
                  <div className="empty"></div>
                  <h1>more top stories</h1>
                </div>
                <div className="messi">
                  <div className="messi-img">
                    <img src={messi} alt="" />
                    <span>
                      ‘기록 파괴자’ 메시, 1골 5도움으로 MLS 신기록 작성
                    </span>
                  </div>

                  <h6>
                    리오넬 메시(인터 마이애미)가 미국 무대에서도 여전한 활약을
                    이어가고 있다.
                  </h6>
                  <h6>
                    리오넬 메시(인터 마이애미)가 미국 무대에서도 여전한 활약을
                    이어가고 있다.
                  </h6>
                  <h6>
                    리오넬 메시(인터 마이애미)가 미국 무대에서도 여전한 활약을
                    이어가고 있다.
                  </h6>
                  <h6>
                    리오넬 메시(인터 마이애미)가 미국 무대에서도 여전한 활약을
                    이어가고 있다.
                  </h6>
                  <h6>
                    리오넬 메시(인터 마이애미)가 미국 무대에서도 여전한 활약을
                    이어가고 있다.
                  </h6>
                  <h6>
                    리오넬 메시(인터 마이애미)가 미국 무대에서도 여전한 활약을
                    이어가고 있다.
                  </h6>
                </div>
              </div>
              <div className="con02-center">
                <div className="con02-center-header">
                  <div className="empty"></div>
                  <h1>FEATURED</h1>
                </div>
                <div className="video-box">
                  <video autoPlay loop muted>
                    <source src="/videos/cnn01.mp4" type="video/mp4" />
                  </video>
                  <h1>
                    '묘지처럼 침묵': 호주 그레이트 배리어 리프의 암울한 경고
                  </h1>
                </div>
                <div className="con02-center-bottom01">
                  <img src={news03} alt="" />
                  <h1>
                    유럽연합, EU와 일본이 2026년부터 달 표면 탐사 등 새로운
                    우주개발 사업을 공동으로 시작합니다.
                  </h1>
                </div>
                <div className="con02-center-bottom01">
                  <img src={news03} alt="" />
                  <h1>
                    유럽연합, EU와 일본이 2026년부터 달 표면 탐사 등 새로운
                    우주개발 사업을 공동으로 시작합니다.
                  </h1>
                </div>
              </div>
              <div className="con02-right">
                <div className="con02-right-top">
                  <div className="empty"></div>
                  <h1>more top stories</h1>
                </div>
                <div className="messi">
                  <div className="messi-img">
                    <img src={messi} alt="" />
                    <span>
                      ‘기록 파괴자’ 메시, 1골 5도움으로 MLS 신기록 작성
                    </span>
                  </div>

                  <h6>
                    리오넬 메시(인터 마이애미)가 미국 무대에서도 여전한 활약을
                    이어가고 있다.
                  </h6>
                  <h6>
                    리오넬 메시(인터 마이애미)가 미국 무대에서도 여전한 활약을
                    이어가고 있다.
                  </h6>
                  <h6>
                    리오넬 메시(인터 마이애미)가 미국 무대에서도 여전한 활약을
                    이어가고 있다.
                  </h6>
                  <h6>
                    리오넬 메시(인터 마이애미)가 미국 무대에서도 여전한 활약을
                    이어가고 있다.
                  </h6>
                  <h6>
                    리오넬 메시(인터 마이애미)가 미국 무대에서도 여전한 활약을
                    이어가고 있다.
                  </h6>
                  <h6>
                    리오넬 메시(인터 마이애미)가 미국 무대에서도 여전한 활약을
                    이어가고 있다.
                  </h6>
                </div>
              </div>
            </div>
          </div>
          {/* <span>{data?.data.items[4].link}</span> */}
        </div>
      </Wrap>
    </>
  );
}
export default Project02;
