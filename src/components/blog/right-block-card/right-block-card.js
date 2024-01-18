import './main.scss'
import { Link } from 'react-router-dom';

const RightCard = ({title,images,id,status,lang}) => {
    return ( 
        <div data-aos="fade-down">
            <Link to={'/blog/' + id}  className="right-card">
            <img src={images} alt="" className="right-card-img" />
            <p className="right-card-text">{title}</p>
        </Link>
        </div>
        
     );
}
 
export default RightCard;