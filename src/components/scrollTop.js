import React, { useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';


function ScrollToTop({ history, children }) {
    const lang = useSelector((state) => state.data.lang);

   


    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo(0, 0);
            setTimeout(() => {
                console.clear()
                const text = lang === 'ru' ? `Остановитесь!` : lang === 'uz' ? "To'xta!" : lang === "en" ? "STOP" : ""
                const miniText = lang === 'ru' ? `Эта функция браузера предназначена для разработчиков!` : lang === 'en' ? 'This is a browser feature intended for developers' : lang === 'uz' ? `Bu dasturchilar uchun mo'ljallangan brauzer xususiyati` : ''
                console.log(`%c${text}`, "color:red; font-size:50px; font-weight:bold;")
                console.log(`%c${miniText}`, "color:black; font-size:25px; font-weight:bold;")
            }, 3000);
        });
        return () => {
            unlisten();
        }
    }, [lang]);

    return <Fragment>{children}</Fragment>;
}

export default withRouter(ScrollToTop);