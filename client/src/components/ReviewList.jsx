import React from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';

const ReviewList = (props) => {
  return (
    <div className="review-list">
      {props.reviewsDisplayed.map((review, i) => (
        <ReviewListEntry key={i} review={review}/>
      ))}
    </div>
  );
};

export default ReviewList;