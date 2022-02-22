import '../../styles/components/layout/Header.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = (props) => {
    return (
        <header>
        <div className="logo">
            <h1>Construir S.R.L.</h1>
        </div>
        <div className='nav'>
            <nav>
            <div className="holder">
                <ul>
                    <li><NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'rgb(240, 165, 0)' : 'white' })}>Inicio</NavLink></li>
                    <li><NavLink to="/nosotros" style={({ isActive }) => ({ color: isActive ? 'rgb(240, 165, 0)' : 'white' })}>Nosotros</NavLink></li>
                    <li><NavLink to="/proyectos" style={({ isActive }) => ({ color: isActive ? 'rgb(240, 165, 0)' : 'white' })}>Proyectos</NavLink></li>
                    <li><NavLink to="/novedades" style={({ isActive }) => ({ color: isActive ? 'rgb(240, 165, 0)' : 'white' })}>Novedades</NavLink></li>
                    <li><NavLink to="/contacto" style={({ isActive }) => ({ color: isActive ? 'rgb(240, 165, 0)' : 'white' })}>Contacto</NavLink></li>
                    {/* <li><NavLink  className="activo" to="/" >Home</NavLink></li> */}
                    {/* <li><NavLink  className="activo" to="/nosotros">Nosotros</NavLink></li>
                    <li><NavLink className="activo" to="/novedades">Novedades</NavLink></li>
                    <li><NavLink className="activo" to="/contacto">Contacto</NavLink></li> */}
                </ul>
            </div>
        </nav>
        </div>
    </header>
    );
}
export default Header;