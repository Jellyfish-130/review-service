import React from 'react';

const ReviewListEntry = (props) => {
  return (
    <div className="review-list-entry">
      <div>
        {props.review.username}
      </div>
      <div>
        <img src= {props.review.image}></img>
      </div>
      <div>
        {props.review.dateStr}
      </div>
      <div>
        {props.review.review}
      </div>
      <div>
        {parseFloat(props.review.totalRating).toFixed(1)}
      </div>
    </div>
  );
};

export default ReviewListEntry;