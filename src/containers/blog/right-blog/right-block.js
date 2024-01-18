import RightCard from "../../../components/blog/right-block-card";
import "./main.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { request } from "../../../api/request";
import { useLocation } from "react-router";

const RightBlock = ({ useRefMatch, Link, blogLink, setStatus, status, categories, setCategories }) => {
  const lang = useSelector((state) => state.data.lang);
  const [rightLink, setRightLink] = useState({
    isFetched: false,
    data: {},
    error: null,
  });

  const [miniCard, setMiniCard] = useState({
    isFetched: false,
    data: {},
    error: null,
  });

  const location = useLocation();
  useEffect(() => {
    request
      .get(`/posts?lang=${lang}&sort=-view_count&per-page=2`, {
        headers: {
          "api-token": process.env.REACT_APP_API_TOKEN,
        },
      })

      .then(function (response) {
        setMiniCard({
          isFetched: true,
          data: response.data.data.items,
          errro: false,
        });
      })
      .catch(function (error) {
        setMiniCard({
          isFetched: true,
          data: [],
          error: error,
        });
      });

    axios
      .get(`https://api.eurosoft.uz/post-categories`, {
        headers: {
          "api-token": process.env.REACT_APP_API_TOKEN,
        },
        params: {
          lang,
        },
      })

      .then(function (response) {
        setRightLink({
          isFetched: true,
          data: response.data.data.items,
          errro: false,
        });
      })
      .catch(function (error) {
        setRightLink({
          isFetched: true,
          data: [],
          error: error,
        });
      });
  }, [lang]);

  return (
    <div className={`blog-right-block ${categories ? 'active': ''}`}>
      <div data-aos="fade-up">
        {location.pathname === "/blog" ? (
          <h6 className="categoris">
            {lang === "en"
              ? "Categories"
              : lang === "ru"
              ? "Категории "
              : lang === "uz"
              ? "Toifalar"
              : null}
          </h6>
        ) : null}
      </div>

      {location.pathname === "/blog" ? (
        <div className="blog4-right-block-link">
          {rightLink && rightLink.isFetched ? (
            rightLink.data.map((item, index) => (
              <button
                to={item.id}
                className={`blog-right-links ${
                  status === item.id ? "activ" : ""
                }`}
                key={index}
                id={item.id}
                onClick={() => setStatus(item.id)}
              >
                {item.title}
              </button>
            ))
          ) : (
            <></>
          )}
        </div>
      ) : null}
      <h6 className="categoris">
        {lang === "en"
          ? "Other news"
          : lang === "ru"
          ? "Другие новости "
          : lang === "uz"
          ? "Boshqa yangiliklar"
          : null}
      </h6>
      {miniCard.isFetched ? (
        miniCard.data.map((item, index) => (
          <RightCard
            title={item.title}
            images={item.image}
            id={item.id}
            key={index}
            status={status}
            lang={lang}
          />
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default RightBlock;
