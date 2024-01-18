import "./main.scss";
import ReactHtmlParser from 'react-html-parser';
import { useDispatch, useSelector } from "react-redux";
import { set_videos } from "../../../redux/action/action";
import { useEffect } from "react";
import { request } from "../../../api/request";

const AboutPage1 = () => {
  const dispatch = useDispatch();
  const aboutData = useSelector((state) => state.data.video);
  const lang = useSelector((state) => state.data.lang);
  function youtube_parser(url) {
    if (url === undefined) {
      return false;
    }
    var regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : false;
  }
  useEffect(() => {
    request
      .get(`/content/one/mini?id=10&lang=${lang}`,)
      .then((res) => dispatch(set_videos(res.data.data)))
      .catch((err) => console.log(err));
  }, [lang]);

  return (
    <>
      <div className="about-page1 container">
        <div data-aos="fade-up">
          <div className="about-page1-left">
            <iframe
              className="iframe_about"
              width="1424"
              height="652"
              src={`https://youtube.com/embed/${youtube_parser(
                aboutData && aboutData.video_url
              )}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div data-aos="fade-up">
          <div className="about-page1-right">
            {/* <h3 className="about-page1-text">{aboutData && aboutData.title}</h3> */}
            <div className="homepage-card-info" data-aos="fade-up">
              {ReactHtmlParser(aboutData && aboutData.description)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default AboutPage1;
