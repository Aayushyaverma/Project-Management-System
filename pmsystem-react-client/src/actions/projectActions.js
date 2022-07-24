import axios from "axios";
import { DELETE_PROJECT, GET_PROJECT, GET_PROJECTS } from "./types";

//GET: All projects
export const getProjects = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/project/all")
    dispatch({
        type: GET_PROJECTS,
        payload: res.data
    });
}

//GET: Project by ID
export const getProject = (id, history) => async dispatch => {
    try {
      const res = await axios.get(`/api/project/${id}`);
      dispatch({
        type: GET_PROJECT,
        payload: res.data
      });
    } catch (error) {
      history.push("/dashboard");
    }
  };

//DELETE: Delete project by ID
export const deleteProject = id => async dispatch => {
    await axios.delete(`http://localhost:8080/api/project/${id}`)
    dispatch({
        type: DELETE_PROJECT,
        payload: id
    });
}