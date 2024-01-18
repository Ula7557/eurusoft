import './main.scss'
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';
const HomePageCard = ({ title, description, img, id }) => {
    return (
        <Link to={`/blog/${id}`}  className="homepage-card">
            <div data-aos="fade-up">
                <div className="homepage-card-img-block">
                    <img src={img} alt="images" className="homepage-card-img" />
                </div>
                <div className="homepage-card-inner">
                    <h6 className="homepage-card-title">{title}</h6>
                    <div className="homepage-card-info">{ReactHtmlParser(description)}</div>
                </div>
            </div>
        </Link>

    );
}

export default HomePageCard;