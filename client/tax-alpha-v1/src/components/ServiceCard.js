import React from 'react'
import "../css/ServiceCard.css";
const ServiceCard = ({image,title,channel,views,price,extra}) => {
  return (
    <div className="servicecard">
    <img className="servicecard_thumbnail" src={image} alt="" />
    <div className="servicecard__info">
        <div className="servicecard__text">
            <h4>{title}</h4>
            <p>{channel}</p>
            <p>{views}</p>
            <p className="price_div">
                {'\u20B9'} {price} {extra}
            </p>
            
        </div>
    </div>
</div>
  )
}

export default ServiceCard