import ContactPage1 from "../containers/contact";
import "./main.scss";
import TextLink from "../components/text-link";
import ShadovText from "../components/shadov-text";
import ContactPages2 from "../containers/contact/contactPages2";
import { useState, useEffect } from "react";
import { request } from "../api/request";
import { Helmet } from "react-helmet";
import SpinnerEffect from "../components/spinner/spinner";

import { useSelector } from "react-redux";
const Contact = () => {
  const lang = useSelector((state) => state.data.lang);
  const [contact, setContact] = useState({
    isFetched: false,
    data: {},
    error: null,
  });
  useEffect(() => {
    request
      .get(`/content/one/page?id=9&lang=${lang}`, {
        headers: { "api-token": "p12378" },
      })
      .then(function (res) {
        setContact({ isFetched: true, data: res.data.data, error: false });
      })
      .catch(function (err) {
        setContact({ isFetched: true, data: [], error: err });
      });

    request
      .get(`/content/one/mini?id=94&lang=${lang}`, {
        headers: { "api-token": "p12378" },
      })
      .then(function (res) {
        setContactText({ isFetched: true, data: res.data.data, error: false });
      })
      .catch(function (err) {
        setContactText({ isFetched: true, data: [], error: err });
      });
  }, [lang]);

  const [contacttext, setContactText] = useState({
    isFetched: false,
    data: {},
    error: null,
  });
  return (
    <>
      {contact && contact.isFetched ? (
        <div className="contact">
          <Helmet>
            <title>
              Eurosoft |{" "}
              {lang === "en"
                ? "Contact"
                : lang === "uz"
                ? "Aloqa"
                : lang === "ru"
                ? "Контакт"
                : ""}
            </title>
          </Helmet>
          <TextLink
            info1={
              lang === "en"
                ? "Contact"
                : lang === "uz"
                ? "Aloqa"
                : lang === "ru"
                ? "Контакт"
                : ""
            }
          />
          <hr className="hr_class" />
          <div className="contact-shadovtext container">
            <div data-aos="fade-up">
              <ShadovText
                shadov={contact.data.title}
                text={contact.data.extra_text}
                classes={"center"}
              />
            </div>
          </div>
          <ContactPage1 lang={lang} />
          <ContactPages2
            title={contacttext.data.title}
            contact_block={"contact_block_box"}
          />
        </div>
      ) : (
        <SpinnerEffect />
      )}
    </>
  );
};

export default Contact;
