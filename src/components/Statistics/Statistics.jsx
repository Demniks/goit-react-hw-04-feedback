import PropTypes from 'prop-types';
import { Statistic } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <>
      <Statistic>Good: {good}</Statistic>
      <Statistic>Neutral: {neutral}</Statistic>
      <Statistic>Bad: {bad}</Statistic>
      <Statistic>Total: {total}</Statistic>
      <Statistic>
        Positive feedback: {positiveFeedback}
        <span>%</span>
      </Statistic>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
