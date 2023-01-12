// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import { List, Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map((option, idx) => {
        return (
          <li key={idx}>
            <Btn type="button" onClick={() => onLeaveFeedback(option)}>
              {option}
            </Btn>
          </li>
        );
      })}
    </List>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
