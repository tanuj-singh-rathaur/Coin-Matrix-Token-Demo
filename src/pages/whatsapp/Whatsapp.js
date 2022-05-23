import React, { Component } from 'react'
import './Whatsapp.css'

const WhatsappBox=()=>{
    return(
        <div className="whatsapp_box">
        <a className="whatsapp_button" href="https://wa.me/<number>" target="_blank" rel="noopener noreferrer">Contact Through Whatsapp</a>
        <ul className="support_details">
            <li className="points">We are here to support you 24 X 7</li>
            <li className="points">Our employees are there working for you all the time to solve every problem of yours</li>
            <li className="points">In case of any dought please contact us using Mail or Whatsapp</li>
        </ul>
         </div>
    
       
    )
    }
export default class Whatsapp extends Component {

    render() {
        return (
        <div className="whatsapp_panel">
            <WhatsappBox></WhatsappBox>

        </div>
        )
    }
}
