import React from 'react'
import styled from 'styled-components'
import {Link} from  'react-router-dom'
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from './SidebarData'
import Submenu from './SubMenu'
import './Sidebar.css'
const NavIcon=styled(Link)`
color:white;
margin-left:2rem;
font-size:2rem;
height:10vh;
display:flex;
justify-content:flex-start;
align-items:center;

`
const SidebarNav=styled.nav`
background-color: #520185;
width:250px;
height:100vh;
display:flex;
justify-content:flex-start;
position:fixed;
top:0;
left:${({sidebar})=>(sidebar ? '0' : '-100%')};
transition:350ms;
z-index:10;
`
const SidebarWrap=styled.div`
width:100%;
`
function Sidebar(props) {
  

    return (
        <>
         {/* <Nav> 
             <NavIcon to="#">
                <FaIcons.FaBars onClick={showSidebar}/>
             </NavIcon>
        </Nav>    */}
                
        <SidebarNav sidebar={props.sidebar}>
            <SidebarWrap>
            <NavIcon to="#">
                <AiIcons.AiOutlineClose onClick={props.showSidebar}/>
             </NavIcon>
             {SidebarData.map((item,index)=>{
               return <Submenu item={item} key={index}

               />
             })}
            </SidebarWrap>
        </SidebarNav>
        </>
    )
}

export default Sidebar
