import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustHome = () => {
  const [messList, setMessList] = useState([]);
  const [filteredMessList, setFilteredMessList] = useState([]);

  useEffect(() => {
    // Fetch mess data from your API endpoint
    fetch('http://localhost:8080/getallmess')
      .then((response) => response.json())
      .then((data) => setMessList(data))
      .catch((error) => console.error('Error fetching mess data:', error));
  }, []);


  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    const filteredMessList = messList.filter((mess) =>
      mess.name && mess.name.toLowerCase().includes(term)
    );
    setFilteredMessList(filteredMessList);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Mess Search</h1>
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search mess..."
          onChange={handleSearch}
        />
      </div>

      <div className="row">
        {messList.map((mess, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <img className="card-img-top" src={mess.image} alt={mess.name} />
              <div className="card-body">
                <h5 className="card-title">{mess.mess_name}</h5>
                <p className="card-text">{mess.mess_address}</p>
                <p className="card-text">{mess.area}</p>
                <a
                  href={mess.link}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Mess
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustHome;




// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import LogoutForm from './LogoutForm';
// import { Link } from 'react-router-dom';

// const CustHome = () => {
//   const [cityList, setCityList] = useState([]);
//   const [selectedCity, setSelectedCity] = useState('');
//   const [messList, setMessList] = useState([]);
//   const [filteredMessList, setFilteredMessList] = useState([]);

//   useEffect(() => {
//     // Fetch city data from your API endpoint
//     fetch('http://localhost:8080/byCity/{city}')
//       .then((response) => response.json())
//       .then((data) => setCityList(data))
//       .catch((error) => console.error('Error fetching city data:', error));

//     // Fetch mess data from your API endpoint
//     fetch('http://localhost:8080/getallmess')
//       .then((response) => response.json())
//       .then((data) => setMessList(data))
//       .catch((error) => console.error('Error fetching mess data:', error));
//   }, []);

//   const handleCityChange = (e) => {
//     setSelectedCity(e.target.value);
//   };

//   const handleSearch = () => {
//     // Filter messes based on the selected city
//     const filteredMessList = messList.filter(
//       (mess) => mess.city.toLowerCase() === selectedCity.toLowerCase()
//     );
//     setFilteredMessList(filteredMessList);
//   };

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container">
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-toggle="collapse"
//             data-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav me-auto">
//               <li className="nav-item">
//                 <Link to="#search" className="nav-link">
//                   SEARCH MESS
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/plan" className="nav-link">
//                   PLAN
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/payment" className="nav-link">
//                   PAYMENT
//                 </Link>
//               </li>
//             </ul>

//             {/* Login Link */}
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <Link to="/login" className="nav-link">
//                   <LogoutForm />
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       <div className="container mt-5">
//         <h1 className="text-center">Mess Search</h1>

//         <div className="mb-4">
//           <label htmlFor="citySelect" className="form-label">
//             Select City
//           </label>
//           <select
//             id="citySelect"
//             className="form-select"
//             onChange={handleCityChange}
//           >
//             <option value="">-- Select City --</option>
//             {cityList.map((city, index) => (
//               <option key={index} value={city}>
//                 {city}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="mb-4">
//           <button
//             type="button"
//             className="btn btn-primary"
//             onClick={handleSearch}
//           >
//             Search Mess
//           </button>
//         </div>

//         <div className="row">
//           {filteredMessList.map((mess, index) => (
//             <div key={index} className="col-md-4 mb-4">
//               <div className="card">
//                 {/* Adjust the properties based on your actual mess data structure */}
//                 <img className="card-img-top" src={mess.image} alt={mess.name} />
//                 <div className="card-body">
//                   <h5 className="card-title">{mess.name}</h5>
//                   <p className="card-text">{mess.description}</p>
//                   <a
//                     href={mess.link}
//                     className="btn btn-primary"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Visit Mess
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustHome;





// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import messA from '../images/Cust1.jpeg';
// import messB from '../images/cust2.jpeg';
// import messC from '../images/Cust1.jpeg';



// const CustHome = () => {
//   const initialMessList = [
//     {
//       name: 'Mess A',
//       image: messA,
//       description: 'Description of Mess A.',
//       link: 'https://example.com/messA',
//     },
//     {
//         name: 'Mess B',
//         image: messB,
//         description: 'Description of Mess B.',
//         link: 'https://example.com/messB',
//       },
//       {
//         name: 'Mess C',
//         image: messC,
//         description: 'Description of Mess C.',
//         link: 'https://example.com/messC',
//       }
//   ];

//   const [filteredMessList, setFilteredMessList] = useState(initialMessList);

//   const handleSearch = (e) => {
//     const term = e.target.value.toLowerCase();
//     const filteredMessList = initialMessList.filter((mess) =>
//       mess.name.toLowerCase().includes(term)
//     );
//     setFilteredMessList(filteredMessList);
//   };
   
//   return (

      
//     <div className="container mt-5">
//       <h1 className="text-center">Mess Search</h1>
//       <div className="mb-4">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Search mess..."
//           onChange={handleSearch}
//         />
//       </div>

//       <div className="row">
//         {filteredMessList.map((mess, index) => (
//           <div key={index} className="col-md-4 mb-4">
//             <div className="card">
//               <img className="card-img-top" src={mess.image} alt={mess.name} />
//               <div className="card-body">
//                 <h5 className="card-title">{mess.name}</h5>
//                 <p className="card-text">{mess.description}</p>
//                 <a href={mess.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
//                   Visit Mess
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
   
//   );
// };

// export default CustHome;
