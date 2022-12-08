import React from "react";
import { useRef } from "react";
import { useAuth } from "../contexts/AuthContext";
const Login = () => {
  const uname = useRef("");
  const pass = useRef("");
  const { login } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: uname.current.value,
      password: pass.current.value,
    };
    login(data);
  };
  return (
    <div className="container">
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                  <input
                    ref={uname}
                    type="text"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                  />
                </div>

                <div className="form-outline mb-3">
                  <input
                    ref={pass}
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                  />
                </div>
                <button
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                >
                  Login
                </button>
                <div className="text-center text-lg-start mt-4 pt-2"></div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
