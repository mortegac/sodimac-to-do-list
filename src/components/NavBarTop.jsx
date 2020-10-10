import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';


const NavBarTop = () =>{

    return(
    
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">Súper TODO</Navbar.Brand>
            <Nav className="mr-auto">
                <Link className='nav-link' to='/'>Inicio</Link>
                <Link className='nav-link' to='/mis-tareas'> Mis Tareas</Link>
                <Link className='nav-link' to='/tareas'> Tareas</Link>
            </Nav>
    </Navbar>
    )
}

export default NavBarTop;