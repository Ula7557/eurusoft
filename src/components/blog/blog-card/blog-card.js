import './main.scss'
import IconSwitch from '../../../assets/images/right-switch-icon/Iconly/Light/ArrowRightCircle.svg'
import { Link } from 'react-router-dom';
const BlogCard = ({ blog, ide, img, title, category, lang, portfolio_card }) => {
  const status = blog ? "/blog/" : "/portfolio/";
  return (
    <div data-aos="zoom-in-down" className={`blog-card_stil ${portfolio_card}`}>
      <Link to={status + ide} className={`blog-card`}>
        <a href>
          <div className="blog-card-img-block">
            <img src={img} alt="" className="card-img" />
          </div>
          <div className="blog-card-info">
            <h6 className="card-text">{title}</h6>
            <div className="card-footer">
              <span className="card-span">{category}</span>
              <div className="card-bottom-div" >
              <a href className="card-link">
               {
                lang === "en"
                ? "More"
                : lang === "ru"
                ? "Более"
                : lang === "uz"
                ? "Ko'proq"
                : null
               }
              </a>
              <img src={IconSwitch} alt="icon" className="blog-card-icon" />
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default BlogCard;