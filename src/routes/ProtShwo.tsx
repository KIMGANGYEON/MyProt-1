import { Helmet } from "react-helmet";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import show01 from "../img/project02/show01.jpg";
import show02 from "../img/project02/show02.jpg";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import gsap from "gsap";

function ProtShow() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const mouseMove = function (e: React.MouseEvent<HTMLElement>) {
    const pageX = e.pageX;
    const pageY = e.pageY;

    const standardX = window.innerWidth / 2 - pageX;
    const standardY = window.innerHeight / 2 - pageY;

    const newRotateX = standardX / 20;
    const newRotateY = standardY / 20;

    setRotateX(newRotateY);
    setRotateY(newRotateX);

    gsap.to(".imgbox", {
      duration: 0.3,
      rotateX: newRotateY,
      rotateY: newRotateX,
    });
  };
  const mouseOut = function () {
    gsap.to(".imgbox", {
      duration: 0.5,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
    });
  };

  return (
    <>
      <Helmet>
        <title>ProjectShow</title>
      </Helmet>
      <div className="show">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div id="slide1">
              <img className="filter" src={img1} />
              <Link to="/Project01">
                <div
                  className="imgbox"
                  onMouseMove={mouseMove}
                  onMouseOut={mouseOut}
                >
                  <img src={img2} />
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div id="slide1">
              <img className="filter" src={show01} />
              <Link to="/Project02">
                <div
                  className="imgbox"
                  onMouseMove={mouseMove}
                  onMouseOut={mouseOut}
                >
                  <img src={show02} />
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
export default ProtShow;
