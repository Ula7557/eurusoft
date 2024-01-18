import './main.scss'
import ReactHtmlParser from "react-html-parser";

const SingleVacancyLi = ({data}) => {
    return ( 
        <>
            <ul className="single_vacancy_ul">
               <div className="single_vacancy_li_block">
                    <div data-aos="fade-up"> <div className="card_extra_title_blocks_inner">{ReactHtmlParser(data)}</div></div>
               </div>
            </ul>
        </>
     );
}
 
export default SingleVacancyLi;