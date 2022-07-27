import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserServices from '../../services/UserServices'
import classNames from 'classnames'

function Register() {

    const [username, setUsername] = useState('')
    const [fullName, setFullName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const initialStateErrors = {
        username: '',
        fullName: '',
        password: '',
        confirmPassword: ''
    }


    const [errors, setErrors] = useState(initialStateErrors);
    const navigate = useNavigate();

    const saveUser = (e) => {
        e.preventDefault();
        const user = { username, fullName, password, confirmPassword };
        UserServices.registerUser(user)
            .then((response) => {
                console.log(response.data);
                navigate("/login");
            }).catch(error => {
                console.log(error.response);
                const errData = error.response.data
                setErrors({
                    ...error,
                    username: errData.username,
                    fullName: errData.fullName,
                    password: errData.password,
                    confirmPassword: errData.confirmPassword
                })
            })
    }


    return (
        <div className="register">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Sign Up</h1>
                        <p className="lead text-center">Create your Account</p>
                        <form >
                            <div className="form-group">
                                <input type="text" className={classNames("form-control form-control-lg",
                                    {
                                        "is-invalid": errors.fullName
                                    })} placeholder="Name" name="name"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                />
                                {errors.fullName && (
                                        <div className='invalid-feedback'>{errors.fullName}</div>
                                    )}
                            </div>
                            <br />
                            <div className="form-group">
                                <input type="email" className={classNames("form-control form-control-lg",
                                {
                                            "is-invalid": errors.username
                                        })} placeholder="Email Address" name="email"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                {errors.username && (
                                        <div className='invalid-feedback'>{errors.username}</div>
                                    )}

                            </div>
                            <br />
                            <div className="form-group">
                                <input type="password" className={classNames("form-control form-control-lg",
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
                            <br />
                            <div className="form-group">
                                <input type="password" className={classNames("form-control form-control-lg",
                                {
                                            "is-invalid": errors.confirmPassword
                                        })} placeholder="Confirm Password"
                                    name="password2"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                {errors.confirmPassword && (
                                        <div className='invalid-feedback'>{errors.confirmPassword}</div>
                                    )}
                            </div>
                            <button style={{ backgroundColor: "#3e7e80" }} className='btn btn-success btn-lg mt-3' onClick={(e) => saveUser(e)}>Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Register
