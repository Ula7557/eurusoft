import ShadovText from "../../../components/shadov-text";
import "./main.scss";

import Slider from "react-slick";

import LeftSwitch1 from "../../../assets/images/img/home/leftswetch.svg";
import RightSwitch1 from "../../../assets/images/img/home/rightswitch.svg";
import ReactHtmlParser from "react-html-parser";

import { request } from "../../../api/request";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Qol from "../../../assets/images/qol.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
const HomePage3 = () => {
  const lang = useSelector((state) => state.data.lang);
  const [homeSlider2, setHomeSlider2] = useState({
    isFetched: false,
    data: {},
    error: null,
  });
  useEffect(() => {
    request
      .get(`/projects?lang=${lang}&sort=-created_on&on_home_page=1`)
      .then(function (res) {
        setHomeSlider2({
          isFetched: false,
          data: res.data.data,
          error: null,
        });
      })
      .catch(function (err) {
        setHomeSlider2({ isFetched: true, data: [], error: err });
      });
  }, [lang]);



  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  return (
    <>
      {homeSlider2 && homeSlider2.isFetched ? (
        <div className="home-page3 container">
          <img src={Qol} alt="" className="home-page3_qol" />
          <div data-aos="fade-left">
            <ShadovText
              shadov={
                lang === "en"
                  ? "Our"
                  : lang === "ru"
                  ? "Hаша"
                  : lang === "uz"
                  ? "Bizning"
                  : null
              }
              text={
                lang === "en"
                  ? "Works"
                  : lang === "ru"
                  ? "работа"
                  : lang === "uz"
                  ? "Ishimiz"
                  : null
              }
              classes={"right"}
            />
          </div>

          <div className="home-page3-inner">
            <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
              console.log("homeSlider", homeSlider)
              {homeSlider2.data.items?.map((item, index) => (
                <Link
                  key={index}
                  className="home-page3-img-link"
                  to={`/portfolio/${item.id}`}
                >
                  <div className="home-page3-img_animate" data-aos="fade-up">
                    <img
                      key={index}
                      src={item.image}
                      alt="img"
                      className="home-page3-img"
                    />
                  </div>
                </Link>
              ))}
            </Slider>
            <div className="slick-controllers2">
              <button
                className="btn-caro"
                onClick={() => {
                  nav1?.props?.asNavFor.slickPrev();
                }}
              >
                {" "}
                <img src={LeftSwitch1} alt="" className="switch1" />{" "}
              </button>
              <button
                className="btn-caro"
                onClick={() => {
                  nav1?.props?.asNavFor.slickNext();
                }}
              >
                {" "}
                <img src={RightSwitch1} alt="" className="switch1" />{" "}
              </button>
            </div>
            <Slider
              asNavFor={nav1}
              ref={(slider2) => setNav2(slider2)}
              slidesToShow={1}
              swipeToSlide={false}
              focusOnSelect={false}
            >
              {homeSlider2.data.items?.map((item, index) => (
                <div key={index} className="home-page3-inner-right-block">
                  <div data-aos="fade-up">
                    <h6 className="home-page3-right-text">{item.title}</h6>
                  </div>
                  <div data-aos="fade-up">
                    <div className="home-page3-right-p">
                      {ReactHtmlParser(item.description)}
                    </div>
                  </div>

                  <div data-aos="fade-up">
                    <p className="home-page3-client">
                      {lang === "en"
                        ? "Client name"
                        : lang === "ru"
                        ? "Имя клиента"
                        : "Mijozning nomi"}
                    </p>
                  </div>

                  <div data-aos="fade-up">
                    <div className="home-page3-client-block">
                      <img
                        src={item.client_company_logo}
                        alt=""
                        className="client-logotip"
                      />
                      <span className="client-name">
                        {item.client_company_name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default HomePage3;
