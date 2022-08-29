import { useRef } from "react";
import { Image } from 'react-bootstrap';
import gst from "../gst.png";
import itr from "../itr.png";
import acc from "../accandbook.png";
import tds from "../tds.png";
import company from "../company.png";
import exporti from "../export.png";
import ServiceCard from "./ServiceCard.js";
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionItem = ({ faq, active, onToggle }) => {
  const { question , answer,  image } = faq;
  
  const contentEl = useRef();
  console.log({image})
  return (
    <li className={`accordion_item ${active ? "active" : ""}`}>
     
       <div className="button" onClick={onToggle}>
        <div className="button_div" >
        <Image className="buttonImage" src={image}></Image>
        <p className="title">{question}  </p>
        <p className="hoverTitle">Click to explore our plans for {question}</p>
        <p className="subtitle">Starting from {'\u20B9'} {answer} </p> 
        <span  title="Click to explore list of services}" className="control">{active ? "—" : "+"} </span>
        </div>
        
      </div> 

  
      <div
        ref={contentEl}
        className="answer_wrapper"
        style={
          active
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="answer">
        <ServiceCard 
                    title="GST Registration"
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
          
          
          </div>
      </div>
    </li>
  );
};

export default AccordionItem;