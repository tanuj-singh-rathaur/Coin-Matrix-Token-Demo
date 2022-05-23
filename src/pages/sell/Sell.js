import React, { Component } from 'react'
import './Sell.css'
const LockMessage=()=>{
    return(
        <div className="lock_message">
            <div className="m1">Can't Sell Right Now</div>
            <div className="m2">Will be Available after 3 months from the time of buying</div>
        </div>
    )
}



export default class Sell extends Component {
    render() {
        return (
            <div className="sell_panel">
                <LockMessage></LockMessage>
            </div>
        )
    }
}
