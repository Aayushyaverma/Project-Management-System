import React from 'react'

const UpdateProject = () => {
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
                            <input type="text" className="form-control form-control-lg " placeholder="Project Name" />
                        </div>
                        <br/>

                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="Unique Project ID"
                                disabled />
                        </div>
                        <br/>

                        <div className="form-group">
                            <textarea className="form-control form-control-lg" placeholder="Project Description"></textarea>
                        </div>
                        <br/>

                        <h6>Start Date</h6>
                        <div className="form-group">
                            <input type="date" className="form-control form-control-lg" name="start_date" />
                        </div>
                        <h6>Estimated End Date</h6>
                        <div className="form-group">
                            <input type="date" className="form-control form-control-lg" name="end_date" />
                        </div>

                        <button style={{ backgroundColor: "#3e7e80" }} className='btn btn-success btn-lg mt-3' >Update</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
      </div>
  )
}

export default UpdateProject;
