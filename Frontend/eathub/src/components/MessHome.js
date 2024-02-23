
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import LogoutForm from './LogoutForm';
import { useNavigate } from 'react-router-dom';


const MessHome = () => {
  const navigate = useNavigate();
  const [subscriptions, setSubscriptions] = useState([]);
  const[mess,setMess] = useState({});
  const [selectedSubscription, setSelectedSubscription] = useState(0);
  const [amount, setAmount] = useState(0);
  const [messSubscriptions, setMessSubscriptions] = useState([]);
  const[om,setOm] = useState([]);
  const localdata = JSON.parse(localStorage.getItem("loggedinfo"));
  useEffect(() => {
    // Fetch subscription data for dropdown
    fetch3();
    fetch2();
  }, []);

  const fetch2 =()=>{
    fetch('http://localhost:8080/SubTablePlans')
      .then(response => response.json())
      .then(data => setSubscriptions(data)
      )
      .catch(error => console.error('Error fetching subscriptions:', error));
  }
  const fetch3 = ()=>{
   // alert(localdata.login_id);
    fetch('http://localhost:8080/getOnemess?uid='+localdata.login_id)
    .then(response => response.json())
    .then(data => {setMess(data); })
    .catch(error => console.error('Error fetching subscriptions:', error));
  }
  const ShowMesses = (e)=>{
    e.preventDefault();
    console.log("Mess Id: "+mess.mess_id+" subId: "+selectedSubscription)
    fetch('http://localhost:8080/getPerticularMessSubscription?messid='+mess.mess_id+"&subId="+selectedSubscription)
      .then(response => response.json())
      .then(data => {setOm(data);console.log(JSON.stringify(data)); })
      .catch(error => console.error('Error fetching mess subscriptions:', error));
}
console.log(selectedSubscription)
console.log(mess.mess_id)
  const handleSave = (e) => {
    e.preventDefault();
    console.log("in subscription&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&7")
    const reqOptions = {
        method:"POST",
        headers: {'content-type':'application/json'},
        body: JSON.stringify({
          mess_id : mess.mess_id,
          subscription_id:selectedSubscription,
          subscription_name:selectedSubscription,
          rate: amount
        })
    }

    fetch("http://localhost:8080/saveMessSubscription", reqOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Mess subscription saved:', data);
        setOm(prevOm => [...prevOm, data]);
      })
      .catch(error => console.error('Error saving mess subscription:', error));
  };

  const handleMenu = (e) => {
    navigate("/addmenu");
  };

  return (
    <div>
      {/* Navigation Bar */}
      {/* <div>{JSON.stringify(messSubscriptions)}</div>
      <div>{JSON.stringify(mess)}</div> 
     <div>{JSON.stringify(selectedSubscription)}</div> 
       <div>{JSON.stringify(om)}</div>  */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
        <a className="navbar-brand" href="#">MESS </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="#add-plan">Add Plan</Link>
              </li>
             <li className="nav-item">
                  <LogoutForm/>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mt-3">
        {/* Bootstrap Grid System for Layout */}
        
        <div className="row">
          <div className="col-md-4 mb-3">
            {/* Dropdown to select subscription */}
            <select className="form-select" onChange={(e) => setSelectedSubscription(e.target.value)}>
              <option value="">Select Subscription</option>
              {subscriptions.map(subscription => (
                <option value={subscription.subscription_id}>
                  {`${subscription.subscription_name} - ${subscription.period} months`}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-4 mb-3">
            {/* Textfield for amount */}
            <input type="text" className="form-control" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount" />
          </div>
          <div className="col-md-1 mb-1">
            {/* Save button */}
            <button className="btn btn-primary" onClick={(e)=>handleSave(e)}>Save</button>
          </div> 
          <div className="col-md-1 mb-1">
             <button className="btn btn-secondary" onClick={(e)=>ShowMesses(e)}>Show </button>
          </div>
         
        </div>
        {/* {JSON.stringify(om)} */}
        <table className='table table-bordered'>
          <tr>
            <td>Mess Id</td>
            <td>Sub Id</td>
            <td>Sub Name</td>
            <td>Period</td>
            <td>Rate</td>
            <td>Add Menu</td>
          </tr>
          {om.map(o=>{
            return <tr>
              <td>{o.messtable.mess_id}</td>
              <td>{o.subid.subscription_id}</td>
              <td>{o.subid.subscription_name}</td>
              <td>{o.subid.period}</td>
              <td>{o.rate}</td>
              <td>
            {/* Save button */}
            <button className="btn btn-info"  onClick={(e)=>handleMenu(e)}>Add Menu</button></td>
            </tr>
          })}
        </table>

{/* <div>
  <h3>Mess Subscriptions</h3>
  <ul>
  {messSubscriptions.map(subscription => (
    <li>
      {`Mess Subscription ID: ${subscription.mess_subscription_id}, Subscription ID: ${subscription.subid!=null?subscription.subid.subscription_id:0}, Month:${subscription.subid!=null?subscription.subid.subscription_name:0} , Period:${subscription.subid!=null?subscription.subid.period:0} , Rate: ${subscription.rate}`}
    </li>
  ))}
</ul>

 
</div> */}






      </div>
    </div>
  );
};

export default MessHome;

