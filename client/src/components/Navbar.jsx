import '../styles/Navbar.css';
import logo from '../assets/Echohub.png'
import { FaSearch, FaCompass, FaMessage, FaGlobe, FaBell } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className='navbar-left'>
                <img className='navbar-logo' src={logo} alt="Logo" />
                <li className="navbar-item search-container">
                    <input type="text" placeholder="Search..." className="search-input" />
                    <button className="search-button"><FaSearch /></button>
                </li>
            </div>
            <ul className='navbar-menu'>
                <li className="navbar-item">
                    <button className="icon-button">
                        <FaCompass />
                    </button>
                </li>
                <li className="navbar-item">
                    <button className="icon-button">
                        <FaMessage />
                    </button>
                </li>
                <li className="navbar-item">
                    <button className="icon-button">
                        <FaGlobe />
                    </button>
                </li>
                <li className="navbar-item">
                    <button className="icon-button">
                        <FaBell />
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
