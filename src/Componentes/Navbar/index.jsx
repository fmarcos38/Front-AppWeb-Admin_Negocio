import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { resetLogin, } from '../../Redux/Actions';
import { Link, useNavigate } from 'react-router-dom';
import { AppContexto } from '../../Contexto';
import { logout } from '../../LocalStorage';
import logo from '../../Imagenes/logoNuevo.jpg';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import Swal from 'sweetalert2';
import './estilos.css';


const Navbar = () => {

    const [muestraMenuClientes, setMuestraMenuClientes] = useState(false); //estado menú cliente
    const [muestraMenuProductos, setMuestraMenuProductos] = useState(false); //estado menú prod
    const [muestraMenuProveedor, setMuestraMenuProveedor] = useState(false); //estado menú proveedor
    const [muestraMenuCompras, setMuestraMenuCompras] = useState(false); //estado menú compras
    const [muestraMenuVentas, setMuestraMenuVentas] = useState(false); //estado menú ventas
    const [muestraMenuReportes, setMuestraMenuReportes] = useState(false); //estado menú reportes
    const contexto = useContext(AppContexto); console.log("contexto:",contexto.nombre);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    /* para menú hamburguesa */
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    //-----------------------

    const handleMouseEnterCliente = () => {
        setMuestraMenuClientes(true);
    };
    const handleMouseLeaveCliente = () => {
        setMuestraMenuClientes(false);
    };
    const handleMouseEnterProd = () => {
        setMuestraMenuProductos(true);
    };
    const handleMouseLeaveProd = () => {
        setMuestraMenuProductos(false);
    };
    const handleMouseEnterProveedor = () => {
        setMuestraMenuProveedor(true);
    };
    const handleMouseLeaveProveedor = () => {
        setMuestraMenuProveedor(false);
    };
    const handleMouseEnterCompras = () => {
        setMuestraMenuCompras(true);
    };
    const handleMouseLeavecompras = () => {
        setMuestraMenuCompras(false);
    };
    const handleMouseEnterVentas = () => {
        setMuestraMenuVentas(true);
    };
    const handleMouseLeaveVentas = () => {
        setMuestraMenuVentas(false);
    };
    const handleMouseEnterReportes = () => {
        setMuestraMenuReportes(true);
    };
    const handleMouseLeaveReportes = () => {
        setMuestraMenuReportes(false);
    };
    const handleLogOut = () => {
        Swal.fire({
            title: "Salir?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si!"
        }).then((result) => {
            if (result.isConfirmed) {
                logout();
                contexto.setUserLog(null);
                contexto.logout();
                dispatch(resetLogin());
                navigate('/')
            }
        });        
    };
    
    
    return (
        <nav className="navbar">
            <div className='cont-log-items-log'>
                {/* logo */}
                <div className='cont-izq'>
                    <Link to='/' className='cont-izq'>
                        <img src={logo} alt='' className='logo' />
                    </Link>
                </div>

                {/* items barra ADMIN y Cliente*/}
                {
                    contexto.isAuthenticated ? (
                        <ul className="navbar-menu">
                            {/* clientes */}
                            <li
                                className="navbar-item"
                                onMouseEnter={handleMouseEnterCliente}
                                onMouseLeave={handleMouseLeaveCliente}
                            >
                                Clientes
                                {
                                    muestraMenuClientes && (
                                        <ul className="dropdown-menu">
                                            <Link to="/creaCliente" className='link-menu'>
                                                <li className="dropdown-item">Crear Cliente</li>
                                            </Link>
                                            <Link to='/clientes' className='link-menu'>
                                                <li className="dropdown-item">Listar Clientes</li>
                                            </Link>
                                        </ul>
                                    )
                                }
                            </li>
                            {/* Productos */}
                            <li
                                className="navbar-item"
                                onMouseEnter={handleMouseEnterProd}
                                onMouseLeave={handleMouseLeaveProd}
                            >
                                Productos
                                {
                                    muestraMenuProductos && (
                                        <ul className="dropdown-menu">
                                            <Link to="/creaProducto" className='link-menu'>
                                                <li className="dropdown-item">Crear Producto</li>
                                            </Link>
                                            <Link to='/productos' className='link-menu'>
                                                <li className="dropdown-item">Listar Productos</li>
                                            </Link>
                                        </ul>
                                    )
                                }
                            </li>
                            {/* Proveedores */}
                            <li
                                className="navbar-item"
                                onMouseEnter={handleMouseEnterProveedor}
                                onMouseLeave={handleMouseLeaveProveedor}
                            >
                                Proveedores
                                {
                                    muestraMenuProveedor && (
                                        <ul className="dropdown-menu">
                                            <Link to="/creaProveedor" className='link-menu'>
                                                <li className="dropdown-item">Crear Proveedor</li>
                                            </Link>
                                            <Link to='/proveedores' className='link-menu'>
                                                <li className="dropdown-item">Listar Proveedores</li>
                                            </Link>
                                        </ul>
                                    )
                                }
                            </li>
                            {/* Compras */}
                            <li
                                className="navbar-item"
                                onMouseEnter={handleMouseEnterCompras}
                                onMouseLeave={handleMouseLeavecompras}
                            >
                                Compras
                                {
                                    muestraMenuCompras && (
                                        <ul className="dropdown-menu">
                                            <Link to='/creaCompra' className='link-menu'>
                                                <li className="dropdown-item">Crear Compra</li>
                                            </Link>
                                            <Link to="/creaPago" className='link-menu'>
                                                <li className="dropdown-item">Crear Pago</li>
                                            </Link>
                                            <Link to='/listaRemitosCompras' className='link-menu'>
                                                <li className="dropdown-item">Lista remitos</li>
                                            </Link>
                                        </ul>
                                    )
                                }
                            </li>
                            {/* Ventas */}
                            <li
                                className="navbar-item"
                                onMouseEnter={handleMouseEnterVentas}
                                onMouseLeave={handleMouseLeaveVentas}
                            >
                                Ventas
                                {
                                    muestraMenuVentas && (
                                        <ul className="dropdown-menu">
                                            <Link to="/creaVenta" className='link-menu'>
                                                <li className="dropdown-item">Crear remito</li>
                                            </Link>
                                            <Link to="/creaPagoCliente" className='link-menu'>
                                                <li className="dropdown-item">Crear Pago</li>
                                            </Link>
                                            <Link to="/listaRemitosVentas" className='link-menu'>
                                                <li className="dropdown-item">Lista remitos</li>
                                            </Link>
                                        </ul>
                                    )
                                }
                            </li>
                            {/* Reportes */}
                            <li
                                className="navbar-item"
                                onMouseEnter={handleMouseEnterReportes}
                                onMouseLeave={handleMouseLeaveReportes}
                            >
                                Reportes
                                {
                                    muestraMenuReportes && (
                                        <ul className="dropdown-menu">
                                            <Link to="/creaGastos" className='link-menu'>
                                                <li className="dropdown-item">Crear Gastos</li>
                                            </Link>
                                            <Link to="/listaReportes" className='link-menu'>
                                                <li className="dropdown-item">Lista Reportes</li>
                                            </Link>
                                        </ul>
                                    )
                                }
                            </li>
                        </ul>
                    ) : (
                        <div className='cont-menu-cliente'>
                            <ul className="navbar-menu">
                                <Link to="/listaDePrecios" className='link-menu'>
                                    <li className="navbar-item-cliente">Lista Mayorista</li>
                                </Link>
                                <Link to="/ofertas" className='link-menu'>
                                    <li className="navbar-item-cliente">Lista Especial</li>
                                </Link>
                                <Link to="/quienesSomos" className='link-menu'>
                                    <li className="navbar-item-cliente quienesSomos">Quienes somos</li>
                                </Link>
                            </ul>
                        </div>
                    )
                }
                {/* menu hamburg */}
                <div className='cont-menu-hambur'>
                    {/* menu hambur P.Chica */}
                    <div
                        className={`menu-icon ${isOpen ? 'open' : ''}`}
                        onClick={toggleMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    {/* menu desplegable P.chica*/}
                    <div className="menu-desplegable">
                        {
                            isOpen &&
                            (                        
                                contexto.isAuthenticated ? (
                                    <ul className='ul-lista-pChica'>
                                        <li>
                                            <Link to="/creaCliente" className='link-navbar'>Crear Cliente</Link>
                                        </li>
                                        <li>
                                            <Link to='/clientes' className='link-navbar'>Listar Clientes</Link>
                                        </li>
                                        <li>
                                            <Link to="/creaProducto" className='link-navbar'>Crear Producto</Link>
                                        </li>
                                        <li>
                                            <Link to='/productos' className='link-navbar'>Listar Productos</Link>
                                        </li>
                                        <li>
                                            <Link to="/creaProveedor" className='link-navbar'>Crear Proveedor</Link>
                                        </li>
                                        <li>
                                            <Link to='/proveedores' className='link-navbar'>Listar Proveedores</Link>
                                        </li>
                                        <li>
                                            <Link to='/creaCompra' className='link-navbar'>Crear Compra</Link>
                                        </li>
                                        <li>
                                            <Link to="/creaPago" className='link-navbar'>Crear Pago</Link>
                                        </li>
                                        <li>
                                            <Link to='/listaRemitosCompras' className='link-navbar'>Lista remitos</Link>
                                        </li>
                                        <li>
                                            <Link to="/creaVenta" className='link-navbar'>Crear remito</Link>
                                        </li>
                                        <li>
                                            <Link to="/creaPagoCliente" className='link-navbar'>Crear Pago</Link>
                                        </li>
                                        <li>
                                            <Link to="/listaRemitosVentas" className='link-navbar'>Lista remitos</Link>
                                        </li>
                                        <li>
                                            <Link to="/creaGastos" className='link-navbar'>Crear Gastos</Link>
                                        </li>
                                        <li>
                                            <Link to="/listaReportes" className='link-navbar'>Lista Reportes</Link>
                                        </li>
                                    </ul>
                                ) : (
                                    <ul className='ul-lista-pChica'>
                                        <li className='items-pChica'>
                                            <Link to='/listaDePrecios' className='link-navbar'>Lista Mayorista</Link>
                                        </li>
                                        <li className='items-pChica'>
                                            <Link to='/ofertas' className='link-navbar'>Lista Especial</Link>
                                        </li>
                                        <li className='items-pChica'>
                                            <Link to='/quienesSomos' className='link-navbar'>Quienes somos</Link>
                                        </li>
                                    </ul>
                                )
                            )
                        }
                    </div>
                </div>

                {/* login/logout */}
                {
                    !contexto.isAuthenticated ? (
                        /* login */
                        <div className='cont-der'>
                            <Link to={'/login'}>
                                <LoginIcon sx={{color:'#fff'}}/>
                            </Link>
                        </div>
                    ) : (
                        /* logout */
                        <div className='cont-der'>
                            <p className='nombre-userLog'>{contexto.nombre}</p>
                            <button onClick={() => handleLogOut()} className='btn-logout'>
                                <LogoutIcon sx={{backgroundColor:'rgb(74, 42, 42)', color:'#fff'}} />
                            </button>
                        </div>
                    )

                }
            </div>            
        </nav>
    );
};

export default Navbar;
