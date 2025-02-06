import React from "react";

const CareerPage = () => {
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      margin: "0",
      padding: "20px",
      backgroundColor: "#f4f4f4",
      textAlign: "center",
    },
    header: {
      fontSize: "28px",
      fontWeight: "bold",
      color: "#333",
    },
    description: {
      fontSize: "18px",
      color: "#666",
      marginBottom: "20px",
    },
    jobCard: {
      backgroundColor: "#fff",
      padding: "15px",
      margin: "10px auto",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      maxWidth: "400px",
      textAlign: "left",
    },
    jobTitle: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "#333",
    },
    jobDescription: {
      fontSize: "16px",
      color: "#555",
      margin: "10px 0",
    },
    applyButton: {
      backgroundColor: "#007bff",
      color: "#fff",
      padding: "10px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      display: "block",
      width: "100%",
    },
    form: {
      backgroundColor: "#fff",
      padding: "15px",
      margin: "20px auto",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      maxWidth: "400px",
    },
    input: {
      width: "100%",
      padding: "8px",
      marginBottom: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
    },
    submitButton: {
      backgroundColor: "#28a745",
      color: "#fff",
      padding: "10px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      width: "100%",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Join Our Team</h1>
      <p style={styles.description}>Explore exciting career opportunities with us.</p>

      {/* Job Listing */}
      <div style={styles.jobCard}>
        <h2 style={styles.jobTitle}>Frontend Developer</h2>
        <p style={styles.jobDescription}>Looking for a React.js developer with 1+ years of experience.</p>
        <button style={styles.applyButton}>Apply Now</button>
      </div>

      <div style={styles.jobCard}>
        <h2 style={styles.jobTitle}>Backend Developer</h2>
        <p style={styles.jobDescription}>Node.js developer needed with expertise in MongoDB.</p>
        <button style={styles.applyButton}>Apply Now</button>
      </div>

      {/* Contact Form */}
      <div style={styles.form}>
        <h2>Apply Now</h2>
        <input type="text" placeholder="Your Name" style={styles.input} />
        <input type="email" placeholder="Your Email" style={styles.input} />
        <input type="text" placeholder="Position" style={styles.input} />
        <button style={styles.submitButton}>Submit</button>
      </div>
    </div>
  );
};

export default CareerPage;
