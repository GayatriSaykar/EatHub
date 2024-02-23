import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../images/Cust1.jpeg';
import LogoutForm from './LogoutForm';
import { useNavigate } from 'react-router-dom';

const CustHome = () => {
  const [messList, setMessList] = useState([]);
  const [filteredMessList, setFilteredMessList] = useState([]);
  //const [areaList, setAreaList] = useState([]);
  const [selectedArea, setSelectedArea] = useState('');
  const [obj,setObj]=useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    const storedInfo = localStorage.getItem("loggedinfo");
    const parsedInfo = storedInfo ? JSON.parse(storedInfo) : null;
    setObj(parsedInfo);

    // Fetch mess data from your API endpoint
    fetch('http://localhost:8080/getallmess')
      .then((response) => response.json())
      .then((data) => setMessList(data))
      .catch((error) => console.error('Error fetching mess data:', error));
  }, []);

   
    

  const handleSearch = (e) => {
    // const term = selectedArea.toLowerCase();
    // const filteredMessList = messList.filter((mess) =>
    //   mess.area && mess.area.toLowerCase().includes(term)
    // );
    // setFilteredMessList(filteredMessList);
    setSelectedArea(e.target.value)
    console.log(selectedArea)
  
   // alert(`http://localhost:8080/byArea/${selectedArea}`);
    fetch(`http://localhost:8080/byArea/${selectedArea}`)
      .then((response) => response.json())
      .then((data) => setMessList(data))
      .catch((error) => console.error('Error fetching city data:', error));
  };

  // const handleSearch = (e) => {
  //   setAreaList(e.target.value);
  //   const term = e.target.value.toLowerCase();
  //   const filteredMessList = messList.filter((mess) =>
  //     mess.area && mess.area.toLowerCase().includes(term)
  //   );
  //   setFilteredMessList(filteredMessList);
    
  // };

  const onSubmit = (mess_id) => {
    navigate(`/custplan/${mess_id}`);
  };


  return (
    <div className="container-fluid">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"> <h5>Welcome {obj?.username}</h5></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <LogoutForm/>
              </li>
            </ul>
          </div>
        </div>
      </nav>

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
              <img className="card-img-top" src={image} alt={mess.name} />
              <div className="card-body text-center">
                <h4 className="card-title text-center"><b>{mess.mess_name}</b></h4>
                <p className="card-text text-center"><b> Area :</b> &nbsp;{mess.area}</p>
                <p className="card-text text-center"><b>Address: </b> &nbsp;{mess.mess_address}</p>
               
                <p className="card-text text-center"><b>Contact:</b> &nbsp;{mess.contactno}</p>
                <button
                  className="btn btn-success"
                  onClick={() => onSubmit(mess.mess_id)}
                >
                  Visit Mess
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default CustHome;


