import React from 'react';
import {ResumeList} from "../data/resume";
import {Link} from "react-router-dom";

const Resume = (props) => {

    let resume = ResumeList.map((personalres) => {
        return(
            <div className= "resume-container">
                <a>
                    <div className = "resume-image" style={{backgroundImage:"url("+ personalres.img_src +")" }}></div>

                </a>
                <h5>{personalres.Name}</h5>

            </div>
        );

    });

    return(

    <div className ="main-content">
        <div><Link  className="back" to="/">Back</Link></div>
        <h3>{props.title}</h3>
        <div className= "container">
            {resume}
                                             
        </div>
    </div>


      );
    };

export default Resume;