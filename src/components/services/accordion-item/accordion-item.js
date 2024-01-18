import './main.scss'
import AccordionSwitch from '../../../assets/images/icon/accordion-switch.svg'

import { useState } from 'react';
const AccordionItem = ({name, info}) => {

    const [accordion, setAccordion] = useState(false)
    return (
        <div data-aos="fade-up">
             <div className={`accordion-item ${accordion  ? 'activ' : ''}`}>
            <button onClick={() => setAccordion(!accordion)} className="accordion-btn">
            <p className="accordion-description">{name}</p>
                <img src={AccordionSwitch} alt="AccordionSwitch" className="accordion-icon" />
            </button>
            <div className="accordion-info-block">
            <p className="accordion-info">{info}</p>
            </div>
        </div>
        </div>

       
    );
}

export default AccordionItem;