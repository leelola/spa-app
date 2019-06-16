import React from 'react';
import {ProjectList } from '../data/projects';
import Project from './project';
import Projects from './projects';
import {Route } from 'react-router-dom';

const ProjectContainer =(props)=> {
    let projectUrl = ProjectList.map((project)=> {
        return(
            <Route path ={'/projects/${project.url}'} render={() =><Project image={project.profile_img} topic={project.Topic} details ={project.discussion}/>} />
        );
    }); 
    return (
        <React.Fragment>
            <Route exact path="/projects" render ={ () => <Projects title = "First Project" />}/>
            {projectUrl}
         </React.Fragment>
    );
};

export default ProjectContainer;
