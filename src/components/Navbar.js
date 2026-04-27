import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <span style={styles.brand}>EventApp</span>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/events" style={styles.link}>Events_List</Link>
        <Link to="/booking" style={styles.link}>Booking</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
        <Link to="/login" style={styles.link}>Login</Link>
        <Link to="/register" style={styles.link}>Register</Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 24px", background: "#b62ddc", color: "#fff" },
  brand: { fontSize: "1.4rem", fontWeight: "bold" },
  links: { display: "flex", gap: "20px" },
  link: { color: "#07040e", textDecoration: "none", fontSize: "0.95rem" },
};

export default Navbar;
