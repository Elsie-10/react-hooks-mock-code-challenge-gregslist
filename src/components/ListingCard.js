import React from "react";

function ListingCard({ listing, onDelete, onToggleFavorite }) {
  const { id, description, image, location, isFavorited } = listing;
  return (
    <li className="card">
      <div className="image">
      <span className="price">$0</span>
        <img src={image || "https://via.placeholder.com/300x300"} alt={description} />
      </div>
      <div className="details">
        <button
          className={`emoji-button favorite ${isFavorited ? "active" : ""}`}
          onClick={() => onToggleFavorite(id)}
        >
          {isFavorited ? "★" : "☆"}
        </button>
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={() => onDelete(id)}>
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
