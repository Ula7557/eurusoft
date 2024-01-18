import './main.scss'
import ReactHtmlParser from 'react-html-parser';


const Servicescard = ({images, info1, info2, info3, info4,info5, span1, span2, serviceName, dev, classess, desc, inf, class71}) => {
    return (
        <div className={`services-card container ${classess}`}>
            <div className="services-card-img-block">
                <div data-aos="fade-up">
                    <img src={images} alt={dev} className="services-card-img" />
                </div>
            </div>

            <div className={`services-card-info_box ${class71}`}>
                <div data-aos="fade-up">
                    <h3 className="services-card-development">
                        {serviceName}
                    </h3>
                </div>
                <div data-aos="fade-up">
                    {desc}
                </div>
                <div data-aos="fade-up">
                
                    <p className="services-card-info1">
                        {info1}
                    </p>  
                </div>
                <div data-aos="fade-up">
                    <span className="services-card-info-text">{span1}</span>
                </div>
                <div data-aos="fade-up">
                    <p className="services-card-info">{info2}</p>
                </div>
                <div className="fade-up">
                <div className="services-card-info1">{ReactHtmlParser(inf)}</div>
                </div>
                <div data-aos="fade-up">
                    <span className="services-card-info-text">{span2}</span>
                </div>
                <div data-aos="fade-up">
                    <p className="services-card-info">{info3}</p>
                </div>
                <div data-aos="fade-up">
                    <p className="services-card-info">{info4}</p>
                </div>
                <div data-aos="fade-up">
                    <p className="services-card-info">{info5}</p>
                </div>
            </div>
        </div>
    );
}

export default Servicescard;

