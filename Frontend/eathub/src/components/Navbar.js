import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Logo from '../images/Logo.jpeg';
import bg from '../images/Cust1.jpeg';

const Navbar = () => {
  return (
    <div className='ro3'>
      <div >
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
         <h2 style={{color:'navy'}}>EatHub</h2>
        </Link>

        {/* Navbar Toggler for responsive design */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {/* Signup Links */}
            <li className="nav-item">
              <Link to="/custregister" className="nav-link">
                Customer
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/messregister" className="nav-link">
                Mess
              </Link>
            </li>

            {/* Login Link */}
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh', // Set the minimum height to full viewport height
          color: 'white', // Set text color to white
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
          <h1 className="text-center">Welcome to EATHUB</h1>
          <p style={{ fontSize: '20px' }}>Enjoy delicious moments with every bite.</p>

    </div>
    </div>
    {/* <div>
      <img src={Logo} alt='' />
    </div> */}
    <div>
    <footer className="footer mt-5 py-3 bg-light" style={{ position: "fixed", bottom: 0, width: "100%" }}>
        <div className="container text-center">
          <h6 className='text-center'>&copy; 2024 EatHub. All Rights Reserved.</h6>
        </div>
      </footer>
    </div>
    </div>
  );
};

export default Navbar;
