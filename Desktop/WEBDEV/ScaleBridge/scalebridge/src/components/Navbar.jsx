// // src/components/Navbar.jsx
// import React from "react";
// import { Link } from "react-scroll";

// const Navbar = () => {
//   return (
//     <nav className="bg-white shadow-md fixed w-full z-10">
//       <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
//         <h1 className="text-2xl font-bold text-black">ScaleBridge</h1>
//         <ul className="hidden md:flex space-x-6 text-gray-800 font-medium">
//           <li><Link
//             to="home"
//             smooth={true}
//             duration={600} 
//             spy={true}
//             offset={-70}
//             activeClass="active"
//             className="hover:text-blue-600 cursor-pointer">Home</Link></li>
//           <li><Link
//             to="about"
//             smooth={true}
//             duration={600} 
//             spy={true}
//             offset={-70}
//             activeClass="active"
//             className="hover:text-blue-600 cursor-pointer">About</Link></li>
//           <li><Link
//             to="services"
//             smooth={true}
//             duration={600}
//             spy={true}
//             offset={-70}
//             activeClass="active" 
//             className="hover:text-blue-600 cursor-pointer">Services</Link></li>
//           <li><Link
//             to="contact"
//             smooth={true}
//             duration={600}
//             spy={true}
//             offset={-100}
//             activeClass="active"
//             className="hover:text-blue-600 cursor-pointer">Contact</Link></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
