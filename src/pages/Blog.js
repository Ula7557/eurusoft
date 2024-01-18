import "./main.scss";
import TextLink from "../components/text-link/text-link";
import ShadovText from "../components/shadov-text";
import RightBlock from "../containers/blog/right-blog";
import { Link, Route, useRouteMatch } from "react-router-dom";
import SingleBlog from "./singleBlog";
import LeftBlock1 from "./../containers/blog/left-blog/left-block1";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { request } from "../api/request";
import axios from "axios";
import SpinnerEffect from "../components/spinner/spinner";

import { useSelector } from "react-redux";

const Blog = () => {
  const lang = useSelector((state) => state.data.lang)
  const [status, setStatus] = useState(null);
  const [shadovText, setShadovText] = useState({
    isFetched: false,
    data: {},
    error: null,
  });
  useEffect(() => {
    axios
      .get(`https://api.eurosoft.uz/content/one/page?id=8&lang=${lang}`, {
        headers: {
          "api-token": process.env.REACT_APP_API_TOKEN,
        },
      })

      .then(function (response) {
        setShadovText({
          isFetched: true,
          data: response.data.data,
          errro: false,
        });
      })
      .catch(function (error) {
        setShadovText({
          isFetched: true,
          data: [],
          error: error,
        });
      });
    request
      .get(`/content/one/page?id=8&lang=${lang}`, { headers: { 'api-token': 'p12378' } })
      .then(function (res) { setBlogTitle({ isFetched: true, data: res.data.data, error: false }) })
      .catch(function (err) { setBlogTitle({ isFetched: true, data: [], error: err }) })
  }, [lang]);

  const [blogTitle, setBlogTitle] = useState({
    isFetched: false,
    data: {},
    error: null,
  });

  const [categories, setCategories] = useState(false)
  return (
    <>
      {
        shadovText && shadovText.isFetched ? (
          <div className="blog">
            <Helmet>
              <title>{`Eurosoft | ${blogTitle.data.extra_text}`}</title>
            </Helmet>
            <TextLink info1={lang === 'en' ? 'Blog' : lang === 'uz' ? "Blog" : lang === 'ru' ? 'Блог' : ''}  />
            <hr className="hr_class" />
            <div className="shadov-text-blog container">
              <div data-aos="fade-right">
                <ShadovText
                  shadov={shadovText.data.title}
                  text={shadovText.data.extra_text}
                />
              </div>
            </div>
            <div className="blog-page">
              <div className="blog-page-left"></div>
              <div className="blog-page-right container">
                <Route exact path="/blog/:id" component={SingleBlog} />
                <Route path="/blog" exact>
                  <LeftBlock1 status={status} />
                </Route>
                <RightBlock
                  setCategories={setCategories}
                  categories={categories}
                  status={status}
                  setStatus={setStatus}
                  useRefMatch={useRouteMatch}
                  Link={Link}
                />
                <button
                  onClick={() => setCategories(!categories)}
                 className="blog_mobile_btn">Categories</button>
              </div>
            </div>
          </div>
        ) : (
            <SpinnerEffect />
        )
      }
    </>
  );
};

export default Blog;
