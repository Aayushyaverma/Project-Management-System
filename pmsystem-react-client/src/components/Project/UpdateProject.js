import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import ProjectServices from '../../services/ProjectServices';
import classNames from 'classnames';

const UpdateProject = () => {
    const {id} = useParams();

    const navigate = useNavigate();

    const [projectName, setProjectName] = useState('')
    const [projectIdentifier, setProjectIdentifier] = useState('')
    const [description, setDescription] = useState('')
    const [start_date, setStartDate] = useState('')
    const [end_date, setEndDate] = useState('')

    const initialState = {
        projectName: "",
        projectIdentifier: id,
        description: "",
        start_date: "",
        end_date: ""
    };
    const [project, setProject] = useState(initialState);
    const fetchData = async () => {
        const response = await fetch(`http://localhost:8080/api/project/${id}`);
        const data = await response.json();
        setProject(data);
        setProjectName(data.projectName);
        setProjectIdentifier(data.projectIdentifier);
        setDescription(data.description);
        setStartDate(data.start_date);
        setEndDate(data.end_date);
    }

    useEffect(() => {
        fetchData();
    }, []);
    
    const initialStateErrors = {
        projectName: '',
        projectIdentifier: '',
        description: ''
    }
    const [errors, setErrors] = useState(initialStateErrors);

    const updateProject = (e) => {
        e.preventDefault();
        console.log(project);
        ProjectServices.updateProject(id)
          .then((response) => {
            console.log(response.data);
            navigate("/dashboard");
          })
          .catch((error) => {
            console.log(error);
          });
      };

    

    return (
        <div>
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Update Project</h5>
                            <hr />
                            <form>
                                <div className="form-group">
                                    <input type="text" className={classNames("form-control form-control-lg", {
                                            "is-invalid": errors.projectName
                                        })} placeholder="Project Name" 
                                        onChange={(e) => setProjectName(e.target.value)}
                                        defaultValue= {project.projectName}
                                    />
                                    {errors.projectName && (
                                        <div className='invalid-feedback'>{errors.projectName}</div>
                                    )}
                                </div>
                                <br />

                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg" placeholder="Unique Project ID" disabled
                                    onChange={(e) => setProjectIdentifier(e.target.value)}
                                    defaultValue={project.projectIdentifier}
                                         />
                                </div>
                                <br />

                                <div className="form-group">
                                    <textarea className="form-control form-control-lg" placeholder="Project Description"
                                    onChange={(e) => setDescription(e.target.value)}
                                    defaultValue={project.description}></textarea>
                                </div>
                                <br />

                                <h6>Start Date</h6>
                                <div className="form-group">
                                    <input type="date" className="form-control form-control-lg" name="start_date"
                                    onChange={(e) => setStartDate(e.target.value)}
                                    defaultValue={project.start_date}
                                        />
                                </div>
                                <h6>Estimated End Date</h6>
                                <div className="form-group">
                                    <input type="date" className="form-control form-control-lg" name="end_date"
                                    onChange={(e) => setEndDate(e.target.value)}
                                    defaultValue={project.end_date}
                                         />
                                </div>

                                <button
                                    style={{ backgroundColor: "#3e7e80" }} className='btn btn-success btn-lg mt-3' onClick={() => updateProject(id)}>Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateProject
