import "./main.scss";

// import { motion } from "framer-motion";

import ReactHtmlParser from "react-html-parser";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
const HomePage1 = ({
  title,
  image,
  description,
  meta_title,
  meta_description,
  focus_keywords,
  link,
  lang,
}) => {
  return (
    <div className="home-page1 container">
      <Helmet>
        <meta name="meta_title" component={meta_title} />
        <meta name="meta_description" component={meta_description} />
        <meta name="focus_keywords" component={focus_keywords} />
      </Helmet>
      <div className="home-page1-left">
        <div data-aos="fade-up">
           <h1 className="home-page-text">{title}</h1>
        </div>
        <div data-aos="fade-up">
          <div className="home-page1-text-info">
              {ReactHtmlParser(description)}
            </div>
        </div>
        

        <div className="home-page1-link-block">
          <div data-aos="fade-up">
            <Link className="link-order-your" to="/contact">
              {lang === "en"
                ? "Order your app"
                : lang === "ru"
                ? "Закажите своё приложение"
                : lang === "uz"
                ? "O'z ilovangizga buyurtma bering"
                : null}
            </Link>
          </div>
          <div data-aos="fade-up">
            <Link className="home-page1-link home-page1-link-text" to={link}>
              {lang === "en"
                ? "Learn more"
                : lang === "ru"
                ? "Подробнее"
                : lang === "uz"
                ? "Batafsil"
                : null}
            </Link>
          </div>
          
        </div>
      </div>
      <div className="home-page1-right">
        <div data-aos="flip-right">
          <img src={image} alt="images" className="home-page1-pages" />
        </div>
      </div>
    </div>
  );
};

export default HomePage1;
