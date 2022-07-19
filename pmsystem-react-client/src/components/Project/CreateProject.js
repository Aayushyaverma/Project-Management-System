import React from 'react'
import { Link } from 'react-router-dom';

// rfc : Creates a functional component.
// Functional components do not have render methods and it is a stateless component.

const CreateProject = () => {
  return (
    <React.Fragment>
    <Link 
        to="/addProject"
        className="btn btn-lg btn-info"> Create a Project 
    </Link>
    </React.Fragment>
  )
}

export default CreateProject;
