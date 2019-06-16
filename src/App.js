import React,{Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Resume from './components/resume';
import ProjectContainer from './components/projectContainer';

import './css/style.css';

class App extends Component {
  render(){
  return (
    <BrowserRouter>
     <div className="App">
      <Navbar title = "My story"/>
{/* this is a component when not passing any props<Route to="/" component={Home} />*/}
      <Route exact path="/" render={() =><Home title="Stories" />} />
      <Route path="/resume" render={() =><Resume title="My Contacts"/> } />
      <Route path="/projects" render={()=> <ProjectContainer title="My Projects" />} />
      {/*Home title =  "Stories"*/}
    </div>
   </BrowserRouter>
  );
}
}
export default App;
