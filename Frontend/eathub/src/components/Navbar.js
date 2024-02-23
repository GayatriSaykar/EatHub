import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import bg from '../images/photorealistic-lohri-festival-celebration-with-traditional-food_23-2151098302.jpg';

const Navbar = () => {
  return (
    <div className='container-fluid'>
      <div className="container-fluid">
      <nav className="navbar navbar-expand-lg bg-success bg-opacity-50">
        
          <Link to="/" className="navbar-brand">
            <h2 style={{ color: 'navy' }}>EatHub</h2>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
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
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
            </ul>
          </div>
          </nav>
        </div>
      

      <div style={{
       backgroundImage: `url(${bg})`,
       backgroundSize: '100% 100%',  // Adjust this value to increase the width
       backgroundPosition: 'center',
       minHeight: '100vh',
       color: 'white',
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center',
       flexDirection: 'column',
       opacity: 0.8
      }}>
        <div className="hero-section">
          <div className="container d-flex flex-column justify-content-center align-items-center text-center text-white">
            <h1 className="text-center">Welcome to EATHUB</h1>
            <p style={{ fontSize: '20px' }}>Enjoy delicious moments</p>
            <button className="btn btn-primary mt-3">Order Now</button>
          </div>
        </div>

        <div className="container py-5 opacity-100">
          <h2 className="text-center mb-4">Why Choose Us?</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="text-center">
                <i className="bi bi-clock"></i>
                <h3>Quick Service</h3>
                <p>Fast delivery of your favorite meals</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="text-center">
                <i className="bi bi-cash"></i>
                <h3>Affordable Prices</h3>
                <p>Great food at unbeatable prices</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="text-center">
                <i className="bi bi-heart"></i>
                <h3>Quality Ingredients</h3>
                <p>Only the freshest and finest ingredients</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Navbar;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import bg from '../images/photorealistic-lohri-festival-celebration-with-traditional-food_23-2151098302.jpg';

// const Navbar = () => {
//   return (
//     <div className='container-fluid'>
//       <div className="container-fluid">
//       <nav className="navbar navbar-expand-lg bg-success bg-opacity-50">
        
//           <Link to="/" className="navbar-brand">
//             <h2 style={{ color: 'navy' }}>EatHub</h2>
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <Link to="/custregister" className="nav-link">
//                   Customer
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/messregister" className="nav-link">
//                   Mess
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/login" className="nav-link">
//                   Login
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           </nav>
//         </div>
      

//       <div style={{
//        backgroundImage: `url(${bg})`,
//        backgroundSize: '100% 100%',  // Adjust this value to increase the width
//        backgroundPosition: 'center',
//        minHeight: '100vh',
//        color: 'white',
//        display: 'flex',
//        justifyContent: 'center',
//        alignItems: 'center',
//        flexDirection: 'column',
//        opacity: 0.8
//       }}>
//         <div className="hero-section">
//           <div className="container d-flex flex-column justify-content-center align-items-center text-center text-white">
//             <h1 className="text-center">Welcome to EATHUB</h1>
//             <p style={{ fontSize: '20px' }}>Enjoy delicious moments</p>
//             <button className="btn btn-primary mt-3">Order Now</button>
//           </div>
//         </div>

//         <div className="container py-5 opacity-100">
//           <h2 className="text-center mb-4">Why Choose Us?</h2>
//           <div className="row">
//             <div className="col-md-4 mb-4">
//               <div className="text-center">
//                 <i className="bi bi-clock"></i>
//                 <h3>Quick Service</h3>
//                 <p>Fast delivery of your favorite meals</p>
//               </div>
//             </div>
//             <div className="col-md-4 mb-4">
//               <div className="text-center">
//                 <i className="bi bi-cash"></i>
//                 <h3>Affordable Prices</h3>
//                 <p>Great food at unbeatable prices</p>
//               </div>
//             </div>
//             <div className="col-md-4 mb-4">
//               <div className="text-center">
//                 <i className="bi bi-heart"></i>
//                 <h3>Quality Ingredients</h3>
//                 <p>Only the freshest and finest ingredients</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <footer className="footer mt-6 py-3 bg-success bg-opacity-50" style={{ marginBottom: 0, width: "100%" }}>
//         <div className="container text-center">
//           <h6 className='text-center'>&copy; 2024 EatHub. All Rights Reserved.</h6>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Navbar;



















// import React from 'react';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import Logo from '../images/Logo.jpeg';
// import bg from '../images/photorealistic-lohri-festival-celebration-with-traditional-food_23-2151098302.jpg';

// const Navbar = () => {
//   return (
//     <div className='ro3'>
//       <div >
//     <nav className="navbar navbar-expand-lg bg-success bg-opacity-50">
//       <div className="container-fluid">
//         {/* Logo */}
//         <Link to="/" className="navbar-brand">
//          <h2 style={{color:'navy'}}>EatHub</h2>
//         </Link>

//         {/* Navbar Toggler for responsive design */}
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

//         {/* Navbar Items */}
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ml-auto">
//             {/* Signup Links */}
//             <li className="nav-item">
//               <Link to="/custregister" className="nav-link">
//                 Customer
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/messregister" className="nav-link">
//                 Mess
//               </Link>
//             </li>

//             {/* Login Link */}
//             <li className="nav-item">
//               <Link to="/login" className="nav-link">
//                 Login
//               </Link>
//             </li>
//           </ul>
//         </div>
//         </div>
//     </nav>
    
//     <div style={{
//           backgroundImage: `url(${bg})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           minHeight: '100vh', // Set the minimum height to full viewport height
//           color: 'white', // Set text color to white
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           flexDirection: 'column',
//           opacity: 0.8
//         }}>
         
    
  
    
//     <div className="hero-section" style={{ backgroundImage: `url('/path/to/background-image.jpg ')`, backgroundSize: 'cover', backgroundPosition: 'center', height: 'calc(100vh - 56px)' }}>
//                 <div className="container d-flex flex-column justify-content-center align-items-center text-center text-white" style={{ height: '100%' }}>
//                 <h1 className="text-center">Welcome to EATHUB</h1>
//           <p style={{ fontSize: '20px' }}>Enjoy delicious moments</p>
//                     <button className="btn btn-primary mt-3">Order Now</button>
//                 </div>
//             </div>
//     <div className="container py-5 opacity-100">
//                 <h2 className="text-center mb-4">Why Choose Us?</h2>
//                 <div className="row">
//                     <div className="col-md-4 mb-4">
//                         <div className="text-center">
//                             <i className="bi bi-clock"></i>
//                             <h3>Quick Service</h3>
//                             <p>Fast delivery of your favorite meals</p>
//                         </div>
//                     </div>
//                     <div className="col-md-4 mb-4">
//                         <div className="text-center">
//                             <i className="bi bi-cash"></i>
//                             <h3>Affordable Prices</h3>
//                             <p>Great food at unbeatable prices</p>
//                         </div>
//                     </div>
//                     <div className="col-md-4 mb-4">
//                         <div className="text-center">
//                             <i className="bi bi-heart"></i>
//                             <h3>Quality Ingredients</h3>
//                             <p>Only the freshest and finest ingredients</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//     {/* <div>
//       <img src={Logo} alt='' />
//     </div> */}
 
//  </div>
   
//     </div>
  
//     <footer className="footer mt-6 py-3 bg-success bg-opacity-50" style={{  marginBottom: 0, width: "100%",backgroundSize: 'cover', }}>
//         <div className="container text-center" >
//           <h6 className='text-center '>&copy; 2024 EatHub. All Rights Reserved.</h6>
//         </div>
//       </footer>
  
//     </div>
//   );
// };

// export default Navbar;
