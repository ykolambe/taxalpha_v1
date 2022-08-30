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
  
  const myItems = ["Registration","Application Filing","Obtaining GST Identification Number (GSTN)"];


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
                    subtitle="Obtain GSTN"
                    included={myItems}
                    views =""
                    price="999"
                    taxes="Inclusive of taxes"
                    image={gst}
                />
                <ServiceCard 
                    title="GST Nil Return"
                    included={myItems}
                    subtitle="No Sale, No Purchase"
                    views =""
                    price="249 per month"
                    taxes="Inclusive of Taxes"
                    image={itr}
                />
                <ServiceCard 
                    title=" GST Monthly Return"
                    subtitle="For Normal Dealer"
                    included={myItems}
                    views =""
                    price="999"
                    extra="per month"
                    taxes="Inclusive of Taxes"
                    image={acc}
                />
                <ServiceCard 
                    title="GST Return"
                    included={myItems}
                    subtitle="For Composition Scheme"
                    views =""
                    price="749"
                    extra="per quarter"
                    taxes="Inclusive of Taxes"
                    image={acc}
                />
                <ServiceCard 
                    title="GST 9 Annual Return"
                    included={myItems}
                    subtitle="For Normal Dealer"
                    views =""
                    price="4499"
                    extra="per annum"
                    taxes="Inclusive of Taxes"
                    image={acc}
                />
                <ServiceCard 
                    title=" GST Annual Return"
                    subtitle="For Composition Dealer"
                    included={myItems}                   
                    views =""
                    price="2999"
                    extra="per annum" 
                    taxes="Inclusive of Taxes"
                    image={acc}
                />
          
          
          </div>
      </div>
    </li>
  );
};

export default AccordionItem;