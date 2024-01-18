import "./main.scss";

import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import { useState, useEffect } from "react";
import { request } from "../../api/request";
import { useDispatch } from "react-redux";
import { set_Language } from "../../redux/action/action";
import { useSelector } from "react-redux";
import burger from "../../assets/burger/iPhone 11 Pro/Group 1711.svg";
import { Header_mobile_modal } from "../../redux/action/action";
const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [headerlanguage, setHeaderLanguage] = useState({
    isFetched: false,
    data: {},
    error: null,
  });
  useEffect(() => {
    request
      .get(`/system/language/all`, {
        headers: { "api-token": process.env.REACT_APP_API_TOKEN },
      })
      .then(function (res) {
        setHeaderLanguage({
          isFetched: true,
          data: res.data.data,
          error: false,
        });
      })
      .catch(function (err) {
        setHeaderLanguage({ isFetched: true, data: [], error: err });
      });
  }, []);

  const [headerLogo, setHeaderLogo] = useState({
    isFetched: false,
    data: {},
    error: null,
  });
  useEffect(() => {
    request
      .get(`/system/settings/all`, {
        headers: { "api-token": process.env.REACT_APP_API_TOKEN },
      })
      .then(function (res) {
        setHeaderLogo({ isFetched: true, data: res.data.data, error: false });
      })
      .catch(function (err) {
        setHeaderLogo({ isFetched: true, data: [], error: err });
      });
  }, []);

  const headerMobileModal = useSelector((state) => state.data.headerModal);
  const lang = useSelector((state) => state.data.lang);
  const [linkClick, setLinkClick] = useState("");
  return (
    <div className="header">
      <div
        onClick={() => dispatch(Header_mobile_modal(!true))}
        className={`modal-shadow ${headerMobileModal ? "active" : ""}`}
      ></div>
      <div className="header-inner container">
        {headerLogo && headerLogo?.isFetched ? (
          <Link to="/">
            <img
              src={
                headerLogo?.data[9]?.settings_value &&
                headerLogo?.data[9]?.settings_value
              }
              alt="Logotip"
              className={`logotip ${
                linkClick === "home" || location.pathname === "/" ? "activ" : ""
              }`}
            />
          </Link>
        ) : (
          <></>
        )}
        <div className="header_right_box">
          <div className={`header-right ${headerMobileModal ? "active" : ""}`}>
            <motion.p
              style={{ marginLeft: "10px" }}
              initial={{ y: 400, opacity: 0 }}
              transition={{ duration: 0.6, delay: 2 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                onClick={() => dispatch(Header_mobile_modal(!true))}
                
                to="/"
                className={`header-link ${
                  linkClick === "home" || location.pathname === "/" ? "activ" : ""
                }`}
              >
                {lang === "uz"
                  ? "Bosh sahifa"
                  : lang === "ru"
                  ? "Главная"
                  : lang === "en"
                  ? "Home"
                  : "name"}
              </Link>
            </motion.p>

            <motion.p
              style={{ marginLeft: "10px" }}
              initial={{ y: 400, opacity: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                onClick={() => dispatch(Header_mobile_modal(!true))}
                to="/about"
                className={`header-link ${
                  linkClick === "about" || location.pathname === "/about"
                    ? "activ"
                    : ""
                }`}
              >
                {lang === "uz"
                  ? "Biz haqimizda"
                  : lang === "ru"
                  ? "О нас"
                  : lang === "en"
                  ? "About"
                  : "name"}
              </Link>
            </motion.p>

            <motion.p
              style={{ marginLeft: "10px" }}
              initial={{ y: 400, opacity: 0 }}
              transition={{ duration: 1, delay: 2 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                onClick={() => dispatch(Header_mobile_modal(!true))}
                
                className={`header-link ${
                  linkClick === "services" || location.pathname === "/services"
                    ? "activ"
                    : ""
                }`}
                to="/services"
              >
                {lang === "uz"
                  ? "Xizmatlar"
                  : lang === "ru"
                  ? "Услуги"
                  : lang === "en"
                  ? "Services"
                  : "name"}
              </Link>
            </motion.p>

            <motion.p
              style={{ marginLeft: "10px" }}
              initial={{ y: 400, opacity: 0 }}
              transition={{ duration: 1.2, delay: 2 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                onClick={() => dispatch(Header_mobile_modal(!true))}
                
                className={`header-link ${
                  linkClick === "portfolio" ||
                  location.pathname === "/portfolio" ||
                  location.pathname.includes("portfolio")
                    ? "activ"
                    : ""
                }`}
                to="/portfolio"
              >
                {lang === "uz"
                  ? "Portfolio"
                  : lang === "ru"
                  ? "Портфолио"
                  : lang === "en"
                  ? "Portfolio"
                  : "name"}
              </Link>
            </motion.p>

            <motion.p
              style={{ marginLeft: "10px" }}
              initial={{ y: 400, opacity: 0 }}
              transition={{ duration: 1.4, delay: 2 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                onClick={() => dispatch(Header_mobile_modal(!true))}
                
                className={`header-link ${linkClick === "blog" || location.pathname === "/blog" || location.pathname.includes("blog") ? "activ" : ""}`}
                to="/blog"
              >
                {lang === "uz"
                  ? "Blog"
                  : lang === "ru"
                  ? "Блог"
                  : lang === "en"
                  ? "Blog"
                  : "name"}
              </Link>
            </motion.p>

            <motion.p
              style={{ marginLeft: "10px" }}
              initial={{ y: 400, opacity: 0 }}
              transition={{ duration: 1.6, delay: 2 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                onClick={() => dispatch(Header_mobile_modal(!true))}
                
                to="/Vacancy"
                className={`header-link ${
                  linkClick === "Vacancy" ||
                  location.pathname === "/Vacancy" ||
                  location.pathname.includes("Vacancy")
                    ? "activ"
                    : ""
                }`}
              >
                {lang === "uz"
                  ? "Vakansiya"
                  : lang === "ru"
                  ? "Вакансия"
                  : lang === "en"
                  ? "Vacancy"
                  : "name"}
              </Link>
            </motion.p>
            

            <motion.p
              style={{ marginLeft: "10px" }}
              initial={{ y: 400, opacity: 0 }}
              transition={{ duration: 1.8, delay: 2 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                onClick={() => dispatch(Header_mobile_modal(!true))}
                
                className={`header-link ${
                  linkClick === "contact" || location.pathname === "/contact"
                    ? "activ"
                    : ""
                }`}
                to="/contact"
              >
                {lang === "uz"
                  ? "Aloqa"
                  : lang === "ru"
                  ? "Контакт"
                  : lang === "en"
                  ? "Contact"
                  : "name"}
              </Link>
            </motion.p>
            <motion.p
              style={{ marginLeft: "10px" }}
              initial={{ y: 400, opacity: 0 }}
              transition={{ duration: 2, delay: 2 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                onClick={() => dispatch(Header_mobile_modal(!true))}
                
                to="/Ticket"
                className={`Ticket_link ${
                  linkClick === "Ticket" ||
                  location.pathname === "/Ticket" ||
                  location.pathname.includes("Ticket")
                    ? "activ"
                    : ""
                }`}
              >
                {lang === "uz"
                  ? "Chipta yarating"
                  : lang === "ru"
                  ? "Создать тикет"
                  : lang === "en"
                  ? "Create Ticket"
                  : "name"}
              </Link>
            </motion.p>
          </div>
          <div className="header_mobile_block">
            <motion.div
              className="header-select"
              style={{ marginLeft: "10px" }}
              initial={{ y: 400, opacity: 0 }}
              transition={{ duration: 2.2, delay: 2 }}
              animate={{ y: 0, opacity: 1 }}
            >
              {headerlanguage && headerlanguage.isFetched ? (
                <select
                  id="header-lang"
                  disabled
                  defaultValue={window.localStorage.getItem("lang")}
                  className="select header-lang"
                  onChange={(e) => {
                    window.localStorage.setItem("lang", e.target.value);
                    dispatch(set_Language(e.target.value));
                  }}
                >
                  {headerlanguage.data.map((item, index) => (
                    <option key={index} value={item.lang_code}>
                      {item.lang_code}
                    </option>
                  ))}
                </select>
              ) : (
                <></>
              )}
            </motion.div>
            <button
              onClick={() => dispatch(Header_mobile_modal(true))}
              className="header_menu_btn"
            >
              <img src={burger} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
