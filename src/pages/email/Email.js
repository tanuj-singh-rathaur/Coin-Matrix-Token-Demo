import React, { Component } from 'react'
import './Email.css'

const EmailBox=()=>{
return(
    <div className="mail_box">
    <a className="mail_button" href="mailto:sameersinghrathour635@gmail.com?body=my custom mail body" rel="noopener noreferrer">Contact Through Mail</a>
    <ul className="support_details">
        <li className="points">We are here to support you 24 X 7</li>
        <li className="points">Our employees are there working for you all the time to solve every problem of yours</li>
        <li className="points">In case of any dought please contact us using Mail or Whatsapp</li>
    </ul>
     </div>

   
)
}


export default class Email extends Component {
    render() {
        return (
            <div className="email_panel">
                <EmailBox></EmailBox>
            </div>
        )
    }
}
