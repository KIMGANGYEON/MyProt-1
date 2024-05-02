import { useQuery } from "react-query";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fetchNews } from "../api";
gsap.registerPlugin(ScrollTrigger);

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

  useEffect(() => {
    const tl = gsap.context(() => {
      const horizontal = document.querySelector("#horizontal");
      const sections = gsap.utils.toArray("#horizontal > section");
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: horizontal,
          start: "top top",
          end: () => "+=" + window.innerHeight,
          pin: true,
          scrub: 1,
          snap: {
            snapTo: 1 / (sections.length - 1),
            inertia: false,
            duration: { min: 0.1, max: 0.1 },
          },
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    });
    return () => tl.revert();
  }, []);

  return (
    <>
      <Helmet>
        <title>Project02</title>
      </Helmet>
      <div className="project02">
        <section className="con1">
          <div className="main">
            <h1>대한민국 뜨거운 주제</h1>
            <p>출산율</p>
            <p>자살율</p>
            <p>집값</p>
            <p>노인빈곤율</p>
            <p>빈부격차</p>
            {/* data.items[0].title.replace(/<[^>]*>/g, " ") */}
            <span>
              {data?.data.items[6].description.replace(/<[^>]*>/g, " ")}
            </span>
          </div>
        </section>
        <section className="con2">hello2</section>
        <main id="horizontal">
          <section className="con3">hello3</section>
          <section className="con4">hello4</section>
          <section className="con5">hello5</section>
          <section className="con6">hello6</section>
          <section className="con7">hello7</section>
        </main>
        <section className="con8">hello8</section>
        <section className="con9">hello9</section>
      </div>
    </>
  );
}
export default Project02;
