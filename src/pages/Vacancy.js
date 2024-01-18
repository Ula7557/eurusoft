import ShadovText from "../components/shadov-text";
import LeftBlock from "../containers/home/left-block";
import VacancyPage1 from "../containers/vacancy_page1/vacancy_page1";
import Qol from "../assets/images/qol.png";
import Slider from "react-slick";
import ServerCard from "../components/home/our-server-card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { request } from "../api/request";
import Spinner from '../components/spinner/spinner'
import { Helmet } from "react-helmet";

import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";


import LeftSwitch1 from '../assets/images/img/home/leftswetch.svg'
import RightSwitch1 from '../assets/images/img/home/rightswitch.svg'

import axios from "axios";
const Vacancy = () => {
  const lang = useSelector((state) => state.data.lang);

  const [workCard, setWorkCard] = useState({
    isFetched: false,
    data: {},
    error: null,
  });

  const slider = useRef(null);

  const [state, setState] = useState({
    isFetched: false,
    data: {},
    error: null,
  });

  const [vacan, setVacan] = useState({
    isFetched: false,
    data: {},
    error: null,
  });

  useEffect(() => {
    request
      .get(`/content/one/mini?id=128&lang=${lang}`, { headers: { 'api-token': 'p12378' } })
      .then(function (res) { setVacan({ isFetched: true, data: res.data.data, error: false }) })
      .catch(function (err) { setVacan({ isFetched: true, data: [], error: err }) })
  }, [lang]);

  useEffect(() => {
    Promise.all([
      request("/content/one/mini?id=119"),
      request("/content/one/mini?id=120"),
      request("/content/one/mini?id=121"),
      request("/content/one/mini?id=126"),
      request("/content/one/mini?id=127")])
      .then(responses => {
        const results = responses.map(r => r.data.data);
        setState(results);
      })
      .catch(err => console.log(err));
  }, []);

  console.log(state);
  useEffect(() => {
    axios
      .get(`https://api.eurosoft.uz/content/all/vacancy`, {
        headers: {
          "api-token": process.env.REACT_APP_API_TOKEN,
        },
        params: {
          lang,
        },
      })

      .then(function (response) {
        setWorkCard({
          isFetched: true,
          data: response.data.data,
          errro: false,
        });
      })
      .catch(function (error) {
        setWorkCard({
          isFetched: true,
          data: [],
          error: error,
        });
      });
  }, [lang]);

  const vacancySlick = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="vacancy_page">
      <Helmet>
        <title>{`Eurosoft | ${vacan.data.title}`}</title>
      </Helmet>
      <div className="vacancy_page_inner">
        <ShadovText shadov={vacan.data.title} text={'Eurosoft'} classes={"center"} />
        <LeftBlock classes={"vacancy_left-block"} classAnime={'anime-box2'}/>
        {
          state.length > 0 ? (
            state.map(item => (
              <VacancyPage1
                title={item.title}
                miniDescription={item.extra_desc}
                img={item.image}
                miniTitle={item.description}
                classes={item.extra_text}
                clasis={item.link}
                description={item.video_url}
              />
            ))
            
          ) : (
            <Spinner/>
          )
        }
      </div>
      <div className="vacancy_card_block container">
        <img src={Qol} className="vacancy-qol-top" alt="" />
        <div className="vacancy_card_inner">
          <div data-aos="fade-up">
            {
              <Slider ref={slider} {...vacancySlick}>
                {
                  workCard && workCard.isFetched ? (
                    workCard.data.map(item => (
                      <ServerCard
                        icon={item.image}
                        name={item.title}
                        extraTitle={item.description}
                        clasCard={"vacancy_card"}
                        id={item.id}
                      />
                    ))
                  ) : (
                    <></>
                  )
                }
              </Slider>
            }
          </div>
          <div className="slick-controllers3">
            <button
              className="btn-caro"
              onClick={() => {
                slider?.current?.slickPrev();
              }}
            >
              {" "}
              <img src={LeftSwitch1} alt="prev" className="switch2" />{" "}
            </button>
            <button
              className="btn-caro"
              onClick={() => {
                slider?.current?.slickNext();
              }}
            >
              {" "}
              <img src={RightSwitch1} alt="next" className="switch2" />{" "}
            </button>
          </div>
        </div>
        <img src={Qol} className="vacancy-qol-bottom" alt="" />
      </div>
    </div>
  );
};

export default Vacancy;
