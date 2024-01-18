import "./main.scss";

import BlogCard from "../../../components/blog/blog-card";

import { useState, useEffect } from "react";

import axios from "axios";
import IconSwitch from '../../../assets/images/right-switch-icon/Iconly/Light/ArrowRightCircle.svg'

import { useSelector } from "react-redux";
const LeftBlock1 = ({ status }) => {
  const [filtered, setFiltered] = useState([]);
  const [cards, setCards] = useState(4);

  const [rightLink, setRightLink] = useState({
    isFetched: false,
    data: {},
    error: null,
  });

  const [blogLink, setBlogLink] = useState({
    isFetched: false,
    data: {},
    error: null,
  });
  const lang = useSelector((state) => state.data.lang);


  useEffect(() => {
    axios
      .get(
        `https://api.eurosoft.uz/posts?lang=${lang}&sort=-created_on&category_id=4`,
        {
          headers: {
            "api-token": process.env.REACT_APP_API_TOKEN,
          },
        }
      )

      .then(function (response) {
        setBlogLink({
          isFetched: true,
          data: response.data.data.items,
          errro: false,
        });
        setFiltered(response.data.data.items);
      })
      .catch(function (error) {
        setBlogLink({
          isFetched: true,
          data: [],
          error: error,
        });
      });

    axios
      .get(`https://api.eurosoft.uz/post-categories`, {
        headers: {
          "api-token": process.env.REACT_APP_API_TOKEN,
        },
      })

      .then(function (response) {
        setRightLink({
          isFetched: true,
          data: response.data.data.items,
          errro: false,
        });
      })
      .catch(function (error) {
        setRightLink({
          isFetched: true,
          data: [],
          error: error,
        });
      });
  }, [lang]);
  useEffect(() => {
    if (Array.isArray(blogLink.data)) {
      switch (status) {
        case rightLink.data[0].id:
          setFiltered(
            blogLink.data.filter(
              (el) => el.category_id === rightLink.data[0].id
            )
          );
          break;
        case rightLink.data[1].id:
          setFiltered(
            blogLink.data.filter(
              (el) => el.category_id === rightLink.data[1].id
            )
          );
          break;
        case rightLink.data[2].id:
          setFiltered(
            blogLink.data.filter(
              (el) => el.category_id === rightLink.data[2].id
            )
          );
          break;
        case rightLink.data[3].id:
          setFiltered(
            blogLink.data.filter(
              (el) => el.category_id === rightLink.data[3].id
            )
          );
          break;
        case rightLink.data[4]?.id:
          setFiltered(
            blogLink.data.filter(
              (el) => el.category_id === rightLink.data[4]?.id
            )
          );
          break;
        case rightLink.data[5]?.id:
          setFiltered(
            blogLink.data.filter(
              (el) => el.category_id === rightLink.data[5]?.id
            )
          );
          break;
        case rightLink.data[6]?.id:
          setFiltered(
            blogLink.data.filter(
              (el) => el.category_id === rightLink.data[6]?.id
            )
          );
          break;
        case rightLink.data[7]?.id:
          setFiltered(
            blogLink.data.filter(
              (el) => el.category_id === rightLink.data[7]?.id
            )
          );
          break;
        case rightLink.data[8]?.id:
          setFiltered(
            blogLink.data.filter(
              (el) => el.category_id === rightLink.data[8]?.id
            )
          );
          break;
        case rightLink.data[9]?.id:
          setFiltered(
            blogLink.data.filter(
              (el) => el.category_id === rightLink.data[9]?.id
            )
          );
          break;
        case rightLink.data[10]?.id:
          setFiltered(
            blogLink.data.filter(
              (el) => el.category_id === rightLink.data[10]?.id
            )
          );
          break;

        default:
          break;
      }
    }
  }, [status]);
  return (
    <div className="blog-left-page">
      {blogLink && blogLink.isFetched ? (
        filtered
          .slice(0, cards)
          .map((item, index) => (
            <BlogCard
              blog={true}
              title={item.title}
              lang={lang}
              key={index}
              img={item.image}
              ide={item.id}
              category={item.category}
            />
          ))
      ) : (
        <></>
      )}
      <button
        className="show-more"
        onClick={() => setCards((prev) => prev + 6)}
      >
        {lang === "en"
          ? "Show more"
          : lang === "ru"
            ? "Показать больше "
            : lang === "uz"
              ? "Ko'proq ko'rsatish"
              : null}
        <img className="sow-more-icon" src={IconSwitch} alt="" />
      </button>
    </div>
  );
};

export default LeftBlock1;
