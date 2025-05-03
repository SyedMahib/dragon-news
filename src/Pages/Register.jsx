import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const [nameError, setNameError] = useState("");

  const { createuser, setUser, updateUser } = use(AuthContext);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    if (name.length < 5) {
      setNameError("Name should be more than 5 characters");
      return;
    } else {
      setNameError("");
    }
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({ name, photo, email, password });

    createuser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        updateUser({ displayName: name, photoURL: photo }).then(() => {
          setUser({...user, displayName: name, photoURL: photo} );
          navigate("/")
        })
        .catch((error) => {
            console.log(error);
            setUser(user);
        })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  };

  return (
    <div className="flex justify-center items-center mt-48">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* Name */}

            <label className="label">Your Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Enter your name"
              required
            />

            {nameError && <p className="text-red-600 text-xs">{nameError}</p>}

            {/* PhotoURL */}

            <label className="label">PhotoURL</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Enter your PhotoURL"
              required
            />

            {/* Email */}

            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Enter your email address"
              required
            />

            {/* Password */}

            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Enter your password"
              required
            />

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            <p className="text-center mt-3 font-semibold text-sm">
              Already have an account?{" "}
              <Link
                to="/auth/login"
                className="text-secondary cursor-pointer hover:underline hover:font-bold"
              >
                Login
              </Link>
              .
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
