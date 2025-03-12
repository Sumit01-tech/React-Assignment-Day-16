import React from "react";

const Navbar: React.FC = () => {
    return (
        <nav style={styles.navbar}>
            <h2>React API Demo</h2>
        </nav>
    );
};

const styles = {
    navbar: {
        backgroundColor: "#007bff",
        color: "#fff",
        padding: "10px",
        textAlign: "center" as const,
        fontSize: "20px",
    },
};

export default Navbar;
