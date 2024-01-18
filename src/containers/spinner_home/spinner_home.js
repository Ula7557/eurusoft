import './spinner_home.scss'
import Logotip from '../../assets/logo.svg'
import { useEffect, useRef } from 'react'
const SpinnerHome = () => {
    const ref = useRef(null)
    useEffect(() => {
        if (ref.current !== null) {
            setTimeout(() => {
                ref.current?.classList.add('activ')
            }, 2000);
        }
    }, [ref.current])
    return (
        <div className="spinner_home" ref={ref}>
            <div data-aos="zoom-in-down">
                <div className="logoBlock">
                    <img src={Logotip} alt="" className="spinner_home_img" />
                </div>
            </div>
        </div>
    );
}

export default SpinnerHome;