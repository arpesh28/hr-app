import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import './AddApplicant.css'
import { useHistory } from "react-router-dom";
import { Multiselect } from 'multiselect-react-dropdown';

// Components
import SideNav from '../../components/nav/Nav'

// LocalStorage
import useLocalStorage
 from '../../utilities/useLocalStorage'


function AddApplicant() {
    const history = useHistory();
    
    const data = [
        {
            id: 1,
            tech: 'React',
        },
        {
            id: 2,
            tech: 'React Native',
        },
        {
            id: 3,
            tech: 'Node.js',
        },
        {
            id: 4,
            tech: 'Flutter',
        },
        {
            id: 5,
            tech: 'Python',
        },
        {
            id: 6,
            tech: 'Golang',
        },
    ]
    const [options, setoptions] = useState(data)
    const [tech, settech] = useState([])
    const [name, setname] = useState('')
    const [notes, setNotes] = useState('')
    const [noticePeriod, setnoticePeriod] = useState('')
    const [salary, setsalary] = useState('')
    const [jobcode, setjobcode] = useState('')
    const [applicantData, setapplicantData] = useLocalStorage('applicants', [])

    const onSelect = (options) => {
        settech(options)
    }
    const onRemove = (options) => {
        settech(options)
    }
    const handleSubmit = () => {
        setapplicantData([...applicantData, {name, notes,  salary, jobcode, noticePeriod, tech }])
        history.push("/");
    }

    return(
        <div className="custom-container dashboardContainer themegreybg">
        <div className="row sidenav">
             <div className="col col-sm-2 col-md-2" >
                 <SideNav page='Add Applicant' />
             </div>
          <div className="container">
              <div className="col col-sm-2 col-md-10  ">
                      <div className="addHead">
                              <h1 className="md40white">Add Applicant</h1>
                              <p className="rg20grey">Enter Applicant's Details</p>
                      </div>
                      
                      <Form>

                      <Form.Group class="mb-3">
                          <Form.Label for="formGroupExampleInput" class="form-label">Job Code</Form.Label>
                          <Form.Control
                           type="text" 
                           class="form-control" 
                           id="formGroupExampleInput" 
                           placeholder="Enter Job Code"
                           value={jobcode}
                           onChange={(e)=>{
                               setjobcode(e.target.value)
                           }}
                           />
                          </Form.Group>

                          <Form.Group class="mb-3">
                          <Form.Label for="formGroupExampleInput" class="form-label">Name</Form.Label>
                          <Form.Control
                           type="text" 
                           class="form-control" 
                           id="formGroupExampleInput" 
                           placeholder="Name"
                           value={name}
                           onChange={(e)=>{
                               setname(e.target.value)
                           }}
                           />
                          </Form.Group>
                          
                          <Form.Group class="mb-3">
                          <Form.Label for="formGroupExampleInput2" class="form-label">Notes</Form.Label>
                          <Form.Control 
                          class="form-control" 
                          as="textarea" 
                          placeholder="Ex:- this candidate is good at designing" 
                          value={notes}
                          onChange={(e)=>{
                              setNotes(e.target.value)
                          }}
                          >
                          </Form.Control>
                          </Form.Group>
                          
                          <Form.Group class="mb-3  multiselectstyle">
                          <Form.Label for="formGroupExampleInput2" class="form-label">Technologies</Form.Label>
                          <Multiselect
                          options={options}
                          onSelect={onSelect}
                          onRemove={onRemove} 
                          displayValue='tech' 
                          />
                         </Form.Group>

                         <Form.Group class="mb-3">
                          <Form.Label for="formGroupExampleInput" class="form-label">Notice Period</Form.Label>
                          <Form.Control
                           type="text" 
                           class="form-control" 
                           id="formGroupExampleInput" 
                           placeholder="Ex: 30days"
                           value={noticePeriod}
                           onChange={(e)=>{
                               setnoticePeriod(e.target.value)
                           }}
                           />
                          </Form.Group>
                          
                          <Form.Group class="mb-3">
                          <Form.Label for="formGroupExampleInput" class="form-label">Salary Asked</Form.Label>
                          <Form.Control
                           type="text" 
                           class="form-control" 
                           id="formGroupExampleInput" 
                           placeholder="Expected CTC"
                           value={salary}
                           onChange={(e)=>{
                               setsalary(e.target.value)
                           }}
                           />
                          </Form.Group>

                          <div class="d-grid gap-2">
                              <Button 
                              class="btn btn-primary" 
                              type="button"
                              onClick={()=>{
                                 handleSubmit()
                              }}
                              >Button</Button>
                          </div>
                      </Form>
              </div>
          </div>
             
        </div>
        
    </div>
    )

}

export default AddApplicant
