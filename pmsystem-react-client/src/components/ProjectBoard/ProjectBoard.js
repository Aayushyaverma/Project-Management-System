import React from 'react'
import { Link, useParams } from 'react-router-dom'

function ProjectBoard() {
    const { id } = useParams();
    return (
        <div className="container">
            <Link to={`/addProjectTask/${id}`} className="btn btn-primary mb-3">
                <i className="fas fa-plus-circle"></i> Create Project Task
            </Link>
            <br />
            <hr />
            {/* <!-- Backlog STARTS HERE --> */}
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-secondary text-white">
                                <h3>TO DO</h3>
                            </div>
                        </div>

                        {/* <!-- SAMPLE PROJECT TASK STARTS HERE --> */}
                        <div className="card mb-1 bg-light">

                            <div className="card-header text-primary">
                                ID: projectSequence -- Priority: priorityString
                            </div>
                            <div className="card-body bg-light">
                                <h5 className="card-title">project_task.summary</h5>
                                <p className="card-text text-truncate ">
                                    project_task.acceptanceCriteria
                                </p>
                                <Link to="#" className="btn btn-primary btn-lg">
                                    View / Update
                                </Link>
                                &nbsp;
                                &nbsp;
                                <button className="btn btn-danger btn-lg ml-4">
                                    Delete
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-primary text-white">
                                <h3>In Progress</h3>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-success text-white">
                                <h3>Done</h3>
                            </div>
                        </div>
                        {/* { <!-- SAMPLE PROJECT TASK STARTS HERE -->

                    <!-- SAMPLE PROJECT TASK ENDS HERE -->} */}
                    </div>
                </div>
            </div>

            {/* <!-- Backlog ENDS HERE --> */}
        </div>
    )
}

export default ProjectBoard
