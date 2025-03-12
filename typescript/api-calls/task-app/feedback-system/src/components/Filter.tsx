import React, { useState } from "react";
import { Rating, Feedback } from "../types/feedbackTypes";

interface FilterProps {
    feedbacks: Feedback[];
    setFilteredFeedbacks: (filtered: Feedback[]) => void;
}

const Filter: React.FC<FilterProps> = ({ feedbacks, setFilteredFeedbacks }) => {
    const [selectedRating, setSelectedRating] = useState<number | "">("");
    const [selectedDate, setSelectedDate] = useState<string>("");

    const handleFilter = () => {
        let filtered = [...feedbacks];

        if (selectedRating !== "") {
            filtered = filtered.filter((fb) => fb.foodRating === Number(selectedRating));
        }

        if (selectedDate) {
            filtered = filtered.filter((fb) => fb.date === selectedDate);
        }

        setFilteredFeedbacks(filtered);
    };

    const resetFilters = () => {
        setSelectedRating("");
        setSelectedDate("");
        setFilteredFeedbacks(feedbacks);
    };

    return (
        <div className="filter-container">
            <h3>Filter Feedback</h3>
            <label>Rating:</label>
            <select value={selectedRating} onChange={(e) => setSelectedRating(e.target.value === "" ? "" : Number(e.target.value))}>
                <option value="">All</option>
                {Object.values(Rating)
                    .filter((r) => typeof r === "number")
                    .map((r) => (
                        <option key={r} value={r}>
                            {r} Stars
                        </option>
                    ))}
            </select>

            <label>Date:</label>
            <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />

            <button onClick={handleFilter}>Apply Filter</button>
            <button onClick={resetFilters}>Reset</button>
        </div>
    );
};

export default Filter;
