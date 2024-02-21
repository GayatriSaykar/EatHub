// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom';
// import LogoutForm from './LogoutForm';

// const MessDetail = () => {
//   const [subscriptions, setSubscriptions] = useState([]);
//   const [selectedSubscription, setSelectedSubscription] = useState('');
//   const [amount, setAmount] = useState('');
//   const [messSubscriptions, setMessSubscriptions] = useState([]);

//   useEffect(() => {
//     // Fetch subscription data for dropdown
//     fetch('http://localhost:8080/plans')
//       .then(response => response.json())
//       .then(data => setSubscriptions(data))
//       .catch(error => console.error('Error fetching subscriptions:', error));
//   }, []);

//   useEffect(() => {
//     // Fetch mess subscriptions data
//     fetch('http://localhost:8080/mess-subscriptions')
//       .then(response => response.json())
//       .then(data => setMessSubscriptions(data))
//       .catch(error => console.error('Error fetching mess subscriptions:', error));
//   }, []);

//   const handleSave = () => {
//     // Save data to mess subscription table
//     fetch('your_backend_api/mess-subscriptions', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         subscriptionId: selectedSubscription,
//         amount: amount,
//       }),
//     })
//     .then(response => response.json())
//     .then(data => {
//       // Update mess subscriptions data after saving
//       setMessSubscriptions([...messSubscriptions, data]);
//     })
//     .catch(error => console.error('Error saving mess subscription:', error));
//   };

//   return (
//     <div>
//       {/* Navigation Bar */}
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container">
//         <a className="navbar-brand" href="#">MESS </a>
//           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <Link className="nav-link" to="#add-plan">Add Plan</Link>
//               </li>
//              <li className="nav-item">
//                   <LogoutForm/>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <div className="container mt-3">
//         {/* Bootstrap Grid System for Layout */}
        
//         <div className="row">
//           <div className="col-md-4 mb-3">
//             {/* Dropdown to select subscription */}
//             <select className="form-select" value={selectedSubscription} onChange={(e) => setSelectedSubscription(e.target.value)}>
//               <option value="">Select Subscription</option>
//               {subscriptions.map(subscription => (
//                 <option key={subscription.id} value={subscription.id}>
//                   {${subscription.subscription_name} - ${subscription.period} months}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="col-md-4 mb-3">
//             {/* Textfield for amount */}
//             <input type="text" className="form-control" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount" />
//           </div>
//           <div className="col-md-1 mb-1">
//             {/* Save button */}
//             <button className="btn btn-primary" onClick={handleSave}>Save</button>
//           </div>
//         </div>

//         {/* Display mess subscriptions */}
//         <div>
//           <h3>Mess Subscriptions</h3>
//           <ul>
//             {messSubscriptions.map(subscription => (
//               <li key={subscription.id}>
//                 {Subscription: ${subscription.subscription.name}, Amount: ${subscription.amount}}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MessDetail;


import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MessDetail (props) {
  
  const [selectedItem, setSelectedItem] = useState('');
  const [amount, setAmount] = useState('');
  const [tableData, setTableData] = useState([]);




  const handleItemChange = (event) => {
    setSelectedItem(event.target.value);
  }

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedItem && amount) {
      const newItem = {
        item: selectedItem,
        amount: amount
      };
      setTableData([...tableData, newItem]);
      setSelectedItem(null);
      setAmount('');
    }
 }

  return (
    <div>
        <h1>{props.mess_id}</h1>
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-4">
            <select className="form-select mb-3" value={selectedItem} onChange={handleItemChange}>
              <option value="">Select Item</option>
              <option value="Item 1">Item 1</option>
              <option value="Item 2">Item 2</option>
              <option value="Item 3">Item 3</option>
            </select>
          </div>
          <div className="col-md-4">
            <input type="number" className="form-control mb-3" placeholder="Enter Amount" value={amount} onChange={handleAmountChange} />
          </div>
          <div className="col-md-4">
            <button className="btn btn-primary mb-3" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
      <div className="container">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Item</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index}>
                <td>{item.item}</td>
                <td>{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> 
      hi
    </div>
  );
}


