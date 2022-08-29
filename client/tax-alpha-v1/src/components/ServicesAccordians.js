import React from 'react'
import gst from "../gst.png";
import ControlledAccordions from './Accordian.js';
const ServicesAccordians = () => {
  return (
    <div>
<ControlledAccordions title="GST (Goods and Services Tax)" subtitle="499 per month" image={gst} id="panel1"/>
<ControlledAccordions title="GST (Goods and Services Tax)" subtitle="499 per month" image={gst} id="panel2"/>
<ControlledAccordions title="GST (Goods and Services Tax)" subtitle="499 per month" image={gst} id="panel3"/>
<ControlledAccordions title="GST (Goods and Services Tax)" subtitle="499 per month" image={gst} id="panel4"/>
<ControlledAccordions title="GST (Goods and Services Tax)" subtitle="499 per month" image={gst} id="panel5"/>
<ControlledAccordions title="GST (Goods and Services Tax)" subtitle="499 per month" image={gst} id="panel6"/>
    </div>
  )
}

export default ServicesAccordians