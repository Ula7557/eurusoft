
import './main.scss'
import Services from '../../services'
import { request } from '../../../api/request';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
const AboutPage6 = () => {
    const lang = useSelector((state) =>state.data.lang)
    const [about6, setAbout6] = useState({
        isFetched: false,
        data: {},
        error: null,
    });
    useEffect(() => {
        request
            .get(`/content/one/mini?id=64&lang=${lang}`, { headers: { 'api-token': 'p12378' } })
            .then(function (res) { setAbout6({ isFetched: true, data: res.data.data, error: false }) })
            .catch(function (err) { setAbout6({ isFetched: true, data: [], error: err }) })
    }, [lang])
    return (
        
    <>
        {
            about6 && about6.isFetched ? (
                <div className="about-page6">
            <Services
                images={about6.data.image}
                classess={'row'}
                serviceName={about6.data.title}
                inf={about6.data.description}
                class71={'sonic_bom'}
            />
        </div>
            ) : (
                <></>
            )
        }
    </>
    );
}

export default AboutPage6;









