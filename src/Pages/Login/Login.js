import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
const Login = () => {
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { googleSingin, singin } = useAuth();
    const emailHandel = e => {
        setEmail(e.target.value);
    }
    const passHandel = e => {
        setPassword(e.target.value)
    }
    const handelFrom = e => {
        e.preventDefault();
        singin(email, password);
        e.target.reset();
    };
    return (
         <div className="container w-50 my-5">
            <h1 className="fw-bold text-primary">Please Login</h1>
            <form onSubmit={handelFrom}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"><i className="fas fa-envelope text-primary"></i> Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" required onBlur={emailHandel} aria-describedby="emailHelp" placeholder="enter your email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label"><i className="fas fa-lock text-primary"></i> Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" required onBlur={passHandel} placeholder="enter your password" />
                </div>
                    <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <h4 className="text-center text-danger">----- or -----</h4>
            <div className="text-center">
                <button onClick={googleSingin} className="btn btn-warning m-2"><i className="fab fa-google-plus text-light"></i></button>
                <p>Create Account & Singup <Link to="/singup">Singup</Link></p>
            </div>
        </div>
    );
};

export default Login;