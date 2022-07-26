import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import BacklogServices from '../../../services/BacklogServices';
import classnames from "classnames";

function AddProjectTask() {

    const { id } = useParams();

    const [summary, setSummary] = useState('')
    const [acceptanceCriteria, setAcceptanceCriteria] = useState('')
    const [priority, setPriority] = useState('')
    const [status, setStatus] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [projectIdentifier, setProjectIdentifier] = useState('')

    


    return (
        <div className="add-PBI">
            <div className="container">
                <Link to={`/projectBoard/${id}`} className="btn btn-light">
                    Back to Project Board
                </Link>
                <br />
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h4 className="display-4 text-center">Add Project Task</h4>
                        <p className="lead text-center">Project Name + Project Code</p>
                        <form>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    name="summary"
                                    placeholder="Project Task summary"
                                />
                            </div>
                            <br />
                            <div className="form-group">
                                <textarea
                                    className="form-control form-control-lg"
                                    placeholder="Acceptance Criteria"
                                    name="acceptanceCriteria"
                                />
                            </div>
                            <br />
                            <h6>Due Date</h6>
                            <div className="form-group">
                                <input
                                    type="date"
                                    className="form-control form-control-lg"
                                    name="dueDate"
                                />
                            </div>
                            <br />
                            <div className="form-group">
                                <select
                                    className="form-control form-control-lg"
                                    name="priority"
                                >
                                    <option value={0}>Select Priority</option>
                                    <option value={1}>High</option>
                                    <option value={2}>Medium</option>
                                    <option value={3}>Low</option>
                                </select>
                            </div>
                            <br />

                            <div className="form-group">
                                <select
                                    className="form-control form-control-lg"
                                    name="status"
                                >
                                    <option value="">Select Status</option>
                                    <option value="TO_DO">TO DO</option>
                                    <option value="IN_PROGRESS">IN PROGRESS</option>
                                    <option value="DONE">DONE</option>
                                </select>
                            </div>

                            <input
                                type="submit"
                                className="btn btn-primary btn-block btn-lg mt-4"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProjectTask;
