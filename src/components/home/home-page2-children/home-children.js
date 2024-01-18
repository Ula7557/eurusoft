import './main.scss'
import CountUp from 'react-countup';
const HomeChildren = ({number,text}) => {
    return (
        <div className="home-page2-right-box">
            <span className="box-span"></span>

            <h5 className="box-name">
                <CountUp
                    delay={2}
                    duration={5}
                    start={0}
                    end={number}
                />
            </h5>
            <p className="box-text">
                {text}
            </p>
        </div>
    );
}

export default HomeChildren;