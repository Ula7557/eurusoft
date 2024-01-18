import ServicesBlock2Card from '../../../components/services/services-block2';
import NoFoto from '../../../assets/images/icon/nophoto.png'
import './main.scss'
import { useState, useEffect } from 'react';
import parse from 'html-react-parser'
import { request } from '../../../api/request';
import { useSelector } from 'react-redux';

const ServicesCardIcon = () => {
    const lang = useSelector((state) =>state.data.lang)
    const [serviceCard, setServiceCard] = useState({isFetched:false,data:{},error:null})

    useEffect(()=>{request .get(`/content/all/mini?parent=23&lang=${lang}`, {headers:{'api-token':'p12378'}})
        .then(function(res){setServiceCard({isFetched:true,data:res.data.data,error:false})})
        .catch(function(err){setServiceCard({isFetched:true,data:[],error:err})})
    }, [lang])

    return ( 
        <div className="services-block5 container">
            {
                serviceCard && serviceCard.isFetched ? (
                    serviceCard.data.map((item,index)=>(
                        <ServicesBlock2Card
                            key={index}
                            info3={parse(`${item.description}`)}
                            icon={item.image === "" ? NoFoto : item.image}
                            info1={item.title}
                        />
                    ))
                ):(
                    <></>
                )
            }
        </div>
     );
}
 
export default ServicesCardIcon;

