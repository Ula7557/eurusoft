import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./main.scss";
import ReactHtmlParser from "react-html-parser";
import SliderCard from "../../../components/home/slider-card";
import { useSelector } from "react-redux";

import RightSwitch from "../../../assets/images/img/home/rightswitch.svg";

export default function SyncSlider({ ourTeam }) {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const lang = useSelector((state) => state.data.lang);
  return (
    <div className="sss">
      <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
        {ourTeam && ourTeam.isFetched ? (
          ourTeam.data.map((item, index) => (
            <div className="person-info-block" key={index}>
              <h3 className="person-name">{item.title}</h3>
              <span className="person-work">{item.extra_text}</span>
              <div className="person-information">
                {ReactHtmlParser(item.description)}
              </div>
            </div>
          ))
        ) : (
          <></>
        )}
      </Slider>
      <Slider
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        {ourTeam && ourTeam.isFetched ? (
          ourTeam.data.map((info, index) => (
            <SliderCard
              key={index}
              img={info.image}
              name={info.title}
              work={info.extra_text}
            />
          ))
        ) : (
          <></>
        )}
      </Slider>
    </div>
  );
}
