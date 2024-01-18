import ServicesBlock2Card from '../../../components/services/services-block2';
import './main.scss'
import { request } from '../../../api/request';
import { useState, useEffect } from 'react';
import parse from 'html-react-parser'
import { useSelector } from 'react-redux';

const ServicesPage2 = () => {
    const lang = useSelector((state) =>state.data.lang)
    const [servicecard, setServiceCard] = useState({isFetched:false,data:{},error:null})

    useEffect(()=>{
        request
        .get(`/content/all/mini?parent=15&lang=${lang}`,{headers:{'api-token':'p12378'}})
        .then(function(res){setServiceCard({isFetched:true,data:res.data.data,error:false})})
        .catch(function(err){setServiceCard({isFetched:true,data:[],error:err})})
    },[lang])
    return (
        <div className="services-block2 container">
            {
                servicecard && servicecard.isFetched ? (
                    servicecard.data.map((item, index) =>(
                        <ServicesBlock2Card
                           key={index}
                           info1={item.title}
                           info2={parse(`${item.description}`)}
                        />
                    ))
                ):(
                    <></>
                )
            }
        </div>
    );
}

export default ServicesPage2;