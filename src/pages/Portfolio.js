import { useRouteMatch, Route } from "react-router-dom";
import TextLink from "../components/text-link";
import PortfolioBlock from "../containers/portfolio";
import axios from "axios";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { request } from "../api/request";
import { useSelector } from "react-redux";
import SpinnerEffect from "../components/spinner/spinner";

const Portfolio = () => {
  const { path } = useRouteMatch();
  const [information, setInformation] = useState("All");
  const lang = useSelector((state) => state.data.lang);
  const [rightLink, setRightLink] = useState({
    isFetched: false,
    data: {},
    error: null,
  });
  useEffect(() => {
    axios
      .get(`https://api.eurosoft.uz/project-categories`, {
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
    request
      .get(`/content/one/page?id=7&lang=${lang}`)
      .then(function (res) {
        setPortTitle({ isFetched: true, data: res.data.data, error: false });
      })
      .catch(function (err) {
        setPortTitle({ isFetched: true, data: [], error: err });
      });
  }, [lang]);

  const [portTitle, setPortTitle] = useState({
    isFetched: false,
    data: {},
    error: null,
  });

  const [cards, setCards] = useState();
  const [portBtn, setPortBtn] = useState(false);

  return (
    <>
      {rightLink.isFetched ? (
        <div className="portfolio">
          <Helmet>
            <title>{`Eurosoft | ${portTitle.data.title}`}</title>
          </Helmet>
          <TextLink
            info1={
              lang === "en"
                ? "Portfolio"
                : lang === "uz"
                ? "Portfolio"
                : lang === "ru"
                ? "Портфолио"
                : ""
            }
          />
          <hr className="hr_class" />
          <div className="portfolio-link-block container">
            <button
              onClick={() => setPortBtn(!portBtn)}
              className="blog_mobile_btn"
            >
              Categories
            </button>
            <div className={`portLinkBlock ${portBtn ? "active" : ""}`}>
              <button
                className={`portfolio-link ${
                  information === `All` ? "activ" : ""
                }`}
                onClick={() => setInformation("All")}
              >
                {lang === "en"
                  ? "All"
                  : lang === "ru"
                  ? "Все "
                  : lang === "uz"
                  ? "Hammasi"
                  : null}
              </button>
              {rightLink && rightLink.isFetched ? (
                rightLink.data.map((item, index) => (
                  <button
                    onClick={() => setInformation(item.id)}
                    className={`portfolio-link ${
                      information === item.id ? "activ" : ""
                    }`}
                    key={index}
                  >
                    {item.title}
                  </button>
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="portfolio-box">
            <Route path={path}>
              <PortfolioBlock
                rightLink={rightLink}
                information={information}
                cards={cards}
                lang={lang}
              />
            </Route>
          </div>
          <div data-aos="fade-up">
            <div className="show-more-block"></div>
          </div>
        </div>
      ) : (
        <SpinnerEffect />
      )}
    </>
  );
};

export default Portfolio;
