import './main.scss'
import TelIcon from '../../assets/images/icon/Iconly/Light/Calling.svg'
import { useState, useEffect } from 'react';
import { request } from '../../api/request';
const Mobile = () => {

    const [mobile, setMobile] = useState({
        isFetched: false,
        data: {},
        error: null,
    });
    useEffect(() => {
        request
            .get(`/system/settings/all`, { headers: { 'api-token': 'p12378' } })
            .then(function (res) { setMobile({ isFetched: true, data: res.data.data, error: false }) })
            .catch(function (err) { setMobile({ isFetched: true, data: [], error: err }) })
    }, [])
    return (
        <>
            {
                mobile && mobile.isFetched ? (
                    <div className="mobile">
                        <a href={`tel:${mobile.data[21].settings_value}`} className="mobile-fixed-link">
                            <img src={TelIcon} alt="calling" className="calling" />
                        </a>
                    </div>
                ) : (
                    <></>
                )
            }
        </>
    );
}

export default Mobile;