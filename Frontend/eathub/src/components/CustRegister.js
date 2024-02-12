import { useState,useReducer } from "react";
import Image from "../images/image2.jpg";
import { useNavigate } from 'react-router-dom';

const init = {
    cust_name: { value: '', valid: false, touched: false, error: 'Name is required' },
    email: { value: '', valid: false, touched: false, error: 'Email is required' },
    contactno: { value: '', valid: false, touched: false, error: 'Contact is required' },
    gender:{value:'',valid:false,touched:false,error:'Gender is required'},
    cust_address:{value: '', valid: false, touched: false, error: 'Address is required'},
    username:{value:'',valid:false,touched:false,error:'Username is required'},
    password:{value:'',valid:false,touched:false,error:'Password is required'},
    formValid: false,
  };

  

const reducer=(state,action)=>{
    switch(action.type)
    {
    case 'update':
        const { key, value, touched, valid, error, formValid } = action.data;
        return { ...state, [key]: { value, touched, valid, error }, formValid };
    default:
        return state;
    }
}

export default function CustRegister()
{
    let navigate=useNavigate();
    const [customer, dispatch] = useReducer(reducer, init);
    const [msg,setMsg]=useState("");
    const [insertmsg,setInsertmsg]=useState("");
    const [gender, setGender] = useState("");

    const validateData = (key, val) => {
        let valid = true;
        let error = '';
    
        switch (key) {
          case 'cust_name':
            const cust_namePattern=/^[a-zA-Z]+ [a-zA-Z]+$/;
            valid = cust_namePattern.test(val);
            error = 'Please enter valid';
            break;
         
            case 'email':
              const emailPattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
              valid = emailPattern.test(val);
              error = 'Invalid email address';
              break;
          case 'contactno':
            const contactnoPattern=/^\d{10}$/;
            valid = contactnoPattern.test(val);
            error = 'Please enter valid contactno';
            break;
         
            case 'cust_address':
              const cust_addPattern = /^[0-9A-Za-z\s.,'-]+$/;
              valid = cust_addPattern.test(val);
              error = 'Please enter valid';
              break;
          case 'username':
            const usernamepattern= /^[0-9A-Za-z]{6,16}$/;
            valid=usernamepattern.test(val);
            error= "Please valid username";
            break;
          case 'password':
            const passwordpattern =/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,15}$/ ;
            valid=passwordpattern.test(val);
            error="Please enter valid password";
          default:
            break;
        }
    
        return { valid, error };
      };
    
      const handleChange = (key, value) => {
        const { valid, error } = validateData(key, value);
    
        let formValid = true;
        for (let k in customer) {
          if (customer[k].valid === false || customer[k].touched === false) {
            formValid = false;
            break;
          }
        }
    
        dispatch({ type: 'update', data: { key, value, touched: true, valid, error, formValid } });
      };

      
  const onOptionChange = e => {
    setGender(e.target.value)
  }
    
      const submitData = (e) => {
        //alert("ok");
        e.preventDefault();
        console.log(JSON.stringify(customer));
        const reqOptions = {
            method:"POST",
            headers: {'content-type':'application/json'},
            body: JSON.stringify({
                cust_name: customer.cust_name.value,
                email: customer.email.value,
                contactno: customer.contactno.value,
                gender:customer.gender.value,
                cust_address: customer.cust_address.value,
                username: customer.username.value,
                password: customer.password.value
            })
        }
        fetch("http://localhost:8080/custregister", reqOptions)
        .then(resp => resp.text())
        .then(data => {
          if(data=="success")
          {
            navigate("/custhome");
          }
          else{
            setInsertmsg(data)
          }
        }
         )
      }

    return(
        <div className="container mt-5 " style={{backgroundRepeat:"no-repeat" , backgroundImage: `url(${Image})` ,backgroundSize:"contain", height:"100%",width:"100%" }}>
        <div className="row justify-content-center " >
            <div className="col-md-4 shadow-lg p-3 mb-5 bg-white rounded">
            <form>
            <h2 style={{textAlign:"center"}}>Registration</h2>
            <br />
            <div className="mb-3">
            <label className="form-label" style={{float:'left'}} >Name</label>
            <input type="text" className={`form-control opacity-50 form-control-sm ${customer.cust_name.touched && !customer.cust_name.valid ? 'is-invalid' : ''}`} 
             placeholder="Enter Name" 
            value={customer.cust_name.value}
            onChange={(e) => handleChange('cust_name',e.target.value)}
            onBlur={(e) => handleChange('cust_name', e.target.value)} />
             {
            customer.cust_name.touched && !customer.cust_name.valid && (
            <div className="invalid-feedback">{customer.cust_name.error}</div>
          )}
            </div>
            <div className="mb3">
            <label className="form-label"  style={{float:'left'}}>Email</label>
            <input type="email" className={`form-control opacity-50 form-control-sm ${customer.email.touched && !customer.contactno.valid? 'is-valid' : ''}`}
             placeholder="Enter Email"
            value={customer.email.value} 
            onChange={(e) => handleChange('email',e.target.value)}
            onBlur={(e) => handleChange('email', e.target.value)}/>
             {
            customer.email.touched && !customer.email.valid && (
            <div className="invalid-feedback">{customer.email.error}</div>
          )}
         
          
            <div className="mb-3">
            <label className="form-label"  style={{float:'left'}} >Contact No</label>
            <input type="number" className={`form-control opacity-50 form-control-sm ${customer.contactno.touched && !customer.contactno.valid? 'is-valid' : ''}`}
             placeholder="Enter Contact"
            value={customer.contactno.value} 
            onChange={(e) => handleChange('contactno',e.target.value)}
            onBlur={(e) => handleChange('contactno', e.target.value)}/>
             {
            customer.contactno.touched && !customer.contactno.valid && (
            <div className="invalid-feedback">{customer.contactno.error}</div>
          )}
            </div>
            <div className="mb-3">
            <label className="form-label"  style={{float:'left'}} >Gender</label>
            <input
        type="radio"
        name="gender"
        value="Male"
        id="male"
        checked={gender === "Male"}
        onChange={onOptionChange}
        autoComplete="off"
      />Male &nbsp;&nbsp;
      <input
      type="radio"
      name="gender"
      value="Female"
      id="female"
      checked={gender === "Female"}
      onChange={onOptionChange}
    />Female  &nbsp;&nbsp;
      <input
        type="radio"
        name="gender"
        value="Other"
        id="other"
        checked={gender === "Other"}
        onChange={onOptionChange}
      />Other
           
            </div>
            </div>
            <div className="mb-3">
            <label className="form-label"  style={{float:'left'}}>Address</label>
            <input type="text" className={`form-control opacity-50 form-control-sm ${customer.cust_address.touched && !customer.cust_address.valid? 'is-valid' : ''}`}
            placeholder="Enter Address"
            value={customer.cust_address.value}
            onChange={(e) => handleChange('cust_address',e.target.value)}
            onBlur={(e) => handleChange('cust_address', e.target.value)} />
             {
            customer.cust_address.touched && !customer.cust_address.valid && (
            <div className="invalid-feedback">{customer.cust_address.error}</div>
          )}
            </div>
            <div className="mb-3">
            <label className="form-label"  style={{float:'left'}} >Username</label>
            <input type="text" className={`form-control opacity-50 form-control-sm ${customer.username.touched && !customer.username.valid ? 'is-invalid' : ''}`} 
             placeholder="Enter Username"
            value={customer.username.value}
            onChange={(e) => handleChange('username',e.target.value)}
            onBlur={(e) => handleChange('username', e.target.value)} />
             {
            customer.username.touched && !customer.username.valid && (
            <div className="invalid-feedback">{customer.username.error}</div>
          )}
            </div>
            <div className="mb-3">
            <label className="form-label"  style={{float:'left'}} >Password</label>
            <input type="text" className={`form-control opacity-50 form-control-sm ${customer.password.touched && !customer.password.valid ? 'is-invalid' : ''}`} 
             placeholder="Enter Password"
            value={customer.password.value}
            onChange={(e) => handleChange('password',e.target.value)}
            onBlur={(e) => handleChange('password', e.target.value)} />
             {
            customer.password.touched && !customer.password.valid && (
            <div className="invalid-feedback">{customer.password.error}</div>
          )}
            </div>
            
            <br />
            <div className="d-grid">
            <button type="submit" className="btn btn-success" disabled={!customer.formValid} onClick={submitData}>Save</button>
            </div>
            </form>
        </div>
        </div>
        </div>
    )
}