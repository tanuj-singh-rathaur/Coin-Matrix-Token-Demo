import React, { useState } from 'react'
import { IconContext } from 'react-icons/lib'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const SidebarLink = styled(Link)`
display:flex;
color:#e1e9fc;
justify-content:flex-start;
align-items:center;
padding:10px;
list-style:none;
height:40px;
text-decoration:none;
font-size:15px;

&:hover{
    background:#252831;
    border-left:4px solid #632ce4;
    cursor:pointer;
}
`

const SidebarLabel=styled.span`
margin-left:16px;
`
const DropdownLink=styled(Link)`
background:#414757;
height:35px;
padding-left:3rem;
display:flex;
align-items:center;
text-decoration:none;
color:#f5f5f5;
font-size:12px;

&:hover{
    background:#62ce4;
    cursor:pointer;
}
`


const Submenu=({item})=>{

    const [subnav,setSubnav]=useState(false)

    const showSubnav=()=>setSubnav(!subnav)
    return (
        <>
        <IconContext.Provider value={{color:'black'}}>
          <SidebarLink to={item.path} onClick={item.subNav ? showSubnav:null}>
          <div>
              {item.icon}
              <SidebarLabel>
                   {item.title}
              </SidebarLabel>
          </div>
          <div>
              {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
          </div>
            
          </SidebarLink> 
          {subnav && item.subNav.map((item,index)=>{
            return  <DropdownLink to={item.path} key={index} download={true}>
                  {item.icon}
                  <SidebarLabel>{item.title}</SidebarLabel>
              </DropdownLink>
          })}
</IconContext.Provider>
        </>
          
        )
        }

export default Submenu
