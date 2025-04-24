import React,{useState,useEffect}from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [listings, setListings] = useState([]);
  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((data) => {
        const listingsWithFavorites = data.map((l) => ({ ...l, isFavorited: false }));
        setListings(listingsWithFavorites);
      });
  }, []);

  function handleDelete(id) {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setListings((prev) => prev.filter((l) => l.id !== id));
      }
    });
  }

  function toggleFavorite(id) {
    setListings((prev) =>
      prev.map((l) =>
        l.id === id ? { ...l, isFavorited: !l.isFavorited } : l
      )
    );
  }

  return (
    <main>
      <ul className="cards">
      {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            listing={listing}
            onDelete={handleDelete}
            onToggleFavorite={toggleFavorite}
          />
        ))}
     
        {/* use the ListingCard component to display listings */}
      </ul>
    </main>
  );
}

export default ListingsContainer;
