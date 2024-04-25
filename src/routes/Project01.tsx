import { useState } from "react";

// IMG
import img2 from "../img/2.jpg";
import { Helmet } from "react-helmet";

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
        {/* {video ? (
          <div className="videoBox">
            <video controls autoPlay muted>
              <source src="/videos/prada.mp4" type="video/mp4" />
            </video>
            <button onClick={onClick}>Skip</button>
          </div>
        ) : ( */}
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
        </div>
        {/* )} */}
      </div>
    </>
  );
}
export default Project01;
