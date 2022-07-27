import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserServices from '../../services/UserServices'
import classnames from "classnames"

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const initialStateErrors = {
        username: '',
        password: '',
    }


    const [errors, setErrors] = useState(initialStateErrors);

    const userLogin = (e) => {
        e.preventDefault();
        UserServices.loginUser(username, password)
            .then((response) => {
                console.log("login response", response.data)
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));

                }
                navigate("/dashboard");

                return response.data;

            }).catch(error => {
                console.log(error.response);
                const errData = error.response.data
                setErrors({
                    ...error,
                    username: errData.username,
                    password: errData.password
                })
            })
    }

    return (
        <div className="login">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Log In</h1>
                        <form>
                            <div className="form-group">
                                <input type="email" className={classnames("form-control form-control-lg",
                                    {
                                        "is-invalid": errors.username
                                    })} placeholder="Username" name="email"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)} />
                                {errors.username && (
                                    <div className='invalid-feedback'>{errors.username}</div>
                                )}
                            </div>
                            <br />
                            <div className="form-group">
                                <input type="password" className={classnames("form-control form-control-lg",
                                    {
                                        "is-invalid": errors.password
                                    })} placeholder="Password" name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {errors.password && (
                                    <div className='invalid-feedback'>{errors.password}</div>
                                )}
                            </div>
                            <button style={{ backgroundColor: "#3e7e80" }} className='btn btn-success btn-lg mt-3' onClick={(e) => userLogin(e)}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
