import React, { useEffect, useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
  useEffect(() => {
    document.title = "Holulu Theme Park-Register";
  }, []);
  const { googleSingin, loginfromhandel } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const history = useHistory();
  const uri_redirect = location?.state?.from || "/home";
  const nameHandel = (e) => {
    setName(e.target.value);
  };
  const emailHandel = (e) => {
    setEmail(e.target.value);
  };
  const passHandel = (e) => {
    setPassword(e.target.value);
  };
  const handelFrom = (e) => {
    e.preventDefault();
    loginfromhandel(name, email, password);
    e.target.reset();
  };
  const singinGoogle = () => {
    googleSingin().then(() => {
      history.push(uri_redirect);
    });
  };
  return (
    <div className="container w-50 my-5">
      <h1 className="fw-bold text-primary">Please Sing Up</h1>
      <form onSubmit={handelFrom}>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            <i className="fas fa-user text-primary"></i> Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            required
            onBlur={nameHandel}
            aria-describedby="emailHelp"
            placeholder="enter your name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            <i className="fas fa-envelope text-center text-primary"></i> Email
            address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            required
            onBlur={emailHandel}
            aria-describedby="emailHelp"
            placeholder="enter your email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            <i className="fas fa-lock text-primary"></i> Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            required
            onBlur={passHandel}
            placeholder="enter your password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sing Up
        </button>
      </form>
      <h4 className="text-center text-danger">----- or -----</h4>
      <div className="text-center">
        <button onClick={singinGoogle} className="btn btn-primary m-2">
          <i className="fab fa-google-plus text-light"></i>
        </button>
        <p>
          Already Your Account <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
