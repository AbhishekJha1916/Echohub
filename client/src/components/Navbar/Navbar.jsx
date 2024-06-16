import './Navbar.css';
import logo from '../../assets/Echohub.png';
import profile from '../../assets/profile-p.jpg';
import {
  FaSearch,
  FaCompass,
  FaRegCommentDots,
  FaGlobe,
  FaBell,
} from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img className="navbar-logo" src={logo} alt="Logo" />
        <li className="navbar-item search-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="search-button">
            <FaSearch />
          </button>
        </li>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <button className="icon-button">
            <FaCompass />
          </button>
        </li>
        <li className="navbar-item">
          <button className="icon-button">
            <FaRegCommentDots />
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
        <li className="navbar-item">
          <img className="item-profile" src={profile} alt="profile" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
