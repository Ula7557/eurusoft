import './main.scss'

const ShadovText = ({shadov, text, classes}) => {
    return ( 
        <div className={`shadov-text container ${classes}`}>
            

            <h2 className="shadov">{shadov}</h2>
            <h6 className="text">{text}</h6>
        </div>
     );
}
 
export default ShadovText;