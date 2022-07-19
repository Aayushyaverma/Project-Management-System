import React, { Component } from 'react'

export class AddProject extends Component {

    constructor(){
        super()

        this.state = {
            "projectName": "",
            "projectIdentifier": "",
            "description": "",
            "start_date": "",
            "end_date": ""
        };

        this.OnChange = this.OnChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    OnChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        //Submit button
        e.preventDefault();

        const newProject = {
            "projectName": this.state.projectName,
            "projectIdentifier": this.state.projectIdentifier,
            "description": this.state.description,
            "start_date": this.state.start_date,
            "end_date": this.state.end_date
        }

        console.log(newProject);
    }
  render() {
    return (
    //Controlled component: Form's data is handled by the component's state such as onClick, onChange, etc.
    
    <div className="project">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h5 className="display-4 text-center">Create Project</h5>
                    <hr />
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" 
                            className="form-control form-control-lg " 
                            placeholder="Project Name" 
                            name='projectName'
                            defaultValue={this.state.projectName}
                            onChange = {this.OnChange}
                            />
                        </div>
                        <br/>
                        <div className="form-group">
                            <input type="text" 
                            className="form-control form-control-lg" 
                            placeholder="Unique Project ID" 
                            name='projectIdentifier'
                            defaultValue={this.state.projectIdentifier}
                            onChange = {this.OnChange}
                            />
                        </div>
                        <br/>
                        <div className="form-group">
                            <textarea className="form-control form-control-lg" 
                            placeholder="Project Description"
                            name='description'
                            defaultValue={this.state.description}
                            onChange = {this.OnChange}
                            />
                        </div>
                        <br/>
                        <h6>Start Date</h6>
                        <div className="form-group">
                            <input type="date" 
                            className="form-control form-control-lg" 
                            name="start_date" 
                            defaultValue={this.state.start_date}
                            onChange = {this.OnChange}
                            />
                        </div>
                        <br/>
                        <h6>Estimated End Date</h6>
                        <div className="form-group">
                            <input type="date" 
                            className="form-control form-control-lg" 
                            name="end_date" 
                            defaultValue={this.state.end_date}
                            onChange = {this.OnChange}
                            />
                        </div>

                        <input type="submit" className="btn btn-lg btn-block mt-4" />
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default AddProject;
