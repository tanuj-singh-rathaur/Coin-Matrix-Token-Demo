import React, { Component} from 'react'
import './Buy.css'
export default class Buy extends Component {
token_rate=1.18

state={
    amount:0
}
    calculateRate(rate){
     this.setState({
         
         amount:(this.token_rate*rate).toFixed(2)
     })
     console.log(rate)
    }
    
    paymentGateway(){
        console.log("make payment")
    }
    render() {
        return (
            <div className="buy_panel">

                <div className="instruction">Enter The Amount For Buying The CMT </div>
                <div className="token_name">Coin Matrix Token</div>

                <div className="buy_card">
                
                   <div className="amount">
                      <div className="token_rate"> 1 Token = {this.token_rate} <span>&#x20B9;</span> </div>
                      <label className="amount_head"> Enter Amount</label>
                      <input className="amount_input" autoFocus={true} type="number" min="0" onChange={(event)=>this.calculateRate(event.target.value)}/>
                      <label className="amount_calculated">Total Amount : {this.state.amount}<span>&#x20B9;</span></label>
                      <button className="proceed" onClick={this.paymentGateway}>Proceed</button>
                   </div>
                </div>
            </div>
        )
    }
}
