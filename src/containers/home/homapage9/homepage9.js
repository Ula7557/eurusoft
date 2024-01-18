import ContactPages2 from "../../contact/contactPages2";
import "./main.scss";
import { request } from "../../../api/request";
import { useState, useEffect } from "react";
import Like from "../../../assets/images/img/home/like.png";

import { useSelector } from "react-redux";
const HomePage9 = () => {
    const lang = useSelector((state) => state.data.lang);
    const [homeContact, setHomeContact] = useState({
        isFetched: false,
        data: {},
        error: null,
    });
    useEffect(() => {
        request
            .get(`/content/one/mini?id=94&lang=${lang}`, {
                headers: { "api-token": process.env.REACT_APP_API_TOKEN },
            })
            .then(function (res) {
                setHomeContact({ isFetched: true, data: res.data.data, error: false });
            })
            .catch(function (err) {
                setHomeContact({ isFetched: true, data: [], error: err });
            });
    }, [lang]);
    return (
        <div className="home-page9 container">
            {homeContact && homeContact.isFetched ? (
                <ContactPages2 title={homeContact.data.title} />
            ) : (
                <></>
            )}
            <img src={Like} alt="like" className="like" />
        </div>
    );
};

export default HomePage9;
