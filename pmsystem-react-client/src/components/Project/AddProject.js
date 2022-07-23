import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProjectServices from '../../services/ProjectServices'
import { PropTypes } from 'prop-types'
import classNames from 'classnames'


//rafce: stateless component
//useHistory Hook: Gives access to the history instance that you may use to navigate.

const AddProject = () => {

    const [projectName, setProjectName] = useState('')
    const [projectIdentifier, setProjectIdentifier] = useState('')
    const [description, setDescription] = useState('')
    const [start_date, setStartDate] = useState('')
    const [end_date, setEndDate] = useState('')

    const initialStateErrors = {
        projectName: '',
        projectIdentifier: '',
        description: ''
    }


    const [errors, setErrors] = useState(initialStateErrors);


    const navigate = useNavigate();

    const saveProject = (e) => {
        e.preventDefault();

        const project = { projectName, projectIdentifier, description, start_date, end_date }

        ProjectServices.createProject(project)
            .then((response) => {
                console.log(response.data)
                navigate('/dashboard');
            }).catch(error => {
                //console.log(error.response)
                const errData = error.response.data
    setErrors({
                    ...error,
                    projectName: errData.projectName,
                    projectIdentifier: errData.projectIdentifier,
                    description: errData.description
            })
    }

    return (
        <div>
            <div className='project'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Create Project</h5>
                            <hr />
                            <form>
                                <div className="form-group">
                                    <input type="text"
                                        className={classNames("form-control form-control-lg", {
                                            "is-invalid": errors.projectName

                                        })}

                                        placeholder="Project Name"
                                        name='projectName'
                                        value={projectName}
                                        onChange={(e) => setProjectName(e.target.value)}
                                    />
                                    {errors.projectName && (
                                        <div className='invalid-feedback'>{errors.projectName}</div>
                                    )}
                                </div>

                                <br />

                                <div className="form-group">
                                    <input type="text"
                                        className={classNames("form-control form-control-lg", {
                                            "is-invalid": errors.projectIdentifier
                                        })}
                                        placeholder="Unique Project ID"
                                        name='projectIdentifier'
                                        value={projectIdentifier}
                                        onChange={(e) => setProjectIdentifier(e.target.value)}
                                    />
                                    {errors.projectIdentifier && (
                                        <div className='invalid-feedback'>{errors.projectIdentifier}</div>
                                    )}
                                </div>

                                <br />

                                <div className="form-group">
                                    <textarea
                                        className={classNames("form-control form-control-lg", {
                                            "is-invalid": errors.description
                                        })}
                                        placeholder="Project Description"
                                        name='description'
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                    {errors.description && (
                                        <div className='invalid-feedback'>{errors.description}</div>
                                    )}
                                </div>

                                <br />
                                
                                <h6>Start Date</h6>
                                <div className="form-group">
                                    <input type="date"
                                        className="form-control form-control-lg"
                                        name="start_date"
                                        value={start_date}
                                        onChange={(e) => setStartDate(e.target.value)}
                                    />
                                </div>
                                <br />
                                <h6>Estimated End Date</h6>
                                <div className="form-group">
                                    <input type="date"
                                        className="form-control form-control-lg"
                                        name="end_date"
                                        value={end_date}
                                        onChange={(e) => setEndDate(e.target.value)}
                                    />
                                </div>
                                

                                <button style={{ backgroundColor: "#3e7e80" }} className='btn btn-success btn-lg mt-3' onClick={(e) => saveProject(e)}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default (AddProject);
