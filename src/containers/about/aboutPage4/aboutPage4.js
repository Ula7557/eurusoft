import Services from '../../services'
import './main.scss'

import { request } from '../../../api/request'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'


const AboutPage4 = () => {

    const lang = useSelector((state) =>state.data.lang)
    const [about4, setAbout4] = useState({
        isFetched: false,
        data: {},
        error: null,
    });
    useEffect(() => {
        request
            .get(`/content/one/mini?id=58&lang=${lang}`, { headers: { 'api-token': 'p12378' } })
            .then(function (res) { setAbout4({ isFetched: true, data: res.data.data, error: false }) })
            .catch(function (err) { setAbout4({ isFetched: true, data: [], error: err }) })
    }, [lang])
    return (
        <>
            {
                about4 && about4.isFetched ? (
                    <div className="about-page4">
                        <Services
                            images={about4.data.image}
                            serviceName={about4.data.title}
                            inf={about4.data.description}
                        />
                    </div>
                ) : (
                    <></>
                )
            }
        </>
    );
}

export default AboutPage4;




