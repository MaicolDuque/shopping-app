import React, { useState } from 'react';

const Register = ({ handleSumbit }) => {
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
      <div className="form-group row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <input
            type="text"
            className="form-control form-control-user"
            id="firstName"
            placeholder="First Name"
            name="name"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-sm-6">
          <input
            type="text"
            className="form-control form-control-user"
            id="lastName"
            placeholder="Last Name"
            name="lastName"
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <div className="form-group">
        <input
          type="email"
          className="form-control form-control-user"
          id="email"
          placeholder="Email Address"
          name="email"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <input
            type="password"
            className="form-control form-control-user"
            id="password"
            placeholder="Password"
            name="password"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-sm-6">
          <input
            type="password"
            className="form-control form-control-user"
            id="confirmPassword"
            placeholder="Repeat Password"
            name="confirmPassword"
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary btn-user btn-block">
        Register Account
      </button>
    </form>
  );
}

export default Register;