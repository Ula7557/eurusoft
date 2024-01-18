import { Link } from "react-router-dom";
import "./main.scss";
import { useState, useEffect } from "react";
import { request } from "../api/request";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import SpinnerEffect from "../components/spinner/spinner";

const Error = () => {
  const [errorPage, setErrorPage] = useState({
    isFetched: false,
    data: {},
    error: null,
  });
  useEffect(() => {
    request
      .get(`/content/one/page?id=14&lang=${lang}`, {
        headers: { "api-token": "p12378" },
      })
      .then(function (res) {
        setErrorPage({ isFetched: true, data: res.data.data, error: false });
      })
      .catch(function (err) {
        setErrorPage({ isFetched: true, data: [], error: err });
      });
  }, [lang]);
  const lang = useSelector((state) => state.data.lang);
  return (
    <>
      {errorPage && errorPage.isFetched ? (
        <div className="error-page">
          <Helmet>
            <title>Eurosoft | Error</title>
          </Helmet>
          <div className="error-page-inner container">
            <h1 className="error-text">{errorPage.data.title}</h1>
            <Link className="error-link" to="/">
              <button className="error-btn">{errorPage.data.extra_text}</button>
            </Link>
          </div>
        </div>
      ) : (
        <SpinnerEffect />
      )}
    </>
  );
};

export default Error;
