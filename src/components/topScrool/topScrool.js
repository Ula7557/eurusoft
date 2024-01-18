import './main.scss'
import {BsFillArrowUpSquareFill} from 'react-icons/bs'
import { useState } from 'react';
import { useEffect } from 'react';

const TopScrool = () => {
const [scroll, setScroll] = useState(false);
 useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > 1000);
   });
 }, []);
    return ( 
        <div className={`top-scrool ${scroll ? "active" : ""}` }>
            <button onClick={() => window.scrollTo({top:0,left:0,behavior: "smooth"})} className={`top-scrool-link ${scroll ? "active" : ""}` }>
                <BsFillArrowUpSquareFill/>
            </button>
        </div>
     );
}
 
export default TopScrool;