import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FiMenu, FiX, FiUser, FiFileText, FiBook, FiPenTool, FiPhone } from 'react-icons/fi';
import '../styles/navbar.scss';

function Navbar() {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(localStorage.getItem("active_menu") || "/about");
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to handle menu click and save it in localStorage
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    localStorage.setItem("active_menu", menu);
    setMenuOpen(false); // Close menu after selection in mobile view
  };

  // Sync localStorage data when the component mounts
  useEffect(() => {
    const storedMenu = localStorage.getItem("active_menu");
    if (storedMenu) {
      setActiveMenu(storedMenu);
    }
  }, []);

  return (
    <div className="navbar">
      <div className="current_menu_displayer">
        <h1>{activeMenu.replace("/", "").toUpperCase()}</h1>
      </div>

      {/* Menu Toggle Button (Hamburger Icon) */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Navbar Menu (Mobile/Tablet toggle logic) */}
      <div className={`nav_menu ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <Link 
              to="/about" 
              className={activeMenu === "/about" ? "active_menu" : ""}
              onClick={() => handleMenuClick("/about")}
            >
              <FiUser className="nav-icon" /> About
            </Link>
          </li>
          <li>
            <Link 
              to="/resume" 
              className={activeMenu === "/resume" ? "active_menu" : ""}
              onClick={() => handleMenuClick("/resume")}
            >
              <FiFileText className="nav-icon" /> Resume
            </Link>
          </li>
          <li>
            <Link 
              to="/portfolio" 
              className={activeMenu === "/portfolio" ? "active_menu" : ""}
              onClick={() => handleMenuClick("/portfolio")}
            >
              <FiBook className="nav-icon" /> Portfolio
            </Link>
          </li>
          <li>
            <Link 
              to="/blog" 
              className={activeMenu === "/blog" ? "active_menu" : ""}
              onClick={() => handleMenuClick("/blog")}
            >
              <FiPenTool className="nav-icon" /> Blogs
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={activeMenu === "/contact" ? "active_menu" : ""}
              onClick={() => handleMenuClick("/contact")}
            >
              <FiPhone className="nav-icon" /> Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
