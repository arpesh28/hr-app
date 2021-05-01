import React, { useState } from "react";
import { Container, Form, Button, Modal } from "react-bootstrap";
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
    const [showModal, setShowModal] = useState(false)
    const [applicant, setapplicant] = useState(null)
    const [applicantData, setapplicantData] = useLocalStorage('applicants', [])

    
    const handleSearch = () => {
        console.log("Search")
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
                        <Form.Group>
                        <Button 
                        className="searchBtn"             
                        onClick={()=>{
                            handleSearch()
                        }}
                        >Search</Button>
                        </Form.Group>
                    </Form>
                           </div>
                           <div className="filterContainer">
                               <span className="md16White">Filter by</span>
                               <div className={filter1? 'filterbadge md16White filterbadgeactive': 'filterbadge md16White'} onClick={()=>{
                                   setfilter1(!filter1)
                                   setfilter2(false)
                                   }} > Notice Period</div>
                               <div className={filter2? 'filterbadge md16White filterbadgeactive': 'filterbadge md16White'}  onClick={()=>{
                                   setfilter2(!filter2)
                                   setfilter1(false)
                                   }}>Salary Asked</div>
                           </div>
                    </div>
                   <div className="container">
                        {applicants.map((item)=>{
                            return(
                                <>
                                <ApplicantItem 
                                name={item.applicantName}
                                code={item.jobCode}
                                salary={item.salary}
                                notice={item.notice}
                                tech={item.tech}
                                setShowModal={setShowModal}
                                item={item}
                                setapplicant={setapplicant}
                                />
                                
                                </>
                            )
                        })}
                   </div>
                   {showModal &&
                                    <ApplicantModal
                                    show={showModal}
                                    setShowModal={setShowModal}
                                    name={applicant.applicantName}
                                    code={applicant.jobCode}
                                    salary={applicant.salary}
                                    notice={applicant.notice}
                                    tech={applicant.tech}
                                />}
                </div>
           </div>

          
           
       </div>
    )

}


export default Search