import React from 'react'
import * as AiIcons from 'react-icons/ai'
import './Home.css'
import Typical from 'react-typical'


const Transact=()=>{
    return(
        <div className="transact">
           <label className="buy">Buy</label>
           <label>Sell</label>
        </div>
    )
}

const Stake=()=>{
    return (
        <div className="stake">

           <div className="logo_name">
               <span className="icon"><img src="./logo.png" alt="logo"></img></span>
               <span className="name">Coin Matrix Token</span>
           </div>

           <div className="staking_details">
              <div><label>APR : </label><label>0</label></div> 
              <div><label>Earned CMT : </label><label>0</label></div> 
              <div><label>Deposit Fee : </label><label>0</label></div> 
           </div>

          <div className="add_withdraw">
              <div className="add">
                <AiIcons.AiFillPlusSquare/>
                  ADD
              </div>
              <div className="withdraw">
                  <AiIcons.AiFillMinusSquare/>
                  Withdraw
              </div>
          </div>


        </div>
    )
}

const LandingMessage=()=>{
    return(
        <div className="landing-message">
        <h5>Welcome to the World of <span>CMT</span></h5>
        <h6><span>Enjoy Staking Benefit </span>: Earn By Refering Freinds & Together Go To The Moon And Mars</h6>
        </div>
    )
}





const HomeMain=()=>{
 
    return(
            <div className="home_main">
                 <div className="animated_text"><Typical
                 className="text"
               
        steps={['Hello There, Welcome', 1500, 'Enjoy Unlimited Staking Benefits', 1500,'Easy To Buy, Easy To Sell',1500]}
        loop={Infinity}
        wrapper="h5"
      /></div>
                <div className="box">
                   <Stake></Stake>
                </div>
                <div className="box2">
                    
                    <Transact />
                    <div className="roadmap_box">
                      <a className="roadmap" href="/public/roadmap.pdf" download>Roadmap</a>
                      <label>WhitePaper</label>
                    </div>
                </div>
                
            </div>
    )
}


function Home() {

 
  

    return (
        <div className="home_panel">
           
            <LandingMessage/>
            <HomeMain />
        </div>
    )
}

export default Home