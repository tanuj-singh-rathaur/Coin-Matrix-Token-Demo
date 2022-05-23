import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as ioIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SidebarData=[
    {
        title:'Home',
        path:'/home',
        icon:<AiIcons.AiFillHome />
    },
    {
        title:'Exchange',
        path:"#",
        icon:<AiIcons.AiFillHome />,
        iconClosed:<RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpFill />,
        subNav:[
            {
                title:'Buy',
                path:'/exchange/buy',
                icon:<ioIcons.IoIosPaper />
            },
            {
                title:'Sell',
                path:'/exchange/sell',
                icon:<ioIcons.IoIosPaper />
            },
            {
                title:"Invoice",
                path:'/exchange/invoice',
                icon:<ioIcons.IoIosPaper />
            }
        ]
    },
    {
        title:'Support',
        path:'#',
        icon:<AiIcons.AiFillHome />,
        iconClosed:<RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpFill />,
        subNav:[
            {
                title:'Email',
                path:'/support/email',
                icon:<AiIcons.AiFillHome />

            },
            
                {
                    title:'WhatsApp Link',
                    path:'/support/whatsapp',
                    icon:<AiIcons.AiFillHome />
    
                }
            
        ]
    },
    {
        title:'Tokenomics',
        path:'/tokenomics',
        icon:<FaIcons.FaCartPlus />
    },
    {
        title:'KYC',
        path:'#',
        icon:<FaIcons.FaCartPlus />,
        iconClosed:<RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpFill />,
        subNav:[
            {
                title:'Aadhar',
                path:'/kyc/aadhar',
                icon:<AiIcons.AiFillHome />

            },
            
                {
                    title:'Pan',
                    path:'/kyc/pan',
                    icon:<AiIcons.AiFillHome />
    
                },
                {
                    title:'Bank Details',
                    path:'/kyc/bank',
                    icon:<AiIcons.AiFillHome />
    
                }
            
        ]
    }
]

