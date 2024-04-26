import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { Helmet } from "react-helmet";
import Lenis from "@studio-freight/lenis";

// IMG
import img2 from "../img/2.jpg";
import clo01 from "../img/clo01.jpg";
import clo02 from "../img/clo02.jpg";
import clo03 from "../img/clo03.jpg";
import clo04 from "../img/clo04.jpg";
import clo05 from "../img/clo05.jpg";
import clo06 from "../img/clo06.jpg";
import clo07 from "../img/clo07.jpg";
import clo08 from "../img/clo08.jpg";
import clo09 from "../img/clo09.jpg";
import clo10 from "../img/clo10.jpg";
import clo11 from "../img/clo11.jpg";
import clo12 from "../img/clo12.jpg";
import clo13 from "../img/clo13.jpg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Project01() {
  const [video, setVideo] = useState(true);
  const onClick = () => {
    setTimeout(() => {}, 2000);
    setVideo(false);
  };

  return (
    <>
      <Helmet>
        <title>Project01</title>
      </Helmet>
      <div className="Project01">
        {video ? (
          <div className="videoBox">
            <video controls autoPlay muted>
              <source src="/videos/prada.mp4" type="video/mp4" />
            </video>
            <button onClick={onClick}>Skip</button>
          </div>
        ) : (
          <div className="main">
            <div className="header">
              <div className="top">
                <h1>PRADA</h1>
                <div className="top__grid">
                  <span>2024 f/w</span>
                  <span>Find Your Own</span>
                </div>
              </div>
              <div className="bottom">FW 2024 Womenswear Look Book</div>
            </div>
            <div className="main__img__box">
              <div className="main__img">
                <img src={img2} />
              </div>
            </div>
            <div className="text__box">
              <p>PRADA 2024 FW</p>
              <h2>
                Fashion, far from being confined to fleeting trends, is an
                enduring manifestation of grace and elegance, a timeless
                testament to the artistry and innovation of the human spirit.
              </h2>
            </div>
            <div className="main__img__box2">
              <div className="img__box">
                <img src={clo01} alt="" />
                <img src={clo02} alt="" />
              </div>
              <div className="img__box2">
                <img src={clo03} alt="" />
                <p>
                  Modernity is not a rejection of tradition but rather a
                  celebration of diversity, an acknowledgment of the myriad
                  voices and perspectives that contribute to the rich tapestry
                  of contemporary culture.v
                </p>
              </div>
            </div>
            <div className="main__img__box3">
              <h1>Simplicity is the ultimate sophistication</h1>

              <div className="img__box">
                <img src={clo04} alt="" />
                <img src={clo05} alt="" />
              </div>
              <div className="img__box">
                <img src={clo06} alt="" />
                <img src={clo07} alt="" />
              </div>
              <div className="img__box">
                <img src={clo08} alt="" />
                <img src={clo09} alt="" />
              </div>
              <div className="img__box">
                <img src={clo10} alt="" />
                <img src={clo11} alt="" />
              </div>
              <div className="img__box">
                <img src={clo12} alt="" />
                <img src={clo13} alt="" />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default Project01;
