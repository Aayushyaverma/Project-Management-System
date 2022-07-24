import axios from "axios";

class ProjectService {

    createProject(project) {
        return axios.post("http://localhost:8080/api/project",project)
    }

    updateProject(id){
        return axios.put(`http://localhost:8080/api/project/${id}`)
    }
}


export default new ProjectService();