import './main.scss'

import Telegram from '../../assets/images/img/footer/telegram.svg'
import Instagram from '../../assets/images/img/footer/instagram.svg'
import Facebook from '../../assets/images/img/footer/facebook.svg'
import Youtube from '../../assets/images/img/footer/youtube.svg'
import { useState, useEffect } from 'react'
import { request } from '../../api/request'

const ContactPage1 = ({lang}) => {

    const [contactSettings, setContactSettings] = useState({
        isFetched: false,
        data: {},
        error: null,
    });
    useEffect(() => {
        request
            .get(`/system/settings/all`, { headers: { 'api-token': 'p12378' } })
            .then(function (res) { setContactSettings({ isFetched: true, data: res.data.data, error: false }) })
            .catch(function (err) { setContactSettings({ isFetched: true, data: [], error: err }) })
    }, [])
    return (
        <>
            {
                contactSettings && contactSettings.isFetched ? (
                    <div className="contact-pages1 container2">
                        <div data-aos="fade-right" className='contact-pages1-left_block'>
                            <div className="contact-pages1-left">
                                <h6 className="contact-information">{lang === "en"
                                    ? "Contact information"
                                    : lang === "ru"
                                        ? "Контактная информация"
                                        : lang === "uz"
                                            ? "Bog'lanish uchun ma'lumot"
                                            : null}</h6>
                                <div className="contact-link-block">
                                    <a href={contactSettings.data[21].settings_value} className="contact-link">{contactSettings.data[21].settings_value}</a>
                                    <a href={`mailto:${contactSettings.data[23].settings_value}`} className="contact-link">{contactSettings.data[23].settings_value}</a>
                                    <p  className="contact-link">{contactSettings.data[24].settings_value}</p>
                                </div>
                                <h6 className="contact-information"> {lang === "en"
                                    ? "Social networks"
                                    : lang === "ru"
                                        ? "Социальные сети"
                                        : lang === "uz"
                                            ? "Ijtimoiy tarmoqlar"
                                            : null}</h6>
                                <div className="social-block">
                                    <a target="_blank" rel="noreferrer" href={contactSettings.data[30].settings_value} className="social-link">
                                        <img src={Facebook} alt="Facebook" className="social-icon" />
                                    </a>
                                    <a target="_blank" rel="noreferrer" href={contactSettings.data[31].settings_value} className="social-link">
                                        <img src={Instagram} alt="Instagram" className="social-icon" />
                                    </a>
                                    <a target="_blank" rel="noreferrer" href={contactSettings.data[28].settings_value} className="social-link">
                                        <img src={Telegram} alt="Telegram" className="social-icon" />
                                    </a>
                                    <a target="_blank" rel="noreferrer" href={contactSettings.data[35].settings_value} className="social-link">
                                        <img src={Youtube} alt="Youtube" className="social-icon" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-left" className='contact-pages1-left_block'>
                            <div className="contact-pages1-right">
                                <iframe className="iframe-maps" title='Eurosoft'  src={contactSettings.data[25].settings_value} width={450} height="450" allowFullScreen="" loading="lazy"></iframe>
                            </div>
                        </div>

                    </div>
                ) : (
                    <div className="spinner"></div>
                )
            }
        </>
    );
}

export default ContactPage1;