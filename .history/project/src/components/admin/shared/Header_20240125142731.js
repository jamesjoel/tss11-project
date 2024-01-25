import React,{useEffect} from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {


  return (
    <>
    
    <header className="topbar" data-navbarbg="skin5">
    <nav className="navbar top-navbar navbar-expand-md navbar-dark">
        <div className="navbar-header" data-logobg="skin6">
            
            <a className="navbar-brand" href="dashboard.html">
                
                <b className="logo-icon">
                    
                    <img src="/assets/plugins/images/logo-icon.png" alt="homepage" />
                </b>
                
                <span className="logo-text">
                    
                    <img src="/assets/plugins/images/logo-text.png" alt="homepage" />
                </span>
            </a>
          
            <a className="nav-toggler waves-effect waves-light text-dark d-block d-md-none"
                href="javascript:void(0)"><i className="ti-menu ti-close"></i></a>
        </div>
      
        <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
           
           
            <ul className="navbar-nav ms-auto d-flex align-items-center">

                
                <li className=" in">
                    <form role="search" className="app-search d-none d-md-block me-3">
                        <input type="text" placeholder="Search..." className="form-control mt-0"/>
                        <a href="" className="active">
                            <i className="fa fa-search"></i>
                        </a>
                    </form>
                </li>
                
                {/* <!-- User profile and search --> */}
                
                <li>
                    <a className="profile-pic" href="#">
                        <img src="/assets/plugins/images/users/varun.jpg" alt="user-img" width="36"
                            className="img-circle"/><span className="text-white font-medium">Steave</span></a>
                </li>
                
            </ul>
        </div>
    </nav>
</header>
<<<<<<< HEAD
 

=======
 {
    localStorage.getItem("admin-access")?

    <>
    <aside className="left-sidebar" data-sidebarbg="skin6">
            
            <div className="scroll-sidebar">
                {/* <!-- Sidebar navigation--> */}
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        {/* <!-- User Profile--> */}
                        <li className="sidebar-item pt-2">
                            <NavLink className="sidebar-link waves-effect waves-dark sidebar-link" to="/admin/dashboard"
                                aria-expanded="false">
                                <i className="far fa-clock" aria-hidden="true"></i>
                                 <span className="hide-menu">Dashboard</span>
<<<<<<< HEAD
                            </a>
=======
                            </NavLink>
>>>>>>> f06bc6e465fb9d1a1ba09cac6e75eb5b2ffe6324
                        </li>
                        <li className="sidebar-item pt-2">
                            <NavLink className="sidebar-link waves-effect waves-dark sidebar-link" to="/admin/users"
                                aria-expanded="false">
                                <i className="far fa-clock" aria-hidden="true"></i>
                                 <span className="hide-menu">Users</span>
                            </NavLink>
                        </li>
                        <li className="sidebar-item pt-2">
                            <NavLink className="sidebar-link waves-effect waves-dark sidebar-link" to="/admin/menu"
                                aria-expanded="false">
                                <i className="far fa-clock" aria-hidden="true"></i>
                                 <span className="hide-menu">Menu</span>
                            </NavLink>
                        </li>
                        
                        {/* <li className="sidebar-item">
                            <a className="sidebar-link waves-effect waves-dark sidebar-link" href="blank.html"
                                aria-expanded="false">
                                <i className="fa fa-columns" aria-hidden="true"></i>
                                <span className="hide-menu">Blank Page</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link waves-effect waves-dark sidebar-link" href="404.html"
                                aria-expanded="false">
                                <i className="fa fa-info-circle" aria-hidden="true"></i>
                                <span className="hide-menu">Error 404</span>
                            </a>
                        </li> */}
                        <li className="text-center p-20 upgrade-btn">
                            <a href="https://www.wrappixel.com/templates/ampleadmin/"
                                className="btn d-grid btn-danger text-white" target="_blank">
                                Upgrade to Pro</a>
                        </li>
                    </ul>

                </nav>
                
            </div>
            
 </aside>
    </> 
 


</>
 
  )
}

export default Header