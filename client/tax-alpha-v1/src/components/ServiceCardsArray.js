import React from 'react'
import ServiceCard from './ServiceCard';

const ServiceCardsArray = ({serviceCards}) => {
    console.log(serviceCards)
  return (
         serviceCards.map(comp => {
           return <ServiceCard card={comp.Card} />
         }
         
         ) 
  ) 
        }

export default ServiceCardsArray