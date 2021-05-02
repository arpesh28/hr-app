import React, { useEffect, useState } from "react";
import { Row, Container, Col } from "react-bootstrap";
import "./JobCard.css"
import {Link, NavLink} from 'react-router-dom'
import { useHistory } from "react-router-dom";

// Images
import addicon from '../../Images/add2.png'


function JobCard ({
    type,
    name,
    desc,
    tech
}) {
    const history = useHistory();
   
    return(
        <div className="jobCardContainer">
            {type=='job'? 
            <div>
            <div className="jobText" >
                <span className="md30main">{name}</span>
                <span className="rg16subtxt">{desc}</span>
            </div>
            <div className="techtagContainer">
                {tech.map((item)=> {
                    console.log(item)
                    return(
                        <span className="techtag lt15white">{item.tech}</span>
                    )
                })}
            </div>
            </div>
            :
            <>
           <div className="addcard" 
               onClick={()=>{
                history.push("/createjob");
            }}
           >
               <img src={addicon}  />
           </div>
            </>    
        }
        </div>
        
    )

}

export default JobCard