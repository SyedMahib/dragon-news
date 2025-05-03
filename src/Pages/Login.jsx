import React, { use, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {

    const [error, setError] = useState("");

    const {signIn} = use(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();


    const handleLogIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({email,password});
        signIn(email, password)
        .then(result=> {
            const user = result.user;
            // console.log(user);
            navigate(`${location.state ? location.state : "/"}`)
        }) 
        .catch((error) => {
            const errorCode = error.code;
            // const errorMessage = error.message;
            // alert(errorCode, errorMessage);
            setError(errorCode);
        });
    };

  return (
    <div className="flex justify-center items-center mt-48">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">Login into your account</h2>
        <form onSubmit={handleLogIn} className="card-body">
          <fieldset className="fieldset">
            
            {/* Email */}

            <label className="label">Email</label>
            <input name="email" type="email" className="input" placeholder="Email" required/>

            {/* Passeord */}

            <label className="label">Password</label>
            <input name="password" type="password" className="input" placeholder="Password" required/>

            {
                error && <p className="text-red-600 text-xs">{error}</p>
            }

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit"  className="btn btn-neutral mt-4">Login</button>
            <p className="text-center mt-3 font-semibold text-sm">Don't have an account? <Link to="/auth/register" className="text-secondary cursor-pointer hover:underline hover:font-bold">Register</Link>.</p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
