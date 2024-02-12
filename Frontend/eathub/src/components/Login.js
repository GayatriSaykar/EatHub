
import React, { useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";



const init = {
  username: { value: '', valid: false, touched: false, error: 'Username is required' },
  password: { value: '', valid: false, touched: false, error: 'Password is required' },
  formValid: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'update':
      const { key, value, touched, valid, error, formValid } = action.data;
      return { ...state, [key]: { value, touched, valid, error }, formValid };
    case 'reset':
      return init;
    default:
      return state;
  }
};



const Login = () => {
  const [login, dispatch] = useReducer(reducer, init);
  let navigate = useNavigate();
  const[insertMsg, setInsertMsg] = useState("")

  const validateData = (key, val) => {
    let valid = true;
    let error = '';

    switch (key) {
      case 'username':
        valid = val !== null && /^[a-zA-Z0-9_]+$/.test(val.trim());
        error = 'Username must be required and contain only letters, digits, and underscores';
        break;
      case 'password':
        valid = val.length >= 8 && val.length <= 15 && /[\W_]/.test(val);
        error = 'Password must be between 8 and 15 characters and contain at least one special character';
        break;
      default:
        break;
    }

    return { valid, error };
  };

  const handleChange = (key, value) => {
    const { valid, error } = validateData(key, value);

    let formValid = true;
    for (let k in login) {
      if (login[k].valid === false || login[k].touched === false) {
        formValid = false;
        break;
      }
    }

    dispatch({ type: 'update', data: { key, value, touched: true, valid, error, formValid } });
  };

  

  const submitData = (e) => {
    e.preventDefault();

    // Add your server-side API call or form submission logic here
    console.log(JSON.stringify(login));
    const reqOptions={
      method:"POST",
      headers:{'content-type':'application/json'},
      body:JSON.stringify({
          username:login.username,
          password:login.password
      })
  }

fetch("http://localhost:8080/checkLogin",reqOptions)
  .then(resp => resp.text())
.then(data => {
      if(data=="Login Successfully!!!"){
          dispatch(login());
          navigate('/custhome');
      }else{
          setInsertMsg(data);
      }
  })        


  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-3 shadow">
            <h1 className="text-center mb-4">Login</h1>
            <form>
              {/* Username */}
              <div className="mb-3">
                <label className="form-label">Username:</label>
                <input
                  type="text"
                  className={`form-control form-control-sm ${login.username.touched && !login.username.valid ? 'is-invalid' : ''}`}
                  value={login.username.value}
                  onChange={(e) => handleChange('username', e.target.value)}
                  onBlur={(e) => handleChange('username', e.target.value)}
                />
                {login.username.touched && !login.username.valid && (
                  <div className="invalid-feedback">{login.username.error}</div>
                )}
              </div>

              {/* Password */}
              <div className="mb-3">
                <label className="form-label">Password:</label>
                <div className="input-group">
                  <input
                    className={`form-control form-control-sm ${login.password.touched && !login.password.valid ? 'is-invalid' : ''}`}
                    value={login.password.value}
                    onChange={(e) => handleChange('password', e.target.value)}
                    onBlur={(e) => handleChange('password', e.target.value)}
                  />
                </div>
                {login.password.touched && !login.password.valid && (
                  <div className="invalid-feedback">{login.password.error}</div>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-sm"
                disabled={!login.formValid}
                onClick={submitData}
              >
                Login
              </button>

              <div className="mt-3">
                <p className="mb-0">
                  New Mess Vendor? <Link to="/mess-signup">Register here</Link>
                </p>
                <p className="mb-0">
                  New Customer? <Link to="/customer-signup">Register here</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
