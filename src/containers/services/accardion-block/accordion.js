
import './main.scss'
import AccordionItem from '../../../components/services/accordion-item'
import parse from 'html-react-parser'
import {useState, useEffect}from 'react'
import { request } from '../../../api/request'
import { useSelector } from 'react-redux'

const Accordion = () => {
    const lang = useSelector((state) =>state.data.lang)
    const [crmerp, setCrmErp] = useState({
        isFetched: false,
        data: {},
        error:null
    })

    const [acordion, setAcordion] = useState({
        isFetched: false,
        data: {},
        error:null
    })

    useEffect(()=>{
        request
        .get(`/content/one/mini?id=30&lang=${lang}`, {
            headers: {
                'api-token':'p12378'
            }
        })
        .then(function(res){
            setCrmErp({
                isFetched: true,
                data: res.data.data,
                error: false
            })
        })

        .catch(function(err){
            setCrmErp({
                isFetched:true,
                data:[],
                error: err
            })
        })

        request
         .get(`/content/all/mini?parent=30&lang=${lang}`, {
            headers: {
                'api-token':'p12378'
            }
        })

        .then(function(res){
            setAcordion({
                isFetched: true,
                data: res.data.data,
                error: false
            })
        })

        .catch(function(err){
            setAcordion({
                isFetched:true,
                data:[],
                error: err
            })
        })

    }, [lang])
    
    return (
        <div className="accordion-block container">
            <div data-aos="fade-up"><h3 className="accordion-text">{crmerp && crmerp.data.title}</h3></div>


            <div className="accordion-block-inner">
                <div className="accordion-block-left">
                    {
                        acordion && acordion.isFetched ? (
                            acordion.data.map((item,index)=>(
                                <AccordionItem
                                    key={index}
                                    name={item.title}
                                    info={parse(`${item.description}`)}
                                />
                            ))
                        ):(
                            <></>
                        )
                    }
                </div>
                <div className="accordion-block-right">
                    <div data-aos="fade-up">
                        <img src={crmerp && crmerp.data.image} alt="Tablitsa" className="accordion-block-right-img" />
                    </div>
                    <div data-aos="fade-up">
                        <h5 className="accordion-block-right-text">{crmerp && crmerp.data.extra_text}</h5>
                    </div>
                    <div data-aos="fade-up">
                        <p className="accordion-block-right-info">{parse(`${crmerp && crmerp.data.description}`)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accordion;