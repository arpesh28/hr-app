import React, { useState } from "react";
import SideNav from '../../components/nav/Nav'


function Search() {


    return(
        <div className="custom-container dashboardContainer themegreybg">
           <div className="row">
                <div className="col col-sm-2 col-md-2" >
                    <SideNav page='Search' />
                </div>

                <div className="col col-sm-2 col-md-10">
                    <div>
                        <h2>Create Job</h2>
                        <p>Add Job Details</p>
                    </div>
                </div>
           </div>
           
       </div>
    )

}


export default Search