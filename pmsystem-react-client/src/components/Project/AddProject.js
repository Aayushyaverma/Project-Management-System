import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProjectServices from '../../services/ProjectServices'

export const GET_ERRORS = "GET_ERRORS";
//rafce: stateless component
//useHistory Hook: Gives access to the history instance that you may use to navigate.

const AddProject = () => {

    const [projectName, setProjectName] = useState('')
    const [projectIdentifier, setProjectIdentifier] = useState('')
    const [description, setDescription] = useState('')
    const [start_date, setStartDate] = useState('')
    const [end_date, setEndDate] = useState('')
    const navigate = useNavigate();

    const saveProject = (e) => {
        e.preventDefault();

        const project = { projectName, projectIdentifier, description, start_date, end_date }

        ProjectServices.createProject(project)
            .then((response) => {
                console.log(response.data)
                navigate('/dashboard');
            }).catch(error => {
                return error.response;
            })
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Create Project</h5>
                        <hr />
                        <form>
                            <div className="form-group">
                                <input type="text"  
                                    className="form-control form-control-lg "
                                    placeholder="Project Name"
                                    name='projectName'
                                    value={projectName}
                                    onChange={(e) => setProjectName(e.target.value)}
                                />
                            </div>
                            <br />
                            <div className="form-group">
                                <input type="text" 
                                    className="form-control form-control-lg"
                                    placeholder="Unique Project ID"
                                    name='projectIdentifier'
                                    value={projectIdentifier}
                                    onChange={(e) => setProjectIdentifier(e.target.value)}
                                />
                            </div>
                            <br />
                            <div className="form-group">
                                <textarea
                                    className="form-control form-control-lg"
                                    placeholder="Project Description"
                                    name='description'
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
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
    )
}

export default AddProject


