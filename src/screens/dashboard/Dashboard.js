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
    // const jobs = [
    //     {
    //         id:1,
    //         jobname: 'React Developer',
    //         jobdescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    //         tech: ['React', 'Node', 'Flutter']
    //     },
    //     {
    //         id:1,
    //         jobname: 'React Developer',
    //         jobdescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    //         tech: ['React', 'Node', 'Flutter']
    //     },
    //     {
    //         id:1,
    //         jobname: 'React Developer',
    //         jobdescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    //         tech: ['React', 'Node', 'Flutter']
    //     },
    //     {
    //         id:1,
    //         jobname: 'React Developer',
    //         jobdescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    //         tech: ['React', 'Node', 'Flutter']
    //     },
    // ]
    return(
       <div className="custom-container dashboardContainer themegreybg">
           <div className="row">
                <div className="col col-sm-2 col-md-2" >
                    <SideNav page='Dashboard' />
                </div>

                <div className="col col-sm-2 col-md-10 ">
                    <div className="jobHeading">
                            <h1 className="md40white jobheadtext">Job Openings</h1>
                           <div className="row">
                           {
                            jobData.map((i)=>{
                                return(
                                    <div className="JobCards col col-lg-3 col-md-6 col-sm-12">
                                            <JobCard 
                                            type='job'
                                            name={i.jobname}
                                            desc={i.jobdescription}
                                            tech={i.tech}
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
