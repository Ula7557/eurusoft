
import "./main.scss";
import Slider from "react-slick";


import LeftSwitch1 from '../../../assets/images/img/home/leftswetch.svg'
import RightSwitch1 from '../../../assets/images/img/home/rightswitch.svg'

import { useRef,useState,useEffect } from 'react';
import { request } from "../../../api/request";
import { useSelector } from "react-redux";



const HomePage6 = () => {

  function stopThis() {
    let iframe = document.getElementsByTagName("iframe")[0];
    const length = document.getElementsByTagName("iframe").length;
    let url = iframe.getAttribute("src");
    iframe.setAttribute("src", "");
    iframe.setAttribute("src", url);

    if (length > 0) {
      for (let i = 1; i < length; i++) {
        let iii = document.getElementsByTagName("iframe")[i];
        let url = iii.getAttribute("src");
        iii.setAttribute("src", "");
        iii.setAttribute("src", url);
      }
    }
  }

  function youtube_parser(url) {
    let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    let match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : false;
  }


const lang = useSelector((state) =>state.data.lang)
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

    const [ourText, setOurText] = useState({
      isFetched: false,
      data: {},
      error: null,
    });
    useEffect(() => {
      request
        .get(`/content/one/mini?id=83&lang=${lang} `, { headers: { 'api-token': 'p12378' } })
        .then(function (res) { setOurText({ isFetched: true, data: res.data.data, error: false }) })
        .catch(function (err) { setOurText({ isFetched: true, data: [], error: err }) })
        request
        .get(`/content/all/mini?parent=83&lang=${lang} `, { headers: { 'api-token': 'p12378' } })
        .then(function (res) { setyoutubeVideo({ isFetched: true, data: res.data.data, error: false }) })
        .catch(function (err) { setyoutubeVideo({ isFetched: true, data: [], error: err }) })
    }, [lang])

    const [youtubeVideo, setyoutubeVideo] = useState({
      isFetched: false,
      data: {},
      error: null,
    });
    
  const slider = useRef(null);

  return (
    <div data-aos="fade-up">
    <div className="home-page6 container">
        {ourText && ourText.isFetched ? (
          <h5 className="home-page6-text ">{ourText.data.title}</h5>
        ) : (
          <></>
        )}
        <div className="youtube-video">
          <Slider ref={slider} {...settings}>
            {youtubeVideo.isFetched === true &&
              youtubeVideo.data.map((el) => (
                <div key={el.video_url} className="youtube-iframe">
                  <iframe
                    className="youtube-iframe_mobile"
                    src={`https://www.youtube.com/embed/${youtube_parser(
                      el.video_url
                    )}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    
                  ></iframe>
                </div>
              ))}
          </Slider>

          <div className="slick-controllers3">
            <button
              className="btn-caro"
              onClick={() => {
                stopThis();
                slider?.current?.slickPrev();
                
              }}
            >
              {" "}
              <img src={LeftSwitch1} alt="prev" className="switch2" />{" "}
            </button>
            <button
              className="btn-caro"
              onClick={() => {
                stopThis();
                slider?.current?.slickNext();
              }}
            >
              {" "}
              <img src={RightSwitch1} alt="next" className="switch2" />{" "}
            </button>
          </div>
        </div>
    </div>
    </div>
  );
};

export default HomePage6;
