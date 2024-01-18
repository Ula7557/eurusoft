import "./main.scss";
import ReactHtmlParser from 'react-html-parser';
import { useDispatch, useSelector } from "react-redux";
import { set_videos } from "../../../redux/action/action";
import { useEffect } from "react";
import { request } from "../../../api/request";

const AboutPage1copy = () => {
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
      <div className="about-page1 container about-page1-copy">
        <div data-aos="fade-up">
          <div className="about-page1-left">
            {/* <iframe
              className="iframe_about"
              width="1424"
              height="652"
              src={`https://youtu.be/768at_j78Q8`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe> */}
            <iframe className="iframe_about" width="1424" height="652" src="https://www.youtube.com/embed/768at_j78Q8" title="Eurosoft haqida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>

        <div data-aos="fade-up" className="about-page1-right_block">
          <div className="about-page1-right">
            <h3 className="about-page1-text">{aboutData && aboutData.title}</h3>
            <p className=" about_homepage-card-info" data-aos="fade-up">
              Eurosoft is a company with its own creative way of working and innovative ideas
            </p>
            <p className=" about_homepage-card-info" data-aos="fade-up">
              We have developed software in various direction with the unity of our professional team. Moreover, by doing quality of work, we have been making a significant contribution to the changes of many organizations.
            </p>
            <p className=" about_homepage-card-info" data-aos="fade-up">
              Eurosoft is becoming a successful company by being able to turn various ideas of customers into practical applications, offering them innovative IT solutions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};


export default AboutPage1copy;
