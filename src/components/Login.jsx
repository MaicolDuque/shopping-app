import React , { useState } from 'react';
import { Link } from 'react-router-dom';


const Login = ({handleSumbit}) => {
    const [form, setForm] = useState({});
    
    const handleInputChange = (evt) => {   
      const { target: { name, value } } = evt;
    
      setForm({ ...form, [name]: value  });
    }
    
    const sendForm = (evt) => {
      evt.preventDefault();
      handleSumbit(form);
    }
    return (
      <form className="user" onSubmit={sendForm}>
        <div className="form-group">
          <input
            type="email"
            name="email"
            className="form-control form-control-user"
            id="exampleInputEmail"
            aria-describedby="emailHelp"
            onChange={handleInputChange}
            placeholder="Enter Email Address..."
          />
        </div>
        <div className="form-group">
          <input 
          type="password" 
          name="password"
          className="form-control form-control-user" 
          id="exampleInputPassword" 
          placeholder="Password"
          onChange={handleInputChange} 
        />
        </div>
        <button type="submit" className="btn btn-primary btn-user btn-block">
          Login
        </button>
      </form>

    )
                 
};

export default Login;