import React from 'react';
import {ProjectList} from "../data/projects";
import {Link} from "react-router-dom";

const Projects = (props) => {

    let projects = ProjectList.map((personalproj) => {
        return(
            <div className= "project-container">
                <Link to={'/projects/${personalproj.url}'}>
                    <div className = "project-image" style={{backgroundImage:"url("+ personalproj.img_src +")" }}></div>

                </Link>
                <h5>{personalproj.Topic}</h5>

            </div>
        );

    });

    return(

    <div className ="main-content">
        <div><Link  className="back" to="/">Back</Link></div>
        <h3>{props.title}</h3>
        <div className= "container">
            {projects}
                                             
        </div>
    </div>


      );
    };

export default Projects;