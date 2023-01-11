// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <div>
            <button type="button" onClick={() => onLeaveFeedback(option)}>
              {option}
            </button>
          </div>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
};
