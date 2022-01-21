import PropTypes from 'prop-types';

function FeedbackStats({ feedback }) {
  // Calculate ratings avg
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  // For showing only 1 decimal in average rating we use toFixed(1) and replace trailing zeroes
  average = average.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      {/* if we don't have anything avg gives NaN and if NaN is there show 0 */}
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackStats;
