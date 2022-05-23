import React from 'react';
import './Header.css';
import './bars-solid.svg'


import * as FaIcons from 'react-icons/fa'
const Header=(props)=>{



    return(
        <div className="header_main">


            {/* ham menu */}
              <div className="ham-menu">
              <FaIcons.FaBars onClick={props.hamClicked}/>
              </div>

          {/* logo */}
              <div className="logo"><img src="/logo.png" alt="logo"></img>Coin Matrix Token</div>
          
           {/* login and signup    */}
              <div className="auth_fields">
                  <a className="btn-auth" href="/login">Login</a>
                  <a className="btn-auth" href="Signup">SignUp</a>
            </div>
 

        </div>
    )
}
export default Header