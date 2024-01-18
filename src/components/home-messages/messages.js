import './main.scss'
import { Link } from 'react-router-dom';
import MessagesIcon from '../../assets/images/icon/messages.svg'
const Messages = () => {
    return ( 
        <div className="messages">
            <Link to="/contact" className="mobile-fixed-messages">
            <img src={MessagesIcon} alt="sms yozing" className="mobile-fixed-icon" />
            </Link>
        </div>
     );
}
 
export default Messages;