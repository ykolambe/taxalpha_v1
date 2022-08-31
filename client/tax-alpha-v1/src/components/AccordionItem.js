import { useRef } from "react";
import { Image } from 'react-bootstrap';
import ServiceCardsArray from "./ServiceCardsArray";
import Submit from "./Submit";
const AccordionItem = ({ faq, active, onToggle }) => {
  const { question , answer,  image, serviceCards } = faq;

  const contentEl = useRef();
  console.log({serviceCards})
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
        <ServiceCardsArray serviceCards={serviceCards}/>
          
          </div>
          <div className="accordian__bottom"><Submit /></div>
            
          
      </div>
    </li>
  );
};

export default AccordionItem;