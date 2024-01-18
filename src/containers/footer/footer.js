import './main.scss'
import { Link } from 'react-router-dom';

import Facebook from '../../assets/images/img/footer/facebook.svg'
import Instagran from '../../assets/images/img/footer/instagram.svg'
import Telegram from '../../assets/images/img/footer/telegram.svg'
import Youtube from '../../assets/images/img/footer/youtube.svg'
import { useState, useEffect } from 'react';
import { request } from '../../api/request';
import { useSelector } from 'react-redux';
const Footer = () => {

    const currentTime = new Date()

    const lang = useSelector((state) => state.data.lang);
    const [footer, setFooter] = useState({
        isFetched: false,
        data: {},
        error: null,
    });
    useEffect(() => {
        request
            .get(`/system/settings/all`, { headers: { 'api-token': 'p12378' } })
            .then(function (res) { setFooter({ isFetched: true, data: res.data.data, error: false }) })
            .catch(function (err) { setFooter({ isFetched: true, data: [], error: err }) })
    }, [])

    return (
        <>
            {
                footer && footer.isFetched ? (
                    <div className="footer">
                        <div className="footer-top container">
                            <div data-aos="fade-right">
                                <Link to="/" className="footer-logotip">
                                    <img src={footer.data[8].settings_value} alt="Logotip" className="footer-logo-icon" />
                                </Link>
                            </div>



                            <div className="footer-top-middle">
                                <div data-aos="fade-up">
                                    <a href={`tel:${footer.data[21].settings_value}`} className="contact-link">{footer.data[21].settings_value}</a>
                                    <a href={`mailto:${footer.data[23].settings_value}`} className="contact-link">{footer.data[23].settings_value}</a>
                                    <p  className="contact-link">{footer.data[24].settings_value}</p>
                                </div>
                            </div>
                            <div data-aos="fade-left">
                                <div className="footer-top-right">
                                    <a target="_blank" rel="noreferrer" href={footer.data[30].settings_value} className="social-link">
                                        <img src={Facebook} alt="Facebook" className="social-icon" />
                                    </a>
                                    <a target="_blank" rel="noreferrer" href={footer.data[31].settings_value} className="social-link">
                                        <img src={Instagran} alt="Instagram" className="social-icon" />
                                    </a>
                                    <a target="_blank" rel="noreferrer" href={footer.data[28].settings_value} className="social-link">
                                        <img src={Telegram} alt="Telegram" className="social-icon" />
                                    </a>
                                    <a target="_blank" rel="noreferrer" href={footer.data[35].settings_value} className="social-link">
                                        <img src={Youtube} alt="Youtube" className="social-icon" />
                                    </a>
                                </div>
                            </div>

                        </div>
                        <div className="footer-bottom container">
                            <p className="footer-copy-past">
                               {
                                    lang === 'en' ? `© ${currentTime.getFullYear()} Eurosoft. All rights reserved.` : lang === 'ru' ? ` © ${currentTime.getFullYear()} Eurosoft. Все права защищены.` :` © ${currentTime.getFullYear()} Eurosoft. Barcha huquqlar himoyalangan.`
                               }
                            </p>

                        </div>
                    </div>
                ) : (
                    <></>
                )
            }
        </>
    );
}

export default Footer;