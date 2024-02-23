import { useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function CustRegister() {

  
const init = {
  cust_name: {
    value: '',
    valid: false,
    touched: false,
    error: '',
  },
  email: {
    value: '',
    valid: false,
    touched: false,
    error: '',
  },
  contactno: {
    value: '',
    valid: false,
    touched: false,
    error: '',
  },
  gender: {
    value: '',
    valid: false,
    touched: false,
    error: '',
  },
  cust_address: {
    value: '',
    valid: false,
    touched: false,
    error: '',
  },
  username: {
    value: '',
    valid: false,
    touched: false,
    error: '',
  },
  password: {
    value: '',
    valid: false,
    touched: false,
    error: '',
  },
  formValid: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "update":
      const { key, value, touched, valid, error, formValid } = action.data;
      return { ...state, [key]: { value, touched, valid, error }, formValid };
    case "updateGender":
      return { ...state, gender: { value: action.payload, touched: true, valid: !!action.payload, error: '' }, formValid: !!action.payload && state.formValid };
      
    default:
        return state;
     
  }
};


  let navigate = useNavigate();
  const [customer, dispatch] = useReducer(reducer, init);
  const [gender, setGender] = useState("");

  const validateData = (key, val) => {
    let valid = true;
    let error = "";

    switch (key) {
      case "cust_name":
        const cust_namePattern = /^[a-zA-Z]+ [a-zA-Z]+$/;
        if(!cust_namePattern.test(val))
        {
           valid = false;
           error = "Customer name should be firstname and lastname"
        }
        break;
      case "email":
        const emailPattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        if(!emailPattern.test(val))
        {
           valid = false;
           error = "Email should contain special character and dot(.)"
        }
        break;
      case "contactno":
        const contactnoPattern = /^\d{10}$/;
        if(!contactnoPattern.test(val))
        {
           valid = false;
           error = "Contact should contain 10 digits only"
        }
        break;

      case "cust_address":
        const cust_addPattern = /^[0-9A-Za-z\s.,'-]+$/;
        if(!cust_addPattern.test(val))
        {
           valid = false;
           error = "Address should be required"
        }
        break;
      case "username":
        const usernamepattern = /^[0-9A-Za-z]{6,16}$/;
        if(!usernamepattern.test(val))
        {
           valid = false;
           error = "Username contains letters and digits and at least 6 char"
        }
        break;
      case "password":
        const passwordpattern =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
          if(!passwordpattern.test(val))
          {
             valid = false;
             error = "Password should contain min 5 char,uppercase,lowercase,digit"
          }
        break;
      default:
    }
    return { valid:valid, error:error };
  };
  const handleChange = (key, value) => {

    if (key === "gender") {
      dispatch({ type: "updateGender", payload: value });
    } else {
      const { valid, error } = validateData(key, value);
  
      dispatch({
        type: "update",
        data: { key, value, touched: true, valid, error },
      });
    }
  };

  const isFormValid = () => {
    for (let key in customer) {
      if (key !== "formValid" && !customer[key].valid) {
        return false;
      }
    }
    return true;
  };
    
  const submitData = (e) => {
    //alert("ok");
    e.preventDefault();
    console.log(JSON.stringify(customer));
    const reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        cust_name: customer.cust_name.value,
        email: customer.email.value,
        contactno: customer.contactno.value,
        gender: gender,
        cust_address: customer.cust_address.value,
        username: customer.username.value,
        password: customer.password.value,
      }),
    };
    console.log("Request Payload:", reqOptions.body);
    fetch("http://localhost:8080/custregister", reqOptions)
      .then((response) => {
        if (response.ok) {
          // Successful registration
          //alert("Customer registered successfully!");
          dispatch({ type: "reset" }); // Reset the form after successful registration

          // Navigate to the login page
          navigate("/login");
        } else {
          // Registration failed
          response.text().then((errorcustomerage) => {
            console.error("Registration failed. Error:", errorcustomerage);
            //alert("Registration failed. Please try again.");
          });
        }
      })
      .catch((error) => {
        console.error("Error during registration:", error);
        navigate("/custregister");
        //alert("An error occurred during registration. Please try again.");
      });
  };

  return (
    <div
      className="container mt-5 "
      style={{
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${Image})`,
        backgroundSize: "contain",
        height: "100%",
        width: "100%",
      }}
    >
      <div className="row justify-content-center ">
        <div className="col-md-4 shadow-lg p-3 mb-5 bg-white rounded">
          <form>
            <h2 style={{ textAlign: "center" }}>Registration</h2>
            <br />
            <div className="mb-3">
            <input type='text' className="form-control opacity-80" placeholder='Name' id="cust_name" autoComplete="off" name="cust_name" 
                    value={customer.cust_name.value}
                    onChange={(e)=>{handleChange("cust_name",e.target.value)}} 
                    onBlur={(e)=>{handleChange("cust_name",e.target.value)}}
                    />

                    <br/>

                    <div style={{ display: customer.cust_name.touched && !customer.cust_name.valid  ?"block":"none",color: 'red' }}>
                    { customer.cust_name.error}
                    </div>
            </div>
            <div className="mb3">
            <input type='text' className="form-control opacity-80" placeholder='Email' id="email" autoComplete="off" name="email" 
                    value={customer.email.value}
                    onChange={(e)=>{handleChange("email",e.target.value)}} 
                    onBlur={(e)=>{handleChange("email",e.target.value)}}
                    />

                    <br/>

                    <div style={{ display: customer.email.touched && !customer.email.valid  ?"block":"none",color: 'red' }}>
                    { customer.email.error}
                    </div>
              </div>

              <div className="mb-3">
              <input type='text' className="form-control opacity-80" placeholder='Contact' id="contactno" autoComplete="off" name="contactno" 
                    value={customer.contactno.value}
                    onChange={(e)=>{handleChange("contactno",e.target.value)}} 
                    onBlur={(e)=>{handleChange("contactno",e.target.value)}}
                    />

                    <br/>

                    <div style={{ display: customer.contactno.touched && !customer.contactno.valid  ?"block":"none",color: 'red' }}>
                    { customer.contactno.error}
                    </div>
              </div>
              <div className="mb-3">
             
           <label>
    Gender
    <select
      value={gender}
      onChange={(e) => {
        setGender(e.target.value);
        handleChange("gender", e.target.value);
      }}
    >
      <option value="" disabled>Select One</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>
  </label>

  <div style={{ display: customer.gender.touched && !customer.gender.valid ? "block" : "none", color: 'red' }}>
    {customer.gender.error}
  </div>
              </div>
            
            <div className="mb-3">
            <input type='text' className="form-control opacity-80" placeholder='Address' id="cust_address" autoComplete="off" name="cust_address" 
                    value={customer.cust_address.value}
                    onChange={(e)=>{handleChange("cust_address",e.target.value)}} 
                    onBlur={(e)=>{handleChange("cust_address",e.target.value)}}
                    />

                    <br/>

                    <div style={{ display: customer.cust_address.touched && !customer.cust_address.valid  ?"block":"none",color: 'red' }}>
                    { customer.cust_address.error}
                    </div>
            </div>
            <div className="mb-3">
            <input type='text' className="form-control opacity-80" placeholder='Username' id="username" autoComplete="off" name="username" 
                    value={customer.username.value}
                    onChange={(e)=>{handleChange("username",e.target.value)}} 
                    onBlur={(e)=>{handleChange("username",e.target.value)}}
                    />

                    <br/>

                    <div style={{ display: customer.username.touched && !customer.username.valid  ?"block":"none",color: 'red' }}>
                    { customer.username.error}
                    </div>
            </div>
            <div className="mb-3">
            <input type='password' className="form-control opacity-80" placeholder='Password' id="password" autoComplete="off" name="password" 
                    value={customer.password.value}
                    onChange={(e)=>{handleChange("password",e.target.value)}} 
                    onBlur={(e)=>{handleChange("password",e.target.value)}}
                    />

                    <br/>

                    <div style={{ display: customer.password.touched && !customer.password.valid  ?"block":"none",color: 'red' }}>
                    { customer.password.error}
                    </div>
            </div>
            <br />
            <div className="d-grid">
              <button
               type="submit"
               className="btn btn-success"
               disabled={!isFormValid()}
               onClick={(e) => submitData(e)}
             >
            
                Save
              </button>
            </div>
            <div className="mt-3">
                <p className="mb-0">
                  Already Registered? <Link to="/login"  className="link-success">Login</Link>
                </p>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
}

