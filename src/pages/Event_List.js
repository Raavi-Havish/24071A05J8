import React from "react";
import { useNavigate } from "react-router-dom";

const events = [
  { id: 1, title: "ICMAC Conference", date: "2027-08-10", location: "Hyderabad", category: "Technology" },
  { id: 2, title: "Sintillashunz", date: "2027-04-16", location: "Hyderabad", category: "Fest" },
  { id: 3, title: "Traditional Day", date: "2027-04-17", location: "Hyderabad", category: "Culture" },
  { id: 4, title: "Open-House", date: "2027-04-23", location: "Hyderabad", category: "Project-Display" },
];

const EventList = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Upcoming Events</h2>
      <div style={styles.grid}>
        {events.map((event) => (
          <div key={event.id} style={styles.card}>
            <span style={styles.badge}>{event.category}</span>
            <h3 style={styles.title}>{event.title}</h3>
            <p style={styles.info}> {event.date}</p>
            <p style={styles.info}> {event.location}</p>
            <button style={styles.btn} onClick={() => navigate("/booking", { state: event })}>
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: { padding: "40px 24px", background: "#f5f5f5", minHeight: "80vh" },
  heading: { textAlign: "center", marginBottom: "30px", fontSize: "1.8rem" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "20px", maxWidth: "1000px", margin: "0 auto" },
  card: { background: "#fff", borderRadius: "8px", padding: "20px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column", gap: "8px" },
  badge: { background: "#e8f0fe", color: "#1a73e8", padding: "2px 10px", borderRadius: "12px", fontSize: "0.75rem", alignSelf: "flex-start" },
  title: { margin: 0, fontSize: "1.1rem" },
  info: { margin: 0, color: "#555", fontSize: "0.9rem" },
  btn: { marginTop: "10px", padding: "8px", background: "#6cc2dc", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" },
};

export default EventList;
