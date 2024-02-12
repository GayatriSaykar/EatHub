import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import messA from '../images/Cust1.jpeg';
import messB from '../images/cust2.jpeg';
import messC from '../images/Cust1.jpeg';



const CustHome = () => {
  const initialMessList = [
    {
      name: 'Mess A',
      image: messA,
      description: 'Description of Mess A.',
      link: 'https://example.com/messA',
    },
    {
        name: 'Mess B',
        image: messB,
        description: 'Description of Mess B.',
        link: 'https://example.com/messB',
      },
      {
        name: 'Mess C',
        image: messC,
        description: 'Description of Mess C.',
        link: 'https://example.com/messC',
      }
  ];

  const [filteredMessList, setFilteredMessList] = useState(initialMessList);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    const filteredMessList = initialMessList.filter((mess) =>
      mess.name.toLowerCase().includes(term)
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
        {filteredMessList.map((mess, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <img className="card-img-top" src={mess.image} alt={mess.name} />
              <div className="card-body">
                <h5 className="card-title">{mess.name}</h5>
                <p className="card-text">{mess.description}</p>
                <a href={mess.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
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
