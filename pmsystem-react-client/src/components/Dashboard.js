import React, { Component } from 'react'
import ProjectItem from './Project/ProjectItem';

//rcc: Creates class based components. 
//Class based components maps our state to our component property.
export class Dashboard extends Component {
  render() {
    return (
        // jsx allows us to have HTML inside the JavaScript code.
        <div>

            <h1> Welcome to the Dashboard</h1>
            <ProjectItem/>

        </div>
    )
  }
}

export default Dashboard;
