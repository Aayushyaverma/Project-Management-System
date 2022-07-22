import React, { Component } from 'react'
import ProjectItem from './Project/ProjectItem';
import CreateProject from './Project/CreateProject';
import { connect } from 'react-redux';
import { getProjects } from '../actions/projectActions';
import PropTypes from "prop-types"

//rcc: Creates class based components. 
//Class based components maps our state to our component property.
export class Dashboard extends Component {

  componentDidMount() {
    this.props.getProjects();
  }

  render() {

    const { projects } = this.props.project

    return (
      // jsx allows us to have HTML inside the JavaScript code.
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Projects</h1>
              <br />
              <CreateProject />
              <br />
              <hr />
              {projects.map(project => (
                <ProjectItem key = {project.id} project={project} />
              ))
              }

            </div>
          </div>
        </div>

      </div>

    )
  }
}

Dashboard.propTypes = {
  project: PropTypes.object.isRequired,
  getProjects: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  project: state.projects,
})

export default connect(mapStateToProps, { getProjects })(Dashboard);
