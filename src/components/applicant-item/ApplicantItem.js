import React, { useEffect, useState } from "react";
import { Row, Container, Col } from "react-bootstrap";
import "./ApplicantItem.css"
import {Link, NavLink} from 'react-router-dom'
import { useHistory } from "react-router-dom";

// Components
import ApplicantModal from '../../components/applicant-modal/ApplicantModal'

// Images
import addicon from '../../Images/add2.png'


function ApplicantItem ({
    name,
    tech,
    code,
    salary,
    notice,
    setShowModal,
    showModal,
    item,
    setapplicant
}) {
    const history = useHistory();
   
    return(
        <div className="applicantItemContainer d-flex flex-row  justify-content-between" onClick={()=>{setShowModal(true)
            setapplicant(item)
        }}>
          <div className="d-flex flex-column itemcolumns ">
              <span className="md16White" >{name}</span>
              <span className="rg16subtxt" >{code}</span>
          </div>
          <div className="d-flex flex-column itemcolumns  ">
              <span className="rg16subtxt" >{notice}</span>
              <span className="rg16subtxt" >${salary}</span>
          </div>
          <div className=" itemcolumns d-flex align-items-center">
              {tech.map((item)=>{
                  return(
                      <span className="techtag lt15white">{item}</span>
                  )
              })}
          </div>
          {/* {showModal &&
           <ApplicantModal
           show={showModal}
           setShowModal={setShowModal}
     />} */}
        </div>
        
    )

}

export default ApplicantItem