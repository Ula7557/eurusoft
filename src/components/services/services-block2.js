import './main.scss'

const ServicesBlock2Card = ({info1, info2, icon, info3}) => {
    return (
        <div className="services-block2-card">
            <div data-aos="zoom-out-up">
                <div data-aos="fade-up">{icon ? (<img src={icon} alt="" className="services-block2-card-img" />) : (<></>)}</div>
                <div data-aos="fade-up">
                    <h6 className="services-block2-card-text">{info1}</h6>
                </div>
                <div data-aos="fade-up">
                    <p className="services-block2-card-info">{info2}</p>
                </div>
                <div data-aos="fade-up">
                    <p className="services-block2-card-info2">{info3}</p>
                </div>
            </div>

        </div>
    );
}

export default ServicesBlock2Card;