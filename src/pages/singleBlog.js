import "./main.scss";

import Facebook from "../assets/images/img/social-net-icon/facebook.svg";
import Instagram from "../assets/images/img/social-net-icon/instagram.svg";
import Telegram from "../assets/images/img/social-net-icon/telegram.svg";

import Eye from "../assets/images/icon/eye.svg";
import LanguageIocn from "../assets/images/icon/aa.svg";

import { useState, useEffect } from "react";
import axios from "axios";

import ReactHtmlParser from "react-html-parser";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import Spinner from "../components/spinner/spinner";

import {
  FacebookShareButton,
  InstapaperShareButton,
  TelegramShareButton,
} from "react-share";

const SingleBlog = ({ match }) => {
  const [upperCase, setUpperCase] = useState(false);
  const lang = useSelector((state) => state.data.lang);
  const [singleBlog, setSingleBlog] = useState({
    isFetched: false,
    data: {},
    error: null,
  });
  useEffect(() => {
    axios
      .get(`https://api.eurosoft.uz/posts/${match.params.id}`, {
        headers: {
          "api-token": process.env.REACT_APP_API_TOKEN,
        },
        params: {
          lang,
        },
      })

      .then(function (response) {
        setSingleBlog({
          isFetched: true,
          data: response.data.data,
          errro: false,
        });
      })
      .catch(function (error) {
        setSingleBlog({
          isFetched: true,
          data: [],
          error: error,
        });
      });
  }, [match.params, lang]);

  return (
    <>
      {singleBlog && singleBlog.isFetched ? (
        <div className="blog-single-block ">
          <Helmet>
            <meta
              name="description"
              content={singleBlog.data.meta.meta_description}
            />
            <meta
              name="keywoards"
              content={singleBlog.data.meta.focus_keywords}
            />
            <meta name="title" content={singleBlog.data.meta.title} />
            <title>{`${singleBlog.data.category}`}</title>
          </Helmet>
          <div data-aos="fade-up">
            <h6 className="blog-post-text">{singleBlog.data.title}</h6>
          </div>
          <div data-aos="fade-up">
            <div className="blog-post-link">
              <img
                src={singleBlog.data.image}
                alt="images"
                className="blog-post-img"
              />
            </div>
          </div>

          <div data-aos="fade-up">
            <div className="blog-post-div">
              <div className="blog-post-div-left">
                <img src={Eye} alt="Eye" className="eye" />
                <p className="eye-number">{singleBlog.data.view_count}</p>
              </div>
              <div className="blog-post-div-right">
                <span className="share">
                  {lang === "en"
                    ? "Share:"
                    : lang === "uz"
                    ? "Ulashish:"
                    : "поделиться"}
                </span>
                <div className="share-block">
                  <button>
                    <TelegramShareButton
                      url={String(window.location)}
                      quote={"share"}
                      className="share-link"
                    >
                      <img
                        src={Telegram}
                        alt="Telegram"
                        className="share-icon"
                      />
                    </TelegramShareButton>
                    <InstapaperShareButton
                      url={String(window.location)}
                      quote={"share"}
                      className="share-link"
                    >
                      <img
                        src={Instagram}
                        alt="Instagram"
                        className="share-icon"
                      />
                    </InstapaperShareButton>
                    <FacebookShareButton
                      url={String(window.location)}
                      quote={"share"}
                      className="share-link"
                    >
                      <img
                        src={Facebook}
                        alt="Facebook"
                        className="share-icon"
                      />
                    </FacebookShareButton>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="blog-text-block">
            <div data-aos="fade-up">
              <div className="blog-text-btn">
                <button
                  onClick={() => setUpperCase(!upperCase)}
                  className="text-language blog-text-button"
                >
                  <img
                    src={LanguageIocn}
                    alt="LanguageIocn"
                    className="language-icon"
                  />
                </button>
              </div>
            </div>

            <div className="blog-information-text">
              <div data-aos="fade-up">
                <div className={`block-info ${upperCase ? "activ" : ""}`}>
                  {ReactHtmlParser(singleBlog.data.description)}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default SingleBlog;
