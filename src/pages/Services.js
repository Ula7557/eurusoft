import ShadovText from "../components/shadov-text";
import TextLink from "../components/text-link/text-link";

import Servicescard from "../containers/services";

import ServicesPage2 from "../containers/services/servicesPage2/servicesPage2";
import ServicesCardIcon from "../containers/services/servicesPage3";

import Accordion from "../containers/services/accardion-block";
import AboutPage7 from "../containers/about/aboutPage7";
import { request } from "../api/request";
import { useState, useEffect } from "react";
import parse from "html-react-parser";
import { Helmet } from "react-helmet";
import SpinnerEffect from "../components/spinner/spinner";

import { useSelector } from "react-redux";

const Services = () => {
  const lang = useSelector((state) => state.data.lang);
  const [service, setService] = useState({
    isFetched: false,
    data: {},
    error: null,
  });

  const [mobile, setMobile] = useState({
    isFetched: false,
    data: {},
    error: null,
  });
  const [webApp, setWebApp] = useState({
    isFetched: false,
    data: {},
    error: null,
  });

  useEffect(() => {
    request
      .get(`/content/one/mini?id=15&lang=${lang}`, {
        headers: { "api-token": "p12378" },
      })
      .then(function (res) {
        setService({ isFetched: true, data: res.data.data, error: false });
      })
      .catch(function (err) {
        setService({ isFetched: true, data: [], error: err });
      });

    request
      .get(`/content/one/mini?id=22&lang=${lang}`, {
        headers: { "api-token": "p12378" },
      })
      .then(function (res) {
        setMobile({ isFetched: true, data: res.data.data, error: false });
      })
      .catch(function (err) {
        setMobile({ isFetched: true, data: {}, error: err });
      });

    request
      .get(`/content/one/mini?id=23&lang=${lang}`, {
        headers: {
          "api-token": "p12378",
        },
      })
      .then(function (res) {
        setWebApp({
          isFetched: true,
          data: res.data.data,
          error: false,
        });
      })

      .catch(function (err) {
        setWebApp({
          isFetched: false,
          data: [],
          error: err,
        });
      });
  }, [lang]);

  const [ourService, setOurService] = useState({
    isFetched: false,
    data: {},
    error: null,
  });
  useEffect(() => {
    request
      .get(`/content/one/page?id=6&lang=${lang}`, {
        headers: { "api-token": "p12378" },
      })
      .then(function (res) {
        setOurService({ isFetched: true, data: res.data.data, error: false });
      })
      .catch(function (err) {
        setOurService({ isFetched: true, data: [], error: err });
      });
  }, [lang]);

  return (
    <div className="services">
      <Helmet>
        <title>{`Eurosoft | ${ourService.data.extra_text}`}</title>
      </Helmet>
      <div className="services-inner">
        <TextLink info1={ourService.data.extra_text} />
        <hr className="hr_class" />
        <div className="services-text container">
          {ourService && ourService.isFetched ? (
            <ShadovText
              shadov={ourService.data.title}
              text={ourService.data.extra_text}
              classes={"center"}
            />
          ) : (
            <SpinnerEffect />
          )}

          <Servicescard
            images={service && service.data.image}
            serviceName={service && service.data.title}
            info1={parse(`${service && service.data.description}`)}
            info2={parse(`${service && service.data.extra_desc}`)}
          />
          <ServicesPage2 />
          <div className="services-page3">
            <Servicescard
              classess={"row"}
              images={mobile && mobile.data.image}
              serviceName={mobile && mobile.data.title}
              desc={parse(`${mobile && mobile.data.description}`)}
            />
          </div>
          <div className="services-page4">
            <Servicescard
              images={webApp && webApp.data.image}
              serviceName={webApp && webApp.data.title}
              desc={parse(`${webApp && webApp.data.description}`)}
            />
          </div>
          <div className="service-page5">
            <ServicesCardIcon />
          </div>
          <Accordion />
          <AboutPage7 lang={lang} />
        </div>
      </div>
    </div>
  );
};

export default Services;
