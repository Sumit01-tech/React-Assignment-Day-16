import React from "react";
import { Feedback } from "../types/feedbackTypes";
import FeedbackItem from "./FeedbackItem";

interface FeedbackListProps {
    feedbacks: Feedback[];
}

const FeedbackList: React.FC<FeedbackListProps> = ({ feedbacks }) => {
    return (
        <div className="feedback-list">
            {feedbacks.length === 0 ? <p>No feedback yet.</p> : feedbacks.map((fb) => <FeedbackItem key={fb.id} feedback={fb} />)}
        </div>
    );
};

export default FeedbackList;
