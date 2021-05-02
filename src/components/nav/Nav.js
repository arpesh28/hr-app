import React, { useEffect, useState } from "react";
import { Row, Container, Col } from "react-bootstrap";
import "./Nav.css"
import {Link, NavLink} from 'react-router-dom'

// Images
import dashboard from '../../Images/dashboard.png'
import search from '../../Images/search.png'
import list from '../../Images/list.png'
import create from '../../Images/create.png'
import add from '../../Images/add.png'
import menu from '../../Images/menu.png'
import close from '../../Images/close.png'


function SideNav ({
    page
}) {
    
    const [active, setacitve] = useState('active')
    const [toggel, setToggle] = useState(true)
    const navItems = [
        {
            id: 1,
            name: "Dashboard",
            icon: dashboard,
            link: '/'
        },
        {
            id: 2,
            name: "Search",
            icon: search,
            link: '/search'
        },
        {
            id: 3,
            name: "Create Job",
            icon: create,
            link: '/createjob'
        },
        {
            id: 4,
            name: "Add Applicant",
            icon: add,
            link: '/addapplicant'
        },
        // {
        //     id: 5,
        //     name: "List Applicants",
        //     icon: list,
        //     link: '/listapplicants'
        // },

    ]
    console.log("TOGGLE:", toggel)
    return(
        <div>
            <div className={toggel? 'toggler toggle1': 'toggler toggle2'} onClick={()=>setToggle(!toggel)}>
               {toggel?  <img src={menu}  /> :  <img src={close}  />}
            </div>
            <div className={toggel? 'custom-container sideNavContainer themeblackbg' : 'custom-container navhide themeblackbg'}>
            
            <div className="title">
                HBoard
            </div>
           
            <ul className="navbarContainer">
                {navItems.map((item)=> {
                    return(
                        <Link to={item.link} className="links"  >
                            <li className={page==item.name?'navbar-items active': 'navbar-items'}>
                                <img src={item.icon} className="logostyles" />
                                <span className="md16White navText" >{item.name}</span>
                            </li>
                        </Link>
                    )
                    
                })}
            </ul>
            
        </div>
        </div>
        
    )

}

export default SideNav