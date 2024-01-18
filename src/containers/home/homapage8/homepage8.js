import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePageCard from "../../../components/home/home-page8-card";
import ShadovText from "../../../components/shadov-text";
import "./main.scss";
import { request } from "../../../api/request";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const HomePage8 = () => {
  const lang = useSelector((state) => state.data.lang);
  const newsBlogSlider = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const [newsBlog, setNewsBlog] = useState({
    isFetched: false,
    data: {},
    error: null,
  });
  useEffect(() => {
    request
      .get(`/posts?lang=${lang}&sort=-created_on&on_home_page=1`)
      .then(function (res) {
        setNewsBlog({ isFetched: true, data: res.data.data, error: false });
      })
      .catch(function (err) {
        setNewsBlog({ isFetched: true, data: [], error: err });
      });
  }, [lang]);
  return (
    <>
      {newsBlog && newsBlog.isFetched ? (
        <div className="home-page8 container">
          <div data-aos="fade-up">
            <ShadovText
              shadov={
                lang === "en"
                  ? "News"
                  : lang === "ru"
                  ? "Новостной"
                  : lang === "uz"
                  ? "Yangiliklar"
                  : null
              }
              text={
                lang === "en"
                  ? "Blog"
                  : lang === "ru"
                  ? "блог"
                  : lang === "uz"
                  ? "Blogi"
                  : null
              }
              classes={"center"}
            />
          </div>

          <div className="homepage-card-block">
            <Slider {...newsBlogSlider}>
              {newsBlog?.data?.items?.map((item, index) => (
                <div key={index}>
                  <HomePageCard
                    key={index}
                    img={item.image}
                    title={item.title}
                    description={item.extra_desc}
                    id={item.id}
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="homepage8-link-block">
            <Link to="/blog" className="homepage8-link">
              {lang === "en"
                ? "Other news"
                : lang === "ru"
                ? "Другие новости"
                : lang === "uz"
                ? "Boshqa yangiliklar"
                : null}
            </Link>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default HomePage8;
