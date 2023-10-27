import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import menubg from '../img/air-bnb.jpg';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
const NavbarNav = () => {
  return (
    <>
    <Router>
    <div className='h-60 relative' style={{background:`url(${menubg})`,backgroundSize: 'cover', 
     backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}> 
     <span className='bg-[#3a416ff7] absolute top-0 left-0 right-0 bottom-0'></span>
       <Navbar expand="lg">
            <div className="container">
                <Navbar.Brand href="#home"  className='text-white'>Shoft UI</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className=' sm:bg-inherit bg-slate-50 z-10 px-3 py-2'>
                    <Nav className="m-auto ">
                        <Nav.Link  as={Link} to="/" className='sm:!text-white text-slate-600'>Home</Nav.Link>
                        <Nav.Link  as={Link} to="/" className='sm:!text-white text-slate-600'>About Us</Nav.Link>
                        <Nav.Link  as={Link} to="/" className='sm:!text-white text-slate-600'>Pricing</Nav.Link>
                        <Nav.Link  as={Link} to="/" className='sm:!text-white text-slate-600'>Career</Nav.Link>
                        <Nav.Link  as={Link} to="/" className='sm:!text-white text-slate-600'>Work with us</Nav.Link>
                        <Nav.Link  as={Link} to="/" className='sm:!text-white text-slate-600'>Terms & Conditions</Nav.Link>
                        <Nav.Link  as={Link} to="/contact" className='sm:!text-white text-slate-600'>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    </div> 
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes> 
    </Router>
    </>
  )
}

export default NavbarNav
