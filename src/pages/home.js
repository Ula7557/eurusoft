import HomePage1 from "../containers/home/homapage1";
import LeftBlock from "../containers/home/left-block";
import "./main.scss";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import HomePage2 from "../containers/home/homapage2";
import HomePage3 from "../containers/home/homapage3";
import HomePage4 from "../containers/home/homapage4";
import HomePage5 from "../containers/home/homapage5";
import HomePage6 from "../containers/home/homapage6";
import HomePage7 from "../containers/home/homapage7";
import HomePage8 from "../containers/home/homapage8";
import HomePage9 from "../containers/home/homapage9/homepage9";
import SpinnerEffect from "../components/spinner/spinner";

import { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

import { request } from "../api/request";
import { useDispatch, useSelector } from "react-redux";
import { set_videos } from "../redux/action/action";
const Home = () => {
  const dispatch = useDispatch();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const lang = useSelector((state) => state.data.lang);
  const [slider, setSlider] = useState({
    isFetched: false,
    data: {},
    error: null,
  });

  useEffect(() => {
    axios
      .get(`https://api.eurosoft.uz/content/all/slider?lang=${lang}`, {
        headers: {
          "api-token": process.env.REACT_APP_API_TOKEN,
        },
      })

      .then(function (response) {
        setSlider({
          isFetched: true,
          data: response.data.data,
          errro: false,
        });
      })
      .catch(function (error) {
        setSlider({
          isFetched: true,
          data: [],
          error: error,
        });
      });
    request
      .get(`/content/one/mini?id=10&lang=${lang}`)
      .then((res) => dispatch(set_videos(res.data.data)))
      .catch((err) => console.log(err));
  }, [lang]);

  const [settingBlog, setSettingsBlog] = useState({
    isFetched: false,
    data: {},
    error: null,
  });
  useEffect(() => {
    request
      .get(`/system/settings/all`, {
        headers: { "api-token": process.env.REACT_APP_API_TOKEN },
      })
      .then(function (res) {
        setSettingsBlog({ isFetched: true, data: res.data.data, error: false });
      })
      .catch(function (err) {
        setSettingsBlog({ isFetched: true, data: [], error: err });
      });
  }, []);

  return (
    <div className="home">
      {settingBlog && settingBlog.isFetched ? (
        <Helmet>
          <title>{`${settingBlog.data[1]?.settings_value} | ${
            lang === "en" ? "Home" : lang === "ru" ? "Главная" : "Asosiy"
          }`}</title>
        </Helmet>
      ) : (
        <></>
      )}
      {slider && slider.isFetched ? (
        <section className="section1">
          <LeftBlock />
          <div className="home-carousel">
            <Slider {...settings}>
              {slider.data.map((item, index) => (
                <HomePage1
                  key={index}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  focus_keywords={item.meta.focus_keywords}
                  meta_title={item.meta.meta_title}
                  meta_description={item.meta.meta_description}
                  link={item.link}
                  slider={slider}
                  lang={lang}
                />
              ))}
            </Slider>
          </div>
        </section>
      ) : (
        <SpinnerEffect />
      )}
      <HomePage2 />
      <HomePage3 />
      <HomePage4 />
      <HomePage5 />
      <HomePage6 />
      <HomePage7 />
      <HomePage8 />
      <HomePage9 />
    </div>
  );
};

export default Home;



