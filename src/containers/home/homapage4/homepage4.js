import ShadovText from "../../../components/shadov-text";
import "./main.scss";
import { request } from "../../../api/request";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import QolBottom from "../../../assets/images/qol.png";


import ServerCard1 from "../../../components/home/our-server-card copy";
const HomePage4 = () => {
  const lang = useSelector((state) => state.data.lang);
  const [home4, setHome4] = useState({
    isFetched: false,
    data: {},
    error: null,
  });
  useEffect(() => {
    request
      .get(`/content/all/service?lang=${lang}`)
      .then(function (res) {
        setHome4({ isFetched: true, data: res.data.data, error: false });
      })
      .catch(function (err) {
        setHome4({ isFetched: true, data: [], error: err });
      });
  }, [lang]);

  return (
    <div className="home-page4 container">
      <img src={QolBottom} alt="" className="home-page4_qol" />
      <div data-aos="fade-right">
        <ShadovText
          shadov={
            lang === "en"
              ? "Eurosoft"
              : lang === "ru"
                ? "Eurosoft"
              : lang === "uz"
                  ? "Eurosoft"
              : null
          }
          text={
            lang === "en"
              ? "Services"
              : lang === "ru"
              ? "Сервисы"
              : lang === "uz"
              ? "Xizmatlar"
              : null
          }
        />
      </div>

      <div className="server-card-block">
        {home4 && home4.isFetched ? (
          home4.data.map((item, index) => (
            <ServerCard1
              icon={item.image}
              name={item.title}
              info={item.description}
              key={index}
            />
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default HomePage4;
