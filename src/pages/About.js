import ShadovText from "../components/shadov-text";
import TextLink from "../components/text-link/text-link";
import AboutPage1 from "../containers/about/aboutPage1";
import AboutPage2 from "../containers/about/aboutPage2";
import AboutPage3 from "../containers/about/aboutPage3";
import AboutPage4 from "../containers/about/aboutPage4";
import AboutPage5 from "../containers/about/aboutPage5";
import AboutPage6 from "../containers/about/aboutPage6/aboutPage6";
import AboutPage7 from "../containers/about/aboutPage7";
import { request } from "../api/request";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import SpinnerEffect from "../components/spinner/spinner";
import Images from '../../src/assets/images/0B9A9554.jpg'
import AboutPage2team from '../containers/about/aboutPage2team/aboutPage2team'
import AboutPage1copy from "../containers/about/aboutPage1copy";

import { useSelector } from "react-redux";

const About = () => {
  const lang = useSelector((state) => state.data.lang);
  const [aboutExperence, setAboutExperence] = useState({
    isFetched: false,
    data: {},
    error: null,
  });
  useEffect(() => {
    request
      .get(`/content/one/page?id=5&lang=${lang}`, {
        headers: { "api-token": "p12378" },
      })
      .then(function (res) {
        setAboutContent({ isFetched: true, data: res.data.data, error: false });
      })
      .catch(function (err) {
        setAboutContent({ isFetched: true, data: [], error: err });
      });
  }, [lang]);

  const [aboutContent, setAboutContent] = useState({
    isFetched: false,
    data: {},
    error: null,
  });

  return (
    <>
      {aboutContent && aboutContent.isFetched ? (
        <div className="about">
          <Helmet>
            <title>{`Eurosoft | ${aboutContent.data.title}`}</title>
          </Helmet>
          <TextLink
            info1={
              lang === "en"
                ? "About"
                : lang === "uz"
                ? "Biz haqimizda"
                : lang === "ru"
                ? "О нас"
                : ""
            }
          />
          <hr className="hr_class" />
          <div className="about-shadov-text">
            <ShadovText
              shadov={aboutContent.data.title}
              text={aboutContent.data.extra_text}
              classes={"center"}
            />
            <AboutPage1copy/>
            <AboutPage1 />
            <AboutPage2team
            image={Images}
              extra_desc={'“Eurosoft” has gathered professionals in their fields and become a strong team since it’s establishment. Our professional employees, who consider quality and efficiency as the main criteria of their work, hand over all projects to clients on time and with a high level of responsibility. The fact that most of our team members are young people encourages us to be innovative and creative.'}
              text={'Eurosoft is an IT company with its own values.We always take care of our employees and are happy to provide them with favourable working conditions, to support any initiatives to develop their skills and knowledge!'}
            />
            <AboutPage3 />
            <AboutPage2
              image={aboutExperence.data.image}
              extra_desc={aboutExperence.data.extra_desc}
            />
            <AboutPage4 />
            <AboutPage5 />
            <AboutPage6 />
            <AboutPage7 lang={lang} />
          </div>
        </div>
      ) : (
          <SpinnerEffect/>
      )}
    </>
  );
};

export default About;
