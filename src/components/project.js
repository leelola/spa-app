import React from 'react';
import { Link } from "react-router-dom";

const Project = (props) => {
   
    return(

    <div className ="main-content">
        <div><Link  className="back" to="/projects">Back</Link></div>
        <h3>{props.Topic}</h3>
        <div className= "container">
            <div className="image-profile" style = {{ backgroundImage:  "url("+ props.image +")"}}></div>  
            <h2>{props.name}</h2>
            <p>{props.discussion}</p>                                           
        </div>
    </div>


      );
    };

export default Project;