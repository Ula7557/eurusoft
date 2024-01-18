import './main.scss'
import Facebook from '../../../assets/images/img/social-net-icon/facebook.svg'
import Instagram from '../../../assets/images/img/social-net-icon/instagram.svg'
import telegram from '../../../assets/images/img/social-net-icon/telegram.svg'
import Youtube from '../../../assets/images/img/social-net-icon/youtube.svg'
import { useState, useEffect } from 'react'
import { request } from '../../../api/request'

const LeftBlock = ({ classes, classAnime}) => {

    const [social, setSocial] = useState({
        isFetched: false,
        data: {},
        error: null,
    });
    useEffect(() => {
        request
            .get(`/system/settings/all`, { headers: { 'api-token': 'p12378' } })
            .then(function (res) { setSocial({ isFetched: true, data: res.data.data, error: false }) })
            .catch(function (err) { setSocial({ isFetched: true, data: [], error: err }) })
    }, [])
    return (
        <>
            {
                social && social.isFetched ? (
                    <div className={`left-block ${classes}`}>
                        <a target="_blank" rel="noreferrer" href={social.data[30].settings_value} className="social-network-link"><img src={Facebook} alt={social.data[30].title} className="social-network-icon" /></a>
                        <a target="_blank" rel="noreferrer" href={social.data[31].settings_value} className="social-network-link"><img src={Instagram} alt={social.data[31].title} className="social-network-icon" /></a>
                        <a target="_blank" rel="noreferrer" href={social.data[28].settings_value} className="social-network-link"><img src={telegram} alt={social.data[28].title} className="social-network-icon" /></a>
                        <a target="_blank" rel="noreferrer" href={social.data[35].settings_value} className="social-network-link"><img src={Youtube} alt={social.data[35].title} className="social-network-icon" /></a>
                    </div>
                ) : (
                    <></>
                )
            }
            <div className={`anime-box ${classAnime}`}></div>
        </>
    );
}

export default LeftBlock;