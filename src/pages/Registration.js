import React, { useState } from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registered as ${form.name}`);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Register</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input style={styles.input} type="text" placeholder="Full Name" required
            value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input style={styles.input} type="email" placeholder="Email" required
            value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <input style={styles.input} type="password" placeholder="Password" required
            value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
          <button style={styles.btn} type="submit">Register</button>
        </form>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
};

const styles = {
  container: { display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh" },
  card: { background: "#fff", padding: "40px", borderRadius: "8px", boxShadow: "0 2px 12px rgba(0,0,0,0.1)", width: "320px" },
  form: { display: "flex", flexDirection: "column", gap: "12px" },
  input: { padding: "10px", borderRadius: "4px", border: "1px solid #ccc", fontSize: "1rem" },
  btn: { padding: "10px", background: "#1a1a2e", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "1rem" },
};

export default Registration;
