import React from 'react';

const RatingList = (props) => {
  return (
    <div className="review-list-entry">
      <div>
        Cleanliness {parseFloat(props.avgcleanlinessRating).toFixed(1)}
      </div>
      <div>
        Communication {parseFloat(props.avgcommunicationRating).toFixed(1)}
      </div>
      <div>
        Check-in {parseFloat(props.avgcheckInRating).toFixed(1)}
      </div>
      <div>
        Accuracy {parseFloat(props.avgaccuracyRating).toFixed(1)}
      </div>
      <div>
        Location {parseFloat(props.avglocationRating).toFixed(1)}
      </div>
      <div>
        Value {parseFloat(props.avgvalueRating).toFixed(1)}
      </div>
    </div>
  );
};

export default RatingList;