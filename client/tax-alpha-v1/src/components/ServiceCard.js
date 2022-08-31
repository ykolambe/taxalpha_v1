import React from 'react'
import "../css/ServiceCard.css";
import CardIncludes from './CardIncludes.js';
const ServiceCard = ({card}) => {
  console.log(card)
  return (
        <div className="servicecard">
      <div className="servicecard__info">
          <div className="servicecard__text">
              <h4>{card.title}</h4>
              <p className="card__subtitle">{card.subtitle}</p>
              <p className="card__subtitle2">{card.subtitle2}</p>
              
             <CardIncludes include={card.include} />
              
              <p>{card.views}</p>
              <div className="price_div">
                  <p className="rupee"> {'\u20B9'}  </p>
                  <p className="oldprice" >{card.oldprice}</p> 
                  <p className="newprice">{card.price} </p>
                  <p className="extra"> {card.extra} </p>
              </div>
              <p className="taxes">{card.taxes}</p>
              
          </div>
      </div>
  </div>
   
  )
}

export default ServiceCard