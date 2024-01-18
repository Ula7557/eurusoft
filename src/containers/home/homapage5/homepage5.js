import ShadovText from "../../../components/shadov-text";
import "./main.scss";
import { useState, useEffect } from "react";
import { request } from "../../../api/request";
import { useSelector } from "react-redux";
import Slider from "react-slick";
const HomePage5 = () => {
  const lang = useSelector((state) => state.data.lang);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };

  const [home5, setHome5] = useState({
    isFetched: false,
    data: {},
    error: null,
  });
  useEffect(() => {
    request
      .get(`/content/all/mini?parent=78&lang=${lang}`,)
      .then(function (res) {
        setHome5({ isFetched: true, data: res.data.data, error: false });
      })
      .catch(function (err) {
        setHome5({ isFetched: true, data: [], error: err });
      });
  }, [lang]);

  return (
    <div className="home-page5 container">
      <div data-aos="fade-left">
        <ShadovText
          shadov={
            lang === "en"
              ? "They"
              : lang === "ru"
                ? " Они"
                : lang === "uz"
                  ? "Ular"
                  : null
          }
          text={
            lang === "en"
              ? "Trust us"
              : lang === "ru"
                ? "нам доверяют"
                : lang === "uz"
                  ? "Bizga ishonishadi"
                  : null
          }
          classes={"right"}
        />
      </div>

      <div data-aos="flip-up">
        <div className="sponsor">
          <Slider {...settings}>
            {home5.isFetched ? (
              home5.data.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="home5"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    key={index}
                    className="sponsor-logotip"
                  />
                </a>
              ))
            ) : (
              <></>
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HomePage5;
