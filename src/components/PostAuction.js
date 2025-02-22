import React from "react";

const PostAuction = () => {
  return (
    <div className="post-auction-section">
      <h2>Post an Auction</h2>
      <input type="text" placeholder="Item Name" />
      <input type="number" placeholder="Starting Bid" />
      <input type="text" placeholder="Bidder Name" />
      <button>Submit Auction</button>
    </div>
  );
};

export default PostAuction;
