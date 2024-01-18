import BlogCard from "../../components/blog/blog-card";
import "./main.scss";

import { useState, useEffect } from "react";
import axios from "axios";

const PortfolioBlock = ({ information, cards, lang, rightLink }) => {

  const [portfolioFiltered, setPortfolioFiltered] = useState([]);
  const [blogLink, setBlogLink] = useState({
    isFetched: false,
    data: {},
    error: null,
  });

  useEffect(() => {
    axios
      .get(
        `https://api.eurosoft.uz/projects`,
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
        setPortfolioFiltered(response.data.data.items);
      })
      .catch(function (error) {
        setBlogLink({
          isFetched: true,
          data: [],
          error: error,
        });
      });
  }, []);
  useEffect(() => {
    if (Array.isArray(blogLink.data)) {
      switch (information) {
        case rightLink.data[0].id:
          setPortfolioFiltered(blogLink.data.filter((el) => el.category_id === rightLink.data[0].id));
          break;
        case rightLink.data[1].id:
          setPortfolioFiltered(blogLink.data.filter((el) => el.category_id === rightLink.data[1].id));
          break;
        case rightLink.data[2].id:
          setPortfolioFiltered(blogLink.data.filter((el) => el.category_id === rightLink.data[2].id));
          break;
        case rightLink.data[3].id:
          setPortfolioFiltered(blogLink.data.filter((el) => el.category_id === rightLink.data[3].id));
          break;
        case rightLink.data[4]?.id:
          setPortfolioFiltered(blogLink.data.filter((el) => el.category_id === rightLink.data[4]?.id));
          break;
        case rightLink.data[5]?.id:
          setPortfolioFiltered(blogLink.data.filter((el) => el.category_id === rightLink.data[5]?.id));
          break;
        case rightLink.data[6]?.id:
          setPortfolioFiltered(blogLink.data.filter((el) => el.category_id === rightLink.data[6]?.id));
          break;
        case rightLink.data[7]?.id:
          setPortfolioFiltered(blogLink.data.filter((el) => el.category_id === rightLink.data[7]?.id));
          break;
        case rightLink.data[8]?.id:
          setPortfolioFiltered(blogLink.data.filter((el) => el.category_id === rightLink.data[8]?.id));
          break;
        case rightLink.data[9]?.id:
          setPortfolioFiltered(blogLink.data.filter((el) => el.category_id === rightLink.data[9]?.id));
          break;
        case rightLink.data[10]?.id:
          setPortfolioFiltered(blogLink.data.filter((el) => el.category_id === rightLink.data[10]?.id));
          break;
        case "All":
          setPortfolioFiltered([...blogLink.data]);
          break;
        default:
          break;
      }
    }

  }, [information]);
  return (
    <div className="portfolio-block container">
      {
        blogLink.isFetched ? (
          portfolioFiltered.slice(0, cards).map((item, index) => (
            <BlogCard
              ide={item.id}
              key={index}
              img={item.image}
              title={item.title}
              category={item.category}
              lang={lang}
              portfolio_card={'portfolio_card'}
            />
          ))
        ) : (
          null
        )
      }
    </div>
  );
};

export default PortfolioBlock;
