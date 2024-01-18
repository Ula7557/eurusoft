
import './main.scss'
import CountUp from 'react-countup';

import { request } from '../../../api/request';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const AboutPage3 = () => {

    const lang = useSelector((state) =>state.data.lang)
    const [aboutChildren, setAboutChildren] = useState({
        isFetched: false,
        data: {},
        error: null,
    });
    useEffect(() => {
        request
            .get(`/content/all/mini?parent=53&lang=${lang}`, { headers: { 'api-token': 'p12378' } })
            .then(function (res) { setAboutChildren({ isFetched: true, data: res.data.data, error: false }) })
            .catch(function (err) { setAboutChildren({ isFetched: true, data: [], error: err }) })
    }, [lang])
    return (
      <>
        {aboutChildren && aboutChildren.isFetched ? (
          <div data-aos="flip-up">
            <div className="about-page3">
              <div className="about-page3-inner container">
                {aboutChildren.data.map((item, index) => (
                  <div key={index} className="about-page3-card">
                    <h5 className="about-page3-card-text">
                      <CountUp
                        delay={1}
                        duration={5}
                        start={0}
                        end={item.extra_text}
                      /> </h5>
                    <p className="about-page3-card-info">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </>
    );
}

export default AboutPage3;




