// Navbar.js

// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container">
//         <div className="navbar-header">
//           <a className="navbar-brand" href="/">
//              EATHUB
//           </a>
//         </div>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item active">
//               <a className="nav-link" href="/">
//                 Home <span className="sr-only">(current)</span>
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/about">
//                 About
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/contact">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <img src="/path/to/logo.png" alt="Logo" height="30" />
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
              <Link to="/customer-signup" className="nav-link">
                Signup (Customer)
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/mess-signup" className="nav-link">
                Signup (Mess)
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
  );
};

export default Navbar;
