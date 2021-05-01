import React, { useState } from "react";
import SideNav from '../../components/nav/Nav'


function ListApplicant() {


    return(
        <div className="custom-container dashboardContainer themegreybg">
        <div className="row">
             <div className="col col-sm-2 col-md-2" >
                 <SideNav page='List Applicants' />
             </div>

             <div className="col col-sm-2 col-md-10">
                 Hello
             </div>
        </div>
        
    </div>
    )

}

export default ListApplicant
