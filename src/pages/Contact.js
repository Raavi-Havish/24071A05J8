import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={{ color: "green" }}> Message has been sent right now by 24071A05J8!</h2>
          <p>Thank You <strong>{form.name}</strong>. We'll get back to you soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input style={styles.input} type="text" placeholder="Your Name" required
            value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input style={styles.input} type="email" placeholder="Email" required
            value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <textarea style={{ ...styles.input, height: "100px", resize: "vertical" }} placeholder="Your Message" required
            value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          <button style={styles.btn} type="submit">Send Message</button>
          <p style={{fontSize:"1rem", color:"#3ab9a4"}}>Contact us directly at 24071a05j8@vnrvjiet.in if we don't get back to you in 24hours.</p>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: { display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh", background: "#ddd9d9" },
  card: { background: "#fff", padding: "40px", borderRadius: "8px", boxShadow: "0 2px 12px rgba(0,0,0,0.1)", width: "360px" },
  form: { display: "flex", flexDirection: "column", gap: "12px" },
  input: { padding: "10px", borderRadius: "4px", border: "1px solid #ccc", fontSize: "1rem" },
  btn: { padding: "10px", background: "#1a1a2e", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "1rem" },
};

export default Contact;
