import TextLink from "../../components/text-link";
import "./main.scss";
import AboutPage7 from "../about/aboutPage7";

import ImageGallery from "react-image-gallery";
import LeftIcon from "../../assets/images/img/single-portfolio/Icon/Quote.svg";

import RightIcon from "../../assets/images/img/single-portfolio/qwe/Icon/Quote.svg";
import { useState, useEffect } from "react";

import axios from "axios";
import { useSelector } from "react-redux";

import "react-image-gallery/styles/scss/image-gallery.scss"
import ReactHtmlParser from 'react-html-parser';

import Spinner from '../../components/spinner/spinner'

const SinglePortfolio = ({ match }) => {
  const [image, setImage] = useState([]);
  const lang = useSelector((state) => state.data.lang);

  function youtube_parser(url) {
    var regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : false;
  }

  const [singlePortfolio, setSinglePortfolio] = useState({
    isFetched: false,
    data: {},
    error: null,
  });
  useEffect(() => {
    axios
      .get(
        `https://api.eurosoft.uz/projects/${match.params.id}?lang=${lang}`,
        {
          headers: {
            "api-token": process.env.REACT_APP_API_TOKEN,
          },
        }
      )

      .then(function (response) {
        setSinglePortfolio({
          isFetched: true,
          data: response.data.data,
          errro: false,
        });

        setTimeout(() => {
          for (const el of response.data.data.gallery) {
            if (image.length === 3) {
              return image
            }
            else {
              setImage((prev) => [...prev, { original: el, thumbnail: el }]);
            }
          }
        }, 100);
      })

      .catch(function (error) {
        setSinglePortfolio({
          isFetched: true,
          data: [],
          error: error,
        });
      });
  }, [lang]);


  return (
    <>
      {singlePortfolio && singlePortfolio.isFetched ? (
        <div className="single-portfolio ">
          <TextLink info2={"Detail"} info1={"Portfolio /"} />
          <hr className="hr_class" />
          <div className="conpany-name container">
            <div data-aos="fade-up">
              <h3 className="conpany-title">{singlePortfolio.data.title}</h3>
            </div>

            <div className="conpany-name-inner">
              <div className="conpany-name-inner-left">
                <div data-aos="fade-up">
                  <h6 className="description">
                    {lang === "en"
                      ? "Description "
                      : lang === "ru"
                        ? "Описание"
                        : lang === "uz"
                          ? "Tavsif"
                          : null}
                  </h6>
                </div>
                <div data-aos="fade-up">
                  <p className="description-info">
                    <div className="homepage-card-info">{ReactHtmlParser(singlePortfolio.data.description)}</div>
                  </p>
                </div>
              </div>
              <div className="conpany-name-inner-right">
                <div data-aos="fade-up">
                  <h6 className="description">
                    {lang === "en"
                      ? "Client "
                      : lang === "ru"
                        ? "Клиент"
                        : lang === "uz"
                          ? "Mijoz"
                          : null}
                  </h6>
                </div>
                <div data-aos="fade-up">
                  <div className="conpany-name-inner-right-box">
                    <img
                      src={singlePortfolio.data.client_company_logo}
                      alt="logotip"
                      className="conpany-logotip"
                    />
                    <p className="description-info description-info1">
                      {singlePortfolio.data.client_company_name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="single-portfolio-carousel">
                <ImageGallery className="carousel-single" items={image} />
              </div>
            </div>

            <div className="feedback">
              <div className="feedback-left">
                <div data-aos="fade-up">
                  <iframe
                    className="youtube-iframe"
                    src={`https://youtube.com/embed/${youtube_parser(
                      singlePortfolio.data.client_video
                    )}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="feedback-right">
                <div className="feedback-personal">
                  <div data-aos="fade-up">
                    <img
                      src={singlePortfolio.data.client_photo}
                      alt={singlePortfolio.data.client_fullname}
                      className="personal-images"
                    />
                  </div>

                  <div className="feedback-personal-info">
                    <div data-aos="fade-up">
                      <h6 className="feedback-personal-name">
                        {singlePortfolio.data.client_fullname}
                      </h6>
                    </div>
                    <div data-aos="fade-up">
                      <p className="feedback-personal-work">
                        {singlePortfolio.data.client_position}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="feedback-left-inner">
                  <div data-aos="fade-up">
                    <img
                      src={LeftIcon}
                      alt="Quote"
                      className="feedback-inner-img"
                    />
                  </div>
                  <div data-aos="fade-up">
                    <p className="feedback-inner-info">
                      {singlePortfolio.data.client_feedback}
                    </p>
                  </div>
                  <div data-aos="fade-up">
                    <img
                      src={RightIcon}
                      alt="Quote"
                      className="feedback-inner-img feedback-inner-img1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <AboutPage7 lang={lang} useSelector={useSelector} />
        </div>
      ) : (
          <Spinner/>
      )}
    </>
  );
};

export default SinglePortfolio;
