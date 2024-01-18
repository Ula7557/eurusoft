import { useSelector } from 'react-redux';
import './main.scss'

const TextLink = ({ info1, info2 }) => {
    const lang = useSelector(state => state.data.lang)
    return (
        <div data-aos="fade-down-right">
            <div className="text-link container">
                <p className="text-link-home">{lang === 'en' ? 'Home /' : lang === 'uz' ? "Bosh sahifa /" : lang === 'ru' ? 'Главная /' : ''}</p>
                <p className="text-link-home">{info1}</p>
                <p className="text-link-home">{info2}</p>
            </div>
        </div>

    );
}

export default TextLink;