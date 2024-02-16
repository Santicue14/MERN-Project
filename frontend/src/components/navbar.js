/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import './functions/funcionesbarra.js'
import profileImage from './images/profileimage.png'
function NavBar() {
  return (
    <div className="sidebar active">
       <div className="active">
      </div> 
      <div className="head">
        <div className="user-img">
          <img src={profileImage} alt="Foto de perfil"/>
        </div>
        <div className="user-details">
          <p className="title">Template Obras</p>
          <p className="name">Santiago Cuevas</p>
        </div>
      </div>
      <div className="nav">
        <div className="menu">
          <p className="title">Principal</p>
          <ul id='icon'>
            <li className="">
              <Link to="/inicio">
                <i className="icon ph-bold ph-house-simple"></i>
                <span className="text">Inicio</span>
              </Link>
            </li>
            <li id='icon'>
              <a href="#">
                <i className="icon ph-bold ph-compass"></i>
                <span className="text">Mapas</span>
                <i className="arrow ph-bold ph-caret-down"></i>
              </a>
              <ul className="sub-menu">
                <li>
                  <Link to="zonasreco">
                    <span className="text">Zonas recolección</span>
                  </Link>
                </li>
                <li>
                  <Link to="calles">
                    <span className="text">Asfaltos por etapas</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <i className="icon ph-bold ph-gas-pump"></i>
                <span className="text">Consumo</span>
                <i className="arrow ph-bold ph-caret-down"></i>
              </a>
              <ul className="sub-menu">
                <li>
                  <Link to="consxdeleg">
                    <span className="text">Consumo por delegación</span>
                  </Link>
                </li>
                <li>
                  <Link to='cierreestimado'>
                    <span className="text">Cierre estimado</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li id='icon'>
              <a href="#"> 
                <i className="icon ph-bold ph-article"></i>
                <span className="text">Reclamos</span>
                <i className="arrow ph-bold ph-caret-down"></i>
              </a>
              <ul className="sub-menu">
                <li>
                  <Link to="cargareclamos">
                    <span className="text">Cargar Reclamos</span>
                  </Link>
                </li>
                <li>
                  <Link to="listareclamos">
                    <span className="text">Listado de Reclamos</span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div> 
      </div>
      <div className="menu" id='icon'>
        <p className="title">Cuenta</p>
        <ul id='icon'>
          <li>
            <Link to="/user">
              <i className="icon ph-bold ph-info"></i>
              <span className="text">Soporte</span>
            </Link>
          </li>
          <li id='icon'>
            <Link to="/create">
              <i className="icon ph-bold ph-sign-out"></i>
              <span className="text">Cerrar sesión</span>
              </Link>
          </li>
        </ul>
      </div>
    </div>
    )}



export default NavBar;