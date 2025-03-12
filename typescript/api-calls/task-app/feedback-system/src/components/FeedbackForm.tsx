import React, { useState } from "react";
import { Feedback, Rating } from "../types/feedbackTypes";

interface FeedbackFormProps {
    addFeedback: (feedback: Feedback) => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ addFeedback }) => {
    const [formData, setFormData] = useState<Omit<Feedback, "id">>({
        name: "",
        email: "",
        date: "",
        foodRating: Rating.FIVE,
        serviceRating: Rating.FIVE,
        ambienceRating: Rating.FIVE,
        comments: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.date) return alert("Please fill all required fields");

        const newFeedback: Feedback = { ...formData, id: Date.now() };
        addFeedback(newFeedback);
        setFormData({ name: "", email: "", date: "", foodRating: Rating.FIVE, serviceRating: Rating.FIVE, ambienceRating: Rating.FIVE, comments: "" });
    };

    return (
        <form onSubmit={handleSubmit} className="feedback-form">
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <input type="date" name="date" value={formData.date} onChange={handleChange} required />

            <label>Food Rating</label>
            <select name="foodRating" value={formData.foodRating} onChange={handleChange}>
                {Object.values(Rating).filter((r) => typeof r === "number").map((r) => (
                    <option key={r} value={r}>{r} Stars</option>
                ))}
            </select>

            <textarea name="comments" placeholder="Additional Comments" value={formData.comments} onChange={handleChange} />

            <button type="submit">Submit Feedback</button>
        </form>
    );
};

export default FeedbackForm;
