import './main.scss'

const LinksCard = ({title, description, img,link}) => {
    return ( 
        <a target={'blank'} href={link} className='links_card_block'>
            <div className="links_card_top">
                <img src={img} className='links_card_img' alt="" />
            </div>
            <div className="links_card_bottom">
                <h6 className="links_card_title">
                    {title}
                </h6>
                <p className="links_card_description">
                    {description}
                </p>
            </div>
        </a>
     );
}
 
export default LinksCard;