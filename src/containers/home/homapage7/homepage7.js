import Slider from "react-slick";
import "./main.scss";

import ShadovText from "../../../components/shadov-text";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftSwitch from "../../../assets/images/img/home/leftswetch.svg";
import RightSwitch from "../../../assets/images/img/home/rightswitch.svg";

// import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import SliderCard from "../../../components/home/slider-card";
import { request } from "../../../api/request";
import { useState, useEffect, useRef } from "react";
import ReactHtmlParser from "react-html-parser";

import { useSelector } from "react-redux";


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const HomePage7 = () => {
  const sliderOwl = useRef(null);
  const lang = useSelector((state) => state.data.lang);
  const [ourTeam, setOurteam] = useState({
    isFetched: false,
    data: {},
    error: null,
  });
  useEffect(() => {
    request
      .get(`/content/all/team?lang=${lang}`, {
        params: {
          sort: "asc",
          sortby: "sort",
        },
      })
      .then(function (res) {
        setOurteam({ isFetched: true, data: res.data.data, error: false });
      })
      .catch(function (err) {
        setOurteam({ isFetched: true, data: [], error: err });
      });
  }, [lang]);

  const [nav3, setNav3] = useState();
  const [nav4, setNav4] = useState();

  const optionsMobile = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: true,
    navText: false,
    smartSpeed: 1000,
    mouseDrag: false,
    swipeable:false,
    responsive: {
      0: {
        items: 1,

      },
      450: {
        items: 1,
      },

    },
  };

  const responsive = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ];

  




  return (
    <div className="home-page7">
      <div data-aos="fade-up">
        <div className="shadow_center">
          <ShadovText
            shadov={
              lang === "en"
                ? "Our"
                : lang === "ru"
                ? "Наша"
                : lang === "uz"
                ? "Bizning"
                : null
            }
            text={
              lang === "en"
                ? "Team"
                : lang === "ru"
                ? "Команда"
                : lang === "uz"
                ? "Jamoa"
                : null
            }
            classes={"center"}
          />
        </div>
      </div>


      <div className="slick-controllers">
        <button
          onClick={() => {
            nav3?.props?.asNavFor.slickPrev();
          }}
          className="left_slick_btn"
        >
         
          <img src={LeftSwitch} alt="" className="switch" />
        </button>
        <button
          className="right_slick_btn"
          onClick={() => {
            nav3?.props?.asNavFor.slickNext();
          }}
        >
          <img src={RightSwitch} alt="" className="switch" />
        </button>
      </div>



      <div className="home-page7-inner">
        <div className="home-page7-inner-block container">
          <div className="sss">
            <div data-aos="fade-right" className="fare-right-block">
              <Slider
                asNavFor={nav4}
                id="slider"
                ref={(slider) => setNav3(slider)}
              >
                {ourTeam && ourTeam.isFetched ? (
                  ourTeam.data.map((item, index) => (
                    <div className="person-info-block" key={index}>
                      <h3 className="person-name">{item.title}</h3>
                      <span className="person-work">{item.extra_text}</span>
                      <div className="person-information">
                        {ReactHtmlParser(item.description)}
                      </div>
                    </div>
                  ))
                ) : (
                  <></>
                )}
              </Slider>
            </div>
            <div data-aos="fade-left" className="fade-left-block">
              <Slider
                asNavFor={nav3}
                ref={(slider2) => setNav4(slider2)}
                slidesToShow={2}
                swipeToSlide={true}
                focusOnSelect={true}
                responsive={responsive}
              >
                {ourTeam && ourTeam.isFetched ? (
                  ourTeam.data.map((info, index) => (
                    <SliderCard
                      key={index}
                      img={info.image}
                      name={info.title}
                      work={info.extra_text}
                      description={info.description}
                    />
                  ))
                ) : (
                  <></>
                )}
              </Slider>
            </div>
          </div>
        </div>
        <div className="sss1">
          <Carousel ref={sliderOwl} className='owl-theme' loop margin={10} nav {...optionsMobile}>
            {ourTeam && ourTeam.isFetched ? (
              ourTeam.data.map((info, index) => (
                <SliderCard
                  key={index}
                  img={info.image}
                  name={info.title}
                  work={info.extra_text}
                  description={info.description}
                />
              ))
            ) : (
              <></>
            )}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default HomePage7;
