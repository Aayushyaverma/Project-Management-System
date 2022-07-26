import axios from "axios";

class BacklogService {

    addProjectTask(backlog_id, project_task) {
        return axios.post(`/api/backlog/${backlog_id}`, project_task);
    }
}


export default new BacklogService();