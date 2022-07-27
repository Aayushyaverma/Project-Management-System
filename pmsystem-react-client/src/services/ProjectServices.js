import axios from "axios";
import authHeader from "./authHeader";

class ProjectService {

    createProject(project) {
        return axios.post("http://localhost:8080/api/project",project, {headers: authHeader()})
    }

    updateProject(id){
        return axios.put(`http://localhost:8080/api/project/${id}`)
    }
}


export default new ProjectService();