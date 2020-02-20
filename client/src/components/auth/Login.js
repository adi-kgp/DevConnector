import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { login } from "../../actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Login = ({ login, isAuthentic }) => {
  const [formData, setformData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const handleChange = e =>
    setformData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  // redirect if logged in
  if (isAuthentic) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <>
      <h1 className='large text-primary'>Sign In</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Sign Into Your Account
      </p>
      <form className='form' onSubmit={e => handleSubmit(e)}>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            required
            value={email}
            onChange={e => handleChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            minLength='6'
            value={password}
            onChange={e => handleChange(e)}
          />
        </div>

        <input type='submit' className='btn btn-primary' value='Login' />
      </form>
      <p className='my-1'>
        Don't have an account? <Link to='/register'>Sign Up</Link>
      </p>
    </>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthentic: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthentic: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
