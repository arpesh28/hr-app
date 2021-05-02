import React, { useState } from "react";

// LocalStorage
import useLocalStorage
 from '../../utilities/useLocalStorage'


// Componentnts
import SideNav from '../../components/nav/Nav'
import ApplicantItem from '../../components/applicant-item/ApplicantItem'
import ApplicantModal from '../../components/applicant-modal/ApplicantModal'

function ListApplicant({location}) {
    const [applicant, setapplicant] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [jobData, setJobData] = useLocalStorage('jobs', [])
    const [applicantData, setapplicantData] = useLocalStorage('applicants', [])
const {jobcode, tech} = location&&location.state
    return(
        <div className="custom-container dashboardContainer themegreybg">
         <div className="row">
         <div className="col col-xs col-md col-lg  col-xl-2 " >
                    <SideNav page='List Applicants' />
                </div>

                <div className="col-12 col-sm-12 col-xs-12 col-md-12 col-lg-12 col-xl-10 ">
                    <div className="jobHeading">
                            <h1 className="md40white jobheadtext">List of the applicants</h1>
                           <div className="row">
                           </div>
                    </div>
                   <div className="container">
                        {
                        applicantData&&applicantData
                        .filter((val)=>{
                            if(jobcode==val.jobcode) {
                                if(val.tech.filter((t)=>{
                                    if(tech.some((techs)=> techs.tech === t.tech)){
                                        return true
                                    } else return false
                                })) {
                                    return val
                                }
                            } else return
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

export default ListApplicant
