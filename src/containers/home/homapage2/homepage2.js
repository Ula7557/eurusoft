import ShadovText from "../../../components/shadov-text";
import "./main.scss";
import { useEffect, useState } from "react";
import { request } from "../../../api/request";

import HomeChildren from "../../../components/home/home-page2-children";

import ReactHtmlParser from "react-html-parser";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomePage2 = () => {
  const lang = useSelector((state) => state.data.lang);
  const [home2, setHome2] = useState({
    isFetched: false,
    data: {},
    error: null,
  });
  useEffect(() => {
    request
      .get(`/content/one/mini?id=67&lang=${lang}`)
      .then(function (res) {
        setHome2({ isFetched: true, data: res.data.data, error: false });
      })
      .catch(function (err) {
        setHome2({ isFetched: true, data: [], error: err });
      });
  }, [lang]);

  const [homeChildren, setHomeChildren] = useState({
    isFetched: false,
    data: {},
    error: null,
  });
  useEffect(() => {
    request
      .get(`/content/all/mini?parent=67&lang=${lang}`)
      .then(function (res) {
        setHomeChildren({ isFetched: true, data: res.data.data, error: false });
      })
      .catch(function (err) {
        setHomeChildren({ isFetched: true, data: [], error: err });
      });
  }, [lang]);
  return (
    <div data-aos="fade-up">
      <div className="home-page2-block">
        <div className="home-page2 container">
          <div className="home-page2-left">
            <div data-aos="fade-up">
              <ShadovText
                shadov={home2.data.title}
                text={home2.data.extra_text}
              />
            </div>

           
            <div data-aos="fade-up">
              <div className="home-page2-text1">
                {ReactHtmlParser(home2.data.description)}
              </div>
            </div>

            <div data-aos="fade-up">
              <Link to="/about" className="home-page2-link">
                {" "}
                {lang === "en"
                  ? "More"
                  : lang === "ru"
                  ? "более"
                  : lang === "uz"
                  ? "Ko'proq"
                  : null}
              </Link>
            </div>
          </div>
          <div className="home-page2-right">
            {homeChildren && homeChildren.isFetched ? (
              homeChildren.data.map((item, index) => (
                <HomeChildren
                  key={index}
                  number={item.extra_text}
                  text={item.title}
                />
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage2;


