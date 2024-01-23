import React from 'react'
import { NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
                <NavLink href="" className="navbar-brand p-0">
                    <h1 className="text-primary m-0"><i className="fa fa-utensils me-3"></i>Restoran</h1>
                     {/* <img src="img/logo.png" alt="Logo"/> */}
                </NavLink>
                {/* <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button> */}
                <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-expanded="false">
                    <span class="fa fa-bars"></span>
                </button>
                <div className=" navbar-collapse " id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0 pe-4">
                        <NavLink to="index.html" className="nav-item nav-link ">Home</NavLink>
                        <NavLink to="about.html" className="nav-item nav-link">About</NavLink>
                        <NavLink to="service.html" className="nav-item nav-link">Service</NavLink>
                        <NavLink to="menu.html" className="nav-item nav-link">Menu</NavLink>
                        <div className="nav-item dropdown">
                            <NavLink to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</NavLink>
                            <div className="dropdown-menu m-0">
                                <NavLink to="booking.html" className="dropdown-item">Booking</NavLink>
                                <NavLink to="team.html" className="dropdown-item">Our Team</NavLink>
                                <NavLink to="testimonial.html" className="dropdown-item">Testimonial</NavLink>
                            </div>
                        </div>
                        <NavLink to="contact.html" className="nav-item nav-link">Contact</NavLink>
                        <NavLink to="/login" className="nav-item nav-link">Login</NavLink>
                        <NavLink to="/signup" className="nav-item nav-link">SignUp</NavLink>
                    </div>
                    <NavLink to="" className="btn btn-primary py-2 px-4">Book A Table</NavLink>
                </div>
            </nav>
    </>
  )
}

export default Header