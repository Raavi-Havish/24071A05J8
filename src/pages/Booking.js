import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Booking = () => {
  const { state: event } = useLocation();
  const [form, setForm] = useState({ name: "", email: "", tickets: 1 });
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={{ color: "green" }}>Your Booking has been Confirmed!</h2>
          <p>Thank you, <strong>{form.name}</strong>!</p>
          {event && <p>Event: <strong>{event.title}</strong></p>}
          <p>Tickets: <strong>{form.tickets}</strong></p>
          <p>Confirmation sent to: <strong>{form.email}</strong></p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Book Your Ticket</h2>
        {event && <p style={styles.eventInfo}>🎫 {event.title} — {event.date} — {event.location}</p>}
        <form onSubmit={handleSubmit} style={styles.form}>
          <input style={styles.input} type="text" placeholder="Your Name" required
            value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input style={styles.input} type="email" placeholder="Email" required
            value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <label style={styles.label}>Number of Tickets</label>
          <input style={styles.input} type="number" min="1" max="10"
            value={form.tickets} onChange={(e) => setForm({ ...form, tickets: e.target.value })} />
          <button style={styles.btn} type="submit">Confirm Booking</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: { display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh", background: "#f5f5f5" },
  card: { background: "#fff", padding: "40px", borderRadius: "8px", boxShadow: "0 2px 12px rgba(0,0,0,0.1)", width: "360px" },
  eventInfo: { background: "#f0f4ff", padding: "10px", borderRadius: "4px", fontSize: "0.9rem", marginBottom: "10px" },
  form: { display: "flex", flexDirection: "column", gap: "12px" },
  input: { padding: "10px", borderRadius: "4px", border: "1px solid #ccc", fontSize: "1rem" },
  label: { fontSize: "0.9rem", color: "#555" },
  btn: { padding: "10px", background: "#1a1a2e", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "1rem" },
};

export default Booking;
