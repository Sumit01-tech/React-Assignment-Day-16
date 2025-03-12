import React from "react";
import { Feedback } from "../types/feedbackTypes";

interface FeedbackItemProps {
    feedback: Feedback;
}

const FeedbackItem: React.FC<FeedbackItemProps> = ({ feedback }) => {
    return (
        <div className="feedback-item">
            <h3>{feedback.name} ({feedback.date})</h3>
            <p>Food: {feedback.foodRating} ⭐</p>
            <p>Service: {feedback.serviceRating} ⭐</p>
            <p>Ambience: {feedback.ambienceRating} ⭐</p>
            {feedback.comments && <p>"{feedback.comments}"</p>}
        </div>
    );
};

export default FeedbackItem;
