import React, { Component } from 'react'
import './Bank.css'
export default class Bank extends Component {

   
          
    render() {
        return (
            <div className="bank_panel"> 
            
            <form className="bankDetails_form">

                
            <div className="account_number">
            <label >Account Number</label>
            <div className="field">
            <input type="number" name="acc_num" autoFocus></input>
            <div className="line"></div>
            </div>
          </div>
           
          <div className="ifsc_code">
            <label>Bank IFSC Code</label>
            <div className="field">
            <input type="text" name="ifsc_code"></input>
            <div className="line"></div>
            </div>
          </div>

          <div className="image_upload">
            
          <label>Upload Bank Passbook/Cancel Check Image</label>

          <div className="select">
              <input type="file" onChange={this.onFileChange} className="selectButton"/>
          </div> 
          </div>
          
          <div className="submit">
            <button type="submit">Submit</button>
          </div>
       
         </form>   
      </div>
        )
    }
}
