import React, { useState } from "react";
import "./Dashboard.css"

// LocalStorage
import useLocalStorage
 from '../../utilities/useLocalStorage'

// Components
import SideNav from '../../components/nav/Nav'
import JobCard from '../../components/job-card/JobCard'

function Dashboard() {
    const [jobData, setJobData] = useLocalStorage('jobs', [])
   
    return(
       <div className="custom-container dashboardContainer themegreybg">
           <div className="row">
                <div className="col col-xs col-md col-lg  col-xl-2 " >
                    <SideNav page='Dashboard' />
                </div>

                <div className="col-12 col-sm-12 col-xs-12 col-md-12 col-lg-12 col-xl-10 ">
                    <div className="jobHeading d-flex flex-column   ">
                            <h1 className="md40white jobheadtext">Job Openings</h1>
                           <div className="row">
                           {
                            jobData.map((i)=>{
                                return(
                                    <div className="JobCards col col-lg-4 col-md-6 col-sm-12">
                                            <JobCard 
                                            type='job'
                                            name={i.jobname}
                                            desc={i.jobdescription}
                                            tech={i.tech}
                                            item={i}
                                            />
                                        </div>
                                )

                            })
                           }
                                 <div className="JobCards col col-lg-3 col-md-6 col-sm-12">
                                            <JobCard type='add' />
                                        </div>
                           </div>
                    </div>
                   

                </div>
           </div>
           
       </div>
    )

}

export default Dashboard
