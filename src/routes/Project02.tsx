import { useQuery } from "react-query";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { fetchNews } from "../api";

import styled from "styled-components";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import news01 from "../img/project02/news01.jpeg";
import news02 from "../img/project02/news02.jpeg";

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

  return (
    <>
      <Helmet>
        <title>Project02</title>
      </Helmet>
      <Wrap>
        <div className="project02">
          <div className="header">
            <div className="left-side">
              <FontAwesomeIcon className="icon" icon={faBars} />
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
              <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
            </div>
          </div>
          <div className="main">
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

            <div></div>
          </div>
        </div>
      </Wrap>
    </>
  );
}
export default Project02;
