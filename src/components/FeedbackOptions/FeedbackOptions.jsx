import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => {
        return (
          <Button
            type="button"
            key={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </Button>
        );
      })}
    </>
  );
};

export default Feedback;

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
