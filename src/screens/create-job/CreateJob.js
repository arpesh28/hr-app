import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import './CreateJob.css'
import { useHistory } from "react-router-dom";
import { Multiselect } from 'multiselect-react-dropdown';

// Components
import SideNav from '../../components/nav/Nav'


function CreateJob() {
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
    const [jobname, setjobname] = useState('')
    const [jobdescription, setjobdescription] = useState('')


    const onSelect = (options) => {
        settech(options)
    }
    const onRemove = (options) => {
        settech(options)
    }
    
    return(
      <div className="custom-container dashboardContainer themegreybg">
      <div className="row">
           <div className="col col-sm-2 col-md-2" >
               <SideNav page='Create Job' />
           </div>
        <div className="container">
            <div className="col col-sm-2 col-md-10  ">
                    <div className="headingContainer">
                            <h1 className="md40white">Create Job</h1>
                            <p className="rg20grey">Add Job Details</p>
                    </div>
                    
                    <Form>
                        <Form.Group class="mb-5">
                        <Form.Label for="formGroupExampleInput" class="form-label">Name</Form.Label>
                        <Form.Control
                         type="text" 
                         class="form-control" 
                         id="formGroupExampleInput" 
                         placeholder="Name of the job"
                         value={jobname}
                         onChange={(e)=>{
                             setjobname(e.target.value)
                         }}
                         />
                        </Form.Group>
                        
                        <Form.Group class="mb-5 mt-5">
                        <Form.Label for="formGroupExampleInput2" class="form-label">Description</Form.Label>
                        <Form.Control 
                        class="form-control" 
                        as="textarea" 
                        rows={3}placeholder="About the job..." 
                        rows="3"
                        value={jobdescription}
                        onChange={(e)=>{
                            setjobdescription(e.target.value)
                        }}
                        >
                        </Form.Control>
                        </Form.Group>
                        
                        <Form.Group class="mb-5 mt-5 multiselectstyle">
                        <Form.Label for="formGroupExampleInput2" class="form-label">Technologies</Form.Label>
                        <Multiselect
                        options={options}
                        onSelect={onSelect}
                        onRemove={onRemove} 
                        displayValue='tech' 
                        />
                       </Form.Group>
                        
                        <div class="d-grid gap-2">
                            <Button 
                            class="btn btn-primary" 
                            type="button"
                            onClick={()=>{
                                history.push("/");
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

export default CreateJob
