import "./main.scss";

import { request } from "../../../api/request";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import ShadovText from "../../../components/shadov-text";

import { useSelector } from "react-redux";

const AboutPage5 = () => {
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

  const [partners, setpartners] = useState({
    isFetched: false,
    data: {},
    error: null,
  });
  useEffect(() => {
    request
      .get(`/content/all/mini?parent=59&lang=${lang}`,)
      .then(function (res) {
        setpartners({ isFetched: true, data: res.data.data, error: false });
      })
      .catch(function (err) {
        setpartners({ isFetched: true, data: [], error: err });
      });
  }, [lang]);
  return (
    <>
      {partners && partners.isFetched ? (
        <div className="about-page5 container">
          <div data-aos="fade-up"> <ShadovText
            shadov={
              lang === "en"
                ? "Our"
                : lang === "ru"
                  ? "Наши "
                  : lang === "uz"
                    ? "Bizning"
                    : null
            }
            text={
              lang === "en"
                ? "partners"
                : lang === "ru"
                  ? "партнеры"
                  : lang === "uz"
                    ? "Hamkorlarimiz"
                    : null
            }
            classes={"center"}
          /></div>
          <div data-aos="fade-up"></div>
         
          <div data-aos="flip-up">
            <div className="sponsor container">
              <Slider {...settings}>
                {partners.data.map((item, index) => (
                  <a
                    key={index}
                    href={`https://${item.link}`}
                    rel="noreferrer"
                    target="_blank"
                    className="partners-link"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="sponsor-logotip"
                    />
                  </a>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default AboutPage5;
