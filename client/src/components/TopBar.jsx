import React from 'react';

const TopBar = (props) => {
  return (
    <div className="topbar">
      <div>
        Starr
      </div>
      <div>
        {parseFloat(props.avgtotalRating).toFixed(2)}
      </div>
      <div>
        ({props.numberOfReviews} reviews)
      </div>
    </div>
  );
};

export default TopBar;