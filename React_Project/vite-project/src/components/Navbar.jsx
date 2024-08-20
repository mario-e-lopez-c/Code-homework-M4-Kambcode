import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    
    const styles = {
        navbar: {
            padding: '10px',
            display: 'flex',
            justifyContent: 'space-around',
            backgroundColor: '#FFFFFF',
        }
    }

    return(
       <nav style={styles.navbar}>
            <NavLink to="/" style={styles.link} activeStyle={styles.activeLink}>Home</NavLink>
            <NavLink to="/about" style={styles.link} activeStyle={styles.activeLink}>About</NavLink>
            <NavLink to="/contact" style={styles.link} activeStyle={styles.activeLink}>Contact</NavLink>
      </nav>
    )
}

export default Navbar