import React from 'react';
import { Link } from 'react-router-dom';
import FormLogin from '../components/Login';

const API = 'https://shopping-cart-api.maicolduque.now.sh/auth/local/';

const sendLogin = async(form) => {
  
  const payload = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  };

  
  try {
    const result = await fetch(API, payload);
    const user = await result.json();
    if (user && user.token) {
      localStorage.setItem('userEco', JSON.stringify(user))
      window.location.href = "/";
    }
  } catch (error) {
    console.error('Error :(', error);
  }
}

const Login = () => {
  return (
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xl-10 col-lg-12 col-md-9">
        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            <div className="row">
              <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
              <div className="col-lg-6">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                  </div>
                  <FormLogin handleSumbit={sendLogin} />
                  <hr />
                  <div className="text-center">
                    <Link className="small" to="/register">Create an Account!</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
};

export default Login;