import React,{useState} from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
const Login = () => {
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { googleSingin, singin } = useAuth();
    const location = useLocation();
    const history = useHistory();
    // console.log(location?.state?.from || '/home');
    const redirect_uri = location?.state?.from || '/home';
    const emailHandel = e => {
        setEmail(e.target.value);
    }
    const passHandel = e => {
        setPassword(e.target.value)
    }
    const handelFrom = e => {
        e.preventDefault();
        singin(email, password)
        .then(() => {
            history.push(redirect_uri);
            })
        e.target.reset();
    };
    const googleLogin = () => {
        googleSingin()
        .then(() => {
            history.push(redirect_uri);
        })
    }
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
                <button onClick={googleLogin} className="btn btn-warning m-2"><i className="fab fa-google-plus text-light"></i></button>
                <p>Create Account & Singup <Link to="/singup">Singup</Link></p>
            </div>
        </div>
    );
};

export default Login;