import React from 'react'
import "../css/ServiceCard.css";
import CardIncludes from './CardIncludes.js';
const ServiceCard = ({image,title,included,subtitle,taxes,channel,views,price,extra}) => {
  console.log(included)
  return (
    <div className="servicecard">
    <div className="servicecard__info">
        <div className="servicecard__text">
            <h4>{title}</h4>
            <p className="card__subtitle">{subtitle}</p>
            
           <CardIncludes include={included} />
            
            <p>{views}</p>
            <p className="price_div">
                {'\u20B9'} {price} {extra}
            </p>
            <p className="taxes">{taxes}</p>
            
        </div>
    </div>
</div>
  )
}

export default ServiceCard