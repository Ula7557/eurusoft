import "./main.scss";
import { useRef, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { set_notification } from "../../../redux/action/action";
import ReCAPTCHA from "react-google-recaptcha";
import 'react-toastify/dist/ReactToastify.css';
const ContactPages2 = ({ title, contact_block }) => {
  const lang = useSelector((state) => state.data.lang);
  const dispatch = useDispatch();
  const [value, setValue] = useState(null);
  const captchaHandler = (val) => {
    setValue(val);
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const nameRef = useRef();
  const mailRef = useRef();
  const subjectRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    subjectRef.current.classList.remove("require");
    nameRef.current.classList.remove("require");
    mailRef.current.classList.remove("require");
    if (nameRef.current.value.length === 0) {
      return nameRef.current.classList.add("require");
    }
    if (mailRef.current.value.length === 0) {
      return mailRef.current.classList.add("require");
    }
    if (subjectRef.current.value.length === 0) {
      return subjectRef.current.classList.add("require");
    }
    const bodyFormData = new FormData();

    bodyFormData.append("name", formData.name);
    bodyFormData.append("email", formData.email);
    bodyFormData.append("subject", formData.subject);
    bodyFormData.append("message", formData.message);

    const bodyContactData = new FormData();

    bodyContactData.append("title", formData.name);
    bodyContactData.append("client_email", formData.email);
    bodyContactData.append("subject", formData.subject);
    bodyContactData.append("message", formData.message);
    bodyContactData.append("lang", lang);

    axios
      .post("https://api.eurosoft.uz/forms/contact-form", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "api-token": process.env.REACT_APP_API_TOKEN,
        },
      })
      .then((res) => {
        if (res.data.status === 0) {
          dispatch(set_notification({ error: true, show: true }));

        }
        if (res.data.status === 1) {
          dispatch(set_notification({ error: false, show: true }));
          send_contact(bodyContactData)
        }

        setFormData({
          name: "",
          email: "",
          message: "",
          subject: "",
        });
        subjectRef.current.classList.remove("require");
        nameRef.current.classList.remove("require");
        mailRef.current.classList.remove("require");
      })
      .catch((err) => dispatch(set_notification({ error: true, show: true, })));


  };
  const send_contact = bodyContactData => {
    axios
      .post("https://api.eurosoft.uz/content/contact", bodyContactData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "api-token": process.env.REACT_APP_API_TOKEN,
        },
      })
      .then((res) => {
        if (res.data.status === 0) {
          dispatch(set_notification({ error: true, show: true }));
        }
        if (res.data.status === 1) {
          dispatch(set_notification({ error: false, show: true }));
        }

        subjectRef.current.classList.remove("require");
        nameRef.current.classList.remove("require");
        mailRef.current.classList.remove("require");
      })
  }
  return (
    <div data-aos="fade-up">
      <div className={`contact-pages2 container ${contact_block}`}>
        <div className="contact-pages2-left">
          <h6 className="contact-pages2-text">{title}</h6>
        </div>
        <div className="contact-pages2-right">
          <form
            action=""
            className="contact-form"
            onSubmit={(e) => handleSubmit(e)}

          >
            <h6 className="contact-pages2-text contact-pages2-extraText">{title}</h6>
            <input
              type="text"
              className="copy-pages-input"
              placeholder={
                lang === "uz"
                  ? "Ismingiz"
                  : lang === "ru"
                    ? "Имя"
                    : lang === "en"
                      ? "Name"
                      : "Name"
              }
              name="name"
              ref={nameRef}
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
            />
            <input
              type="mailto"
              className="copy-pages-input"
              ref={mailRef}
              value={formData.email}
              placeholder={
                lang === "uz"
                  ? "Elektron pochta"
                  : lang === "ru"
                    ? "Эл. адрес"
                    : lang === "en"
                      ? "Email address"
                      : "Email address"
              }
              name="email"
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
            />
            <input
              type="text"
              className="copy-pages-input"
              placeholder={
                lang === "uz"
                  ? "Mavzu"
                  : lang === "ru"
                    ? "Tема"
                    : lang === "en"
                      ? "Subject"
                      : "Subject"
              }
              name="subject"
              value={formData.subject}
              ref={subjectRef}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
            />
            <textarea
              name="message"
              className="contact-pages-textarea copy-pages-input"
              value={formData.message}
              placeholder={
                lang === "uz"
                  ? "Xabar"
                  : lang === "ru"
                    ? "Cообщение"
                    : lang === "en"
                      ? "Message"
                      : "Message"
              }
              id=""
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              cols="30"
              rows="10"
            ></textarea>
            <ReCAPTCHA
              sitekey={"6LdufSoaAAAAABvxbl84L2gxWYKUrg-bVaYzna8s"}
              className="recaptcha"
              onChange={captchaHandler}
              hl={lang}
            />

            <button
              style={{ cursor: value !== null ? "pointer" : "not-allowed" }}
              className="contact-form-button"
              disabled={value !== null ? false : true}
            >
              {lang === "en"
                ? "Send messages"
                : lang === "ru"
                  ? "Отправлять сообщения"
                  : lang === "uz"
                    ? "Xabarlarni yuborish"
                    : null}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPages2;
