import axios from "axios";

class ProjectService {

    getAllProjects() {
        return axios.get("http://localhost:8080/api/project/all")
    }

    createProject(project) {
        return axios.post("http://localhost:8080/api/project", project)
    }
}

export default new ProjectService();