import React from 'react'
import "../css/Services.css";
import gst from "../gst.png";
import itr from "../itr.png";
import acc from "../accandbook.png";
import tds from "../tds.png";
import company from "../company.png";
import exporti from "../export.png";
import ServiceCard from "./ServiceCard.js";
const Services = () => {
  return (
    <div className="services">
        <p className="services__heading">We have range of services for your taxation problems </p>
        <div className="services__grid">
            <div className="services__grid__ele">
                <ServiceCard 
                    title="GST"
                    channel="Registration and
                    Return Filing"
                    views ="Starting From"
                    price="499"
                    extra="Inclusive of taxes"
                    image={gst}
                />
                <ServiceCard 
                    title="ITR"
                    channel="Income Tax
                    Return Filing"
                    views ="Starting From"
                    price="499"
                    extra="Inclusive of taxes"
                    image={itr}
                />
                <ServiceCard 
                    title="Accounting and
                    Book Keeping"
                    channel="Accounting and
                    Book Keeping
                    services"
                    views ="Starting From"
                    price="999"
                    extra="per month"
                    image={acc}
                />
                <ServiceCard 
                    title="TDS"
                    channel="TDS Return
                    Filing"
                    views ="Starting From"
                    price="999"
                    extra="per month per quarter return"
                    image={tds}
                />
                <ServiceCard 
                    title="Company Registration"
                    channel="MSME /UDYAM
                    Registration"
                    views ="Starting From"
                    price="999"
                    extra="Inclusive of taxes"
                    image={company}
                />
                <ServiceCard 
                    title="Export"
                    channel="For Export
                    Oriented
                    Business
                    Starting from"
                    views ="Starting From"
                    price="2500"
                    extra="Inclusive of taxes"
                    image={exporti}
                />
                
                
            </div>
        </div>
    </div>
  )
}

export default Services