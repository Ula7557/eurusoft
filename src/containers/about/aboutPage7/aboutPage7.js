import "./main.scss";
import { Link } from "react-router-dom";

import Messa from "../../../assets/images/img/about/messages.png";
import Pencila from "../../../assets/images/img/about/pencil.png";
const AboutPage7 = ({ lang, }) => {
  return (
    <div data-aos="zoom-in">
      <div className="about-page7 container">
        <h6 className="about-page7-text">
          {lang === "en"
            ? "Got a Project for us?"
            : lang === "ru"
              ? "Есть для нас проект?"
            : lang === "uz"
            ? "Biz uchun loyihangiz bormi ?"
            : null}
        </h6>
        <Link to="/contact" className="about-page7-link">
          {lang === "en"
            ? "Let’s talk."
            : lang === "ru"
              ? "Давайте поговорим."
            : lang === "uz"
            ? "Keling suhbatlashamiz"
            : null}
        </Link>
        <img src={Messa} alt="" className="about-messages" />
        <img src={Pencila} alt="" className="about-pencil" />
      </div>
    </div>
  );
};

export default AboutPage7;
