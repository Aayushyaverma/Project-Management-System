import React, { Component } from 'react'
import ProjectItem from './Project/ProjectItem';

//rcc: Creates class based components. 
//Class based components maps our state to our component property.
export class Dashboard extends Component {
  render() {
    return (
        // jsx allows us to have HTML inside the JavaScript code.
        <div className="projects">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="display-4 text-center">Projects</h1>
                    <br />
                    <a href="ProjectForm.html" class="btn btn-lg btn-info">
                        Create a Project
                    </a>
                    <br />
                    <hr />
                    <ProjectItem/>
                </div>
            </div>
        </div>
        
    </div>

    )
  }
}

export default Dashboard;
