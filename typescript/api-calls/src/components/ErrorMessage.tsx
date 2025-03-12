import React from "react";

interface ErrorProps {
    message: string;
}

const ErrorMessage: React.FC<ErrorProps> = ({ message }) => {
    return <p style={styles.error}>{message}</p>;
};

const styles = {
    error: {
        color: "red",
        fontWeight: "bold",
        textAlign: "center" as const,
        marginTop: "20px",
    },
};

export default ErrorMessage;
