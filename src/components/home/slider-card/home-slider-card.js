import './main.scss'
import ReactHtmlParser from "react-html-parser";
const SliderCard = ({img, name, work,description}) => {
    return ( 
        <div data-aos="fade-up">
        <div className="slider-card">
        <div className="slider-div">
            <div className="slider-person">
                <div className="slider-images-block">
                    <img src={img} alt="" className="slider-images" />
                </div>
                <div className="slider-info">
                    <h6 className="slider-name">{name}</h6>
                    <p className="slider-text">{work}</p>
                    <div className="person-description">
                      {ReactHtmlParser(description)}
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
     );
}
 
export default SliderCard;