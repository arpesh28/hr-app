import React, { useState } from "react";
import { Container, Form, Button, Modal, Row, Col } from "react-bootstrap";
import './Search.css'

// Images
import SearchIcon from '../../Images/search.png'

// Componentnts
import SideNav from '../../components/nav/Nav'
import ApplicantItem from '../../components/applicant-item/ApplicantItem'
import ApplicantModal from '../../components/applicant-modal/ApplicantModal'

// LocalStorage
import useLocalStorage
 from '../../utilities/useLocalStorage'



function Search() {
    const [search, setsearch] = useState('')
    // const [filter, setfilter] = useState('')
    const [filter1, setfilter1] = useState(false)
    const [filter2, setfilter2] = useState(false)
    const [salaryF, setSalaryF] = useState(0)
    const [noticeF, setNoticeF] = useState(0)
    const [showModal, setShowModal] = useState(false)
    const [applicant, setapplicant] = useState(null)
    const [applicantData, setapplicantData] = useLocalStorage('applicants', [])
    const [visibleData, setVisibleData] = useState(null) || {}

    const handleSearch = () => {
        // applicantData.map((i)=>{
        //     const {name, tech} = i;
        //     console.log('i:',i)
        //     if(search==name) {
        //         setVisibleData([...visibleData, i])
        //         console.log('i:',i)
        //     } 
        // })
    }
    const searchtype = () => {
        // console.log(search)
    }
    const applicants = [
        {
            id:1,
            applicantName: 'Arpesh Gadekar',
            jobCode: 'rd0206',
            notice: '30 days',
            salary: '20',
            tech: ['React', 'Node', 'Flutter']
        },
        {
            id:2,
            applicantName: ' Gadekar',
            jobCode: 'rd0206',
            notice: '30 days',
            salary: '20',
            tech: ['React', 'Node', 'Flutter']
        },
        {
            id:3,
            applicantName: 'Arpesh ',
            jobCode: 'rd0206',
            notice: '30 days',
            salary: '20',
            tech: ['React', 'Node', 'Flutter']
        },
    ]
    console.log("ITEM:", salaryF, noticeF)

    return(
        <div className="custom-container dashboardContainer themegreybg">
           <div className="row">
                <div className="col col-sm-2 col-md-2" >
                    <SideNav page='Search' />
                </div>

                <div className="col col-sm-2 col-md-10 ">
                    <div className="jobHeading">
                            <h1 className="md40white jobheadtext">Search Applicant</h1>
                           <div className="row">
                           <Form className="searchInputWrapper">
                        <Form.Group class="mb-5 searchInputContainer ">
                        {/* <img src={SearchIcon} className='searchIcon' /> */}
                        <Form.Control
                         type="text" 
                         class="form-control search-input"
                         id="formGroupExampleInput" 
                         placeholder="Search with name or technology"
                         value={search}
                         onChange={(e)=>{
                             setsearch(e.target.value)
                         }}
                         />
                        </Form.Group>
                        {/* <Form.Group>
                        <Button 
                        className="searchBtn"             
                        onClick={()=>{
                            handleSearch()
                        }}
                        >Search</Button>
                        </Form.Group> */}
                    </Form>

                           </div>
                           <div className="filterContainer">
                               <span className="md16White">Filter by</span>
                               <Form className="filterInputs">
                                   <Row>
                                       <Col className="filterInput"
 >
                                            <Form.Control
                                            onChange={(e)=> {setSalaryF(parseInt(e.target.value))}}
                                            placeholder="Salary in Lakhs (ex: 1.68)" />
                                       </Col>
                                       <Col className="filterInput"  >
                                            <Form.Control
                                            onChange={(e)=> {setNoticeF(parseInt(e.target.value))}}
                                            placeholder="Notice Period in days (ex: 30)" />
                                       </Col>
                                   </Row>
                               </Form>
                           </div>
                    </div>
                   <div className="container">
                        {
                        

                        applicantData&&applicantData
                        .filter((val)=>{
                            if (salaryF>0) {
                                console.log(val.salary)
                                if(val.salary <= salaryF) {
                                    return val
                                }
                                else return 
                            }
                            else if (noticeF>0) {
                                if(val.noticePeriod <= noticeF) {
                                    return val
                                }
                                else return 
                            }
                            if(search=="") {
                                return val
                            } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
                                return val
                            } 
                            else if (val.tech.find((t) => {
                                if(t.tech.toLowerCase().includes(search.toLowerCase())) {
                                    return true
                                } else return false
                            })) {return val}
                            else {return}
                        })
                        .map((item, index)=>{
                            return(
                                <div key={index}>
                                <ApplicantItem 
                                name={item.name}
                                code={item.jobcode}
                                salary={item.salary}
                                notice={item.noticePeriod}
                                tech={item.tech}
                                setShowModal={setShowModal}
                                item={item}
                                setapplicant={setapplicant}
                                />
                                </div>
                            )
                        })}
                   </div>
                   {showModal &&
                                    <ApplicantModal
                                    show={showModal}
                                    setShowModal={setShowModal}
                                    name={applicant.name}
                                    code={applicant.jobcode}
                                    salary={applicant.salary}
                                    notice={applicant.noticePeriod}
                                    tech={applicant.tech}
                                    notes={applicant.notes}
                                />}
                </div>
           </div>

          
           
       </div>
    )

}


export default Search