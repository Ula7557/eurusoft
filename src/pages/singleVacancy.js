import "./main.scss";
import TextLink from "../components/text-link";
import SingleVacancyLi from "../components/singlevacancy_li/single_vacancy_li";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import Spinner from "../components/spinner/spinner";
import { set_notification } from "../../src/redux/action/action";
import SpinnerEffect from "../components/spinner/spinner";
import ReactHtmlParser from "react-html-parser";

const SingleVacancy = ({ match }) => {

  const lang = useSelector((state) => state.data.lang);
  const [singleVacancy, setSingleVacancy] = useState({
    isFetched: false,
    data: {},
    error: null,
  });
  console.log(match);
  useEffect(() => {
    axios
      .get(
        `https://api.eurosoft.uz/content/one/vacancy?id=${match.params.id}&lang=${lang}`,
        {
          headers: {
            "api-token": process.env.REACT_APP_API_TOKEN,
          },
        }
      )

      .then(function (response) {
        setSingleVacancy({
          isFetched: true,
          data: response.data.data,
          errro: false,
        });
      })

      .catch(function (error) {
        setSingleVacancy({
          isFetched: true,
          data: [],
          error: error,
        });
      });
  }, [match.params, lang]);

  const [formTrue, setFormTrue] = useState(false);
  const [formData, setFormData] = useState({
    lang: lang,
  });
  const dispatch = useDispatch();

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const failsvRef = useRef();

  const formSubmit = (e) => {
    e.preventDefault();
    nameRef.current.classList.remove("require");
    emailRef.current.classList.remove("require");
    phoneRef.current.classList.remove("require");
    failsvRef.current.classList.remove("require");
    if (nameRef.current.value.length === 0) {
      return nameRef.current.classList.add("require");
    }
    if (emailRef.current.value.length === 0) {
      return emailRef.current.classList.add("require");
    }
    if (phoneRef.current.value.length === 0) {
      return phoneRef.current.classList.add("require");

    }

    const bodyFormData = new FormData();
    for (let [key, value] of Object.entries(formData)) {
      bodyFormData.append(key, value);
    }
    if (!formData.client_CV) {
      return alert("Please submit your CV");
    }

    setFormTrue(true);
    axios
      .post("https://api.eurosoft.uz/content/vacancy", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "api-token": process.env.REACT_APP_API_TOKEN,
        },
      })
      .then((res) => {
        if (res.data.status === 0) {
          dispatch(set_notification({ error: true, show: true }));
          setFormTrue(false);
        }
        if (res.data.status === 1) {
          dispatch(set_notification({ error: false, show: true }));
          setFormTrue(false);
        }

        nameRef.current.classList.remove("require");
        phoneRef.current.classList.remove("require");
        emailRef.current.classList.remove("require");
        failsvRef.current.classList.remove("require");
      })
      .catch((err) => dispatch(set_notification({ error: true, show: true })));
  };

  return singleVacancy.data && singleVacancy.isFetched ? (
    <div className="single_vacancy ">
      {formTrue ? <SpinnerEffect /> : null}
      <Helmet>
        <meta property="og:title" content={singleVacancy.data.title} />
        <meta property="og:site_name" content={window.location} />
        <meta
          property="og:description"
          content={ReactHtmlParser(singleVacancy.data.description)}
        />
        <meta property="og:image" content={singleVacancy.data.image} />
        <meta name="description" content={singleVacancy.data.title} />
      </Helmet>
      <TextLink info2={"Detail"} info1={"vacancy /"} />
      <div className="container">
        <div className="single_vacancy_inner">
          <div className="single_vacancy_inner_left">
            <div data-aos="fade-up">
              <h2 className="single_vacancy_inner_left_title">
                {singleVacancy.data.title}
              </h2>
            </div>
            <SingleVacancyLi data={singleVacancy.data.extra_desc} />
          </div>
          <div className="single_vacancy_inner_right">
            <form
              action=""
              onSubmit={(e) => formSubmit(e)}
              className="single_vacancy_form"
            >
              <div data-aos="fade-up">
                <h4 className="single_vacancy_form_title">
                  Submit application
                </h4>
              </div>
              <div data-aos="fade-up">
                <input
                  type="text"
                  placeholder="Name"
                  className="single_vacancy_input"
                  name="title"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  ref={nameRef}
                />
              </div>
              <div data-aos="fade-up">
                <input
                  type="mailto"
                  placeholder="Email"

                  className="single_vacancy_input"
                  value={formData.client_email}
                  name="client_email"
                  onChange={(e) =>

                    setFormData({
                      ...formData,

                      [e.target.name]: e.target.value,
                    })

                  }
                  ref={emailRef}
                />
              </div>
              <div data-aos="fade-up">
                <input
                  type="number"
                  placeholder="Phone Number"
                  maxLength="10"
                  className="single_vacancy_input"
                  value={formData.cliet_phone}
                  name="cliet_phone"
                  onChange={(e) => {
                    if (e.target.value.length > 12) return null
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  }
                  ref={phoneRef}
                />
              </div>
              <div data-aos="fade-up">
                <input
                  type="file"
                  placeholder="Your CV"
                  className="single_vacancy_input single_vacancy_file"
                  id="file_cv"
                  name="client_CV"
                  // required
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.files[0],
                    });
                    document.querySelector(
                      ".single_vacancy_file_label"
                    ).textContent = e.target.files[0].name;
                  }}
                  ref={failsvRef}
                />
                <label
                  htmlFor="file_cv"
                  className="single_vacancy_file_label"
                >Your CV</label>
              </div>

              <div className="single_vacancy_button-block">
                <div data-aos="fade-up">
                  <input
                    type="file"
                    placeholder="Upload your CV"
                    id="single_cv_input"
                    className="single_cv_input_none"
                  />
                  <label htmlFor="file_cv" className="single_cv_input">
                    Upload your CV
                  </label>
                </div>
                <div data-aos="fade-up">
                  <span>or</span>
                </div>

                <div data-aos="fade-up">
                  <a target="_blank" rel="noreferrer" href="https://docs.google.com/forms/d/1XNkNLeQIPN9g21zf1w2aeo27Kl1a-o55r7zwpzbsPUg/viewform?edit_requested=true" className="google_forms_cv">
                    Fill the form
                  </a>
                </div>
              </div>
              <div className="single_vacancy_btn_block">
                <div data-aos="fade-up">
                  <button type="submit" className="single_vacancy_btn">
                    Send Us
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Spinner />
  );
};

export default SingleVacancy;
