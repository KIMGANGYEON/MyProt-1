import { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface INewsData {
  title: string;
  originallink: string;
  link: string;
  description: string;
  pubDate: string;
}

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

function Project02() {
  const [news, setNews] = useState<any>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("/v1/search/news.json", {
          params: {
            query: encodeURIComponent("사회"),
            display: 10,
            start: 1,
            sort: "sim",
          },
          headers: {
            "X-Naver-Client-Id": CLIENT_ID,
            "X-Naver-Client-Secret": CLIENT_SECRET,
          },
        });
        console.log(response);
      } catch (error) {
        console.error("Error fetching news", error);
      }
    };
    fetchNews();
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
