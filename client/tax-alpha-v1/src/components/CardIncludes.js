import React from 'react'
import "../css/CardIncludes.css";


const CardIncludes = ({include}) => {
    console.log(include)
  return (
    include.map(point=>{
                return (
                <div>
                  <table>
                    <tr>
                        <td><img alt="" width="60px" height="40px" src="https://miro.medium.com/max/1400/1*CXKXqxm2MoKqPwt3nQQNNQ.png" /> </td>
                        <td className="pointCol">{point}</td>
                    </tr>
                  </table>  
                </div>)
            }) )           
        }
export default CardIncludes