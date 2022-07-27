import axios from "axios";

class UserServices {

    registerUser(user) {
        return axios.post("http://localhost:8080/api/users/register", user);
    }

    // loginUser(user) {
    //     return axios.post("http://localhost:8080/api/users/login", user);
    // }

    loginUser(username, password) {
        console.log(username);
        console.log(password)
        return axios
            .post("http://localhost:8080/api/users/login", {
                username,
                password
            })
            
    };

    logout = () => {
        localStorage.removeItem("user");
    };

    getCurrentUser = () => {
        return JSON.parse(localStorage.getItem("user"));
    };
}

export default new UserServices();