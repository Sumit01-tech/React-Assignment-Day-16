import React, { useState, useEffect } from "react";
import FeedbackForm from "../components/FeedbackForm";
import FeedbackList from "../components/FeedbackList";
import Filter from "../components/Filter";
import { Feedback } from "../types/feedbackTypes";

const Home: React.FC = () => {
    const [feedbacks, setFeedbacks] = useState<Feedback[]>(() => {
        return JSON.parse(localStorage.getItem("feedbacks") || "[]");
    });

    const [filteredFeedbacks, setFilteredFeedbacks] = useState<Feedback[]>(feedbacks);

    useEffect(() => {
        setFilteredFeedbacks(feedbacks);
    }, [feedbacks]);

    const addFeedback = (feedback: Feedback) => {
        const updatedFeedbacks = [...feedbacks, feedback];
        setFeedbacks(updatedFeedbacks);
        localStorage.setItem("feedbacks", JSON.stringify(updatedFeedbacks));
    };

    return (
        <div className="container">
            <h1>Aromatic Bar Feedback</h1>
            <FeedbackForm addFeedback={addFeedback} />
            <Filter feedbacks={feedbacks} setFilteredFeedbacks={setFilteredFeedbacks} />
            <FeedbackList feedbacks={filteredFeedbacks} />
        </div>
    );
};

export default Home;
