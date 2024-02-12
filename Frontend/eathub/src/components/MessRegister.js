import { useState,useReducer } from "react";
import Image from "../images/image2.jpg";
import { useNavigate } from 'react-router-dom';

const init = {
    mess_name: { value: '', valid: false, touched: false, error: '' },
    owner_name: { value: '', valid: false, touched: false, error: '' },
    email: { value: '', valid: false, touched: false, error: '' },
    contactno: { value: '', valid: false, touched: false, error: '' },
    city: { value: '', valid: false, touched: false, error: '' },
    mess_address:{value: '', valid: false, touched: false, error: ''},
    username:{value:'',valid:false,touched:false,error:''},
    password:{value:'',valid:false,touched:false,error:''},
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

export default function MessRegister()
{
    let navigate=useNavigate();
    const [mess, dispatch] = useReducer(reducer, init);
    const [msg,setMsg]=useState("");
    const [insertmsg,setInsertmsg]=useState("");
    const [gender, setGender] = useState("");

    const validateData = (key, val) => {
        let valid = true;
        let error = '';
    
        switch (key) {
          case 'mess_name':
            const mess_namePattern=/^[a-zA-Z]+ [a-zA-Z]+$/;
            valid = mess_namePattern.test(val);
            error = 'Please enter valid';
            break;
         
            case 'owner_name':
              const owner_namePattern=/^[a-zA-Z]+ [a-zA-Z]+$/;
              valid = owner_namePattern.test(val);
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
         
            case 'city':
              const cityPattern=/^[a-zA-Z]$/;
              valid = cityPattern.test(val);
              error = 'Please enter valid';
              break;

            case 'mess_address':
              const mess_addPattern = /^[0-9A-Za-z\s.,'-]+$/;
              valid = mess_addPattern.test(val);
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
        for (let k in mess) {
          if (mess[k].valid === false || mess[k].touched === false) {
            formValid = false;
            break;
          }
        }
    
        dispatch({ type: 'update', data: { key, value, touched: true, valid, error, formValid } });
      };


    
      const submitData = (e) => {
        //alert("ok");
        e.preventDefault();
        console.log(JSON.stringify(mess));
        const reqOptions = {
            method:"POST",
            headers: {'content-type':'application/json'},
            body: JSON.stringify({
                mess_name: mess.mess_name.value,
                owner_name: mess.owner_name.value,
                email: mess.email.value,
                contactno: mess.contactno.value,
                city: mess.city.value,
                mess_address: mess.mess_address.value,
                username: mess.username.value,
                password: mess.password.value
            })
        }
        fetch("http://localhost:8080/messregister", reqOptions)
        .then(resp => resp.text())
        .then(data => {
          if(data=="success")
          {
            navigate("/");
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
            <input type="text" className={`form-control opacity-50 form-control-sm ${mess.mess_name.touched && !mess.mess_name.valid ? 'is-invalid' : ''}`} 
             placeholder="Enter Name" 
            value={mess.mess_name.value}
            onChange={(e) => handleChange('mess_name',e.target.value)}
            onBlur={(e) => handleChange('mess_name', e.target.value)} />
             {
            mess.mess_name.touched && !mess.mess_name.valid && (
            <div className="invalid-feedback">{mess.mess_name.error}</div>
          )}
            </div>
            <div className="mb-3">
            <label className="form-label" style={{float:'left'}} >Owner</label>
            <input type="text" className={`form-control opacity-50 form-control-sm ${mess.owner_name.touched && !mess.owner_name.valid ? 'is-invalid' : ''}`} 
             placeholder="Enter Name" 
            value={mess.owner_name.value}
            onChange={(e) => handleChange('owner_name',e.target.value)}
            onBlur={(e) => handleChange('owner_name', e.target.value)} />
             {
            mess.owner_name.touched && !mess.owner_name.valid && (
            <div className="invalid-feedback">{mess.owner_name.error}</div>
          )}
            </div>
            <div className="mb3">
            <label className="form-label"  style={{float:'left'}}>Email</label>
            <input type="email" className={`form-control opacity-50 form-control-sm ${mess.email.touched && !mess.contactno.valid? 'is-valid' : ''}`}
             placeholder="Enter Email"
            value={mess.email.value} 
            onChange={(e) => handleChange('email',e.target.value)}
            onBlur={(e) => handleChange('email', e.target.value)}/>
             {
            mess.email.touched && !mess.email.valid && (
            <div className="invalid-feedback">{mess.email.error}</div>
          )}
         
          
            <div className="mb-3">
            <label className="form-label"  style={{float:'left'}} >Contact No</label>
            <input type="number" className={`form-control opacity-50 form-control-sm ${mess.contactno.touched && !mess.contactno.valid? 'is-valid' : ''}`}
             placeholder="Enter Contact"
            value={mess.contactno.value} 
            onChange={(e) => handleChange('contactno',e.target.value)}
            onBlur={(e) => handleChange('contactno', e.target.value)}/>
             {
            mess.contactno.touched && !mess.contactno.valid && (
            <div className="invalid-feedback">{mess.contactno.error}</div>
          )}
            </div>
            
            </div>
            <div className="mb-3">
            <label className="form-label"  style={{float:'left'}}>City</label>
            <input type="text" className={`form-control opacity-50 form-control-sm ${mess.city.touched && !mess.city.valid? 'is-valid' : ''}`}
            placeholder="Enter City"
            value={mess.city.value}
            onChange={(e) => handleChange('city',e.target.value)}
            onBlur={(e) => handleChange('city', e.target.value)} />
             {
            mess.city.touched && !mess.city.valid && (
            <div className="invalid-feedback">{mess.city.error}</div>
          )}
            </div>
            <div className="mb-3">
            <label className="form-label"  style={{float:'left'}}>Address</label>
            <input type="text" className={`form-control opacity-50 form-control-sm ${mess.mess_address.touched && !mess.mess_address.valid? 'is-valid' : ''}`}
            placeholder="Enter Address"
            value={mess.mess_address.value}
            onChange={(e) => handleChange('mess_address',e.target.value)}
            onBlur={(e) => handleChange('mess_address', e.target.value)} />
             {
            mess.mess_address.touched && !mess.mess_address.valid && (
            <div className="invalid-feedback">{mess.mess_address.error}</div>
          )}
            </div>
            <div className="mb-3">
            <label className="form-label"  style={{float:'left'}} >Username</label>
            <input type="text" className={`form-control opacity-50 form-control-sm ${mess.username.touched && !mess.username.valid ? 'is-invalid' : ''}`} 
             placeholder="Enter Username"
            value={mess.username.value}
            onChange={(e) => handleChange('mess',e.target.value)}
            onBlur={(e) => handleChange('mess', e.target.value)} />
             {
            mess.username.touched && !mess.username.valid && (
            <div className="invalid-feedback">{mess.username.error}</div>
          )}
            </div>
            <div className="mb-3">
            <label className="form-label"  style={{float:'left'}} >Password</label>
            <input type="text" className={`form-control opacity-50 form-control-sm ${mess.password.touched && !mess.password.valid ? 'is-invalid' : ''}`} 
             placeholder="Enter Password"
            value={mess.password.value}
            onChange={(e) => handleChange('password',e.target.value)}
            onBlur={(e) => handleChange('password', e.target.value)} />
             {
            mess.password.touched && !mess.password.valid && (
            <div className="invalid-feedback">{mess.password.error}</div>
          )}
            </div>
            
            <br />
            <div className="d-grid">
            <button type="submit" className="btn btn-success" disabled={!mess.formValid} onClick={submitData}>Save</button>
            </div>
            </form>
        </div>
        </div>
        </div>
    )
}