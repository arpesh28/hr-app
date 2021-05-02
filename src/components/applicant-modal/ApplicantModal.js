import React, { useEffect, useState } from "react";
import { Row, Container, Col, Modal, Button } from "react-bootstrap";
import "./ApplicantModal.css"
import {Link, NavLink,useHistory} from 'react-router-dom'

// Images


function ApplicantModal ({
    show,
    onHide,
    setShowModal,
    name,
    tech,
    code,
    salary,
    notice,
}) {
    // const history = useHistory();
    return(
        <Modal
        onHide={()=> {setShowModal(false)}}
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        // className="customModal"
        >
         <Modal.Header closeButton >
            <Modal.Title id="contained-modal-title-vcenter">
                <span className="md30main">{name}</span>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h4 className="rg20grey detailtitle"> Job Code: 
            <span className=" rg16subtxt details">{code}</span>
        </h4>
        <h4 className="rg20grey detailtitle"> Salary Asked: 
            <span className=" rg16subtxt details">{salary}</span>
        </h4>
        <h4 className="rg20grey detailtitle"> Notice Period: 
            <span className=" rg16subtxt details">{notice}</span>
        </h4>
        {tech.map((item)=>{
                  return(
                      <span className="techtag lt15white">{item.tech}</span>
                  )
              })}
        
      </Modal.Body>
        {/* <Modal.Footer>
        <Button onClick={()=>{setShowModal(false)}}>Close</Button>
      </Modal.Footer> */}
        </Modal>
        
    )

}

export default ApplicantModal