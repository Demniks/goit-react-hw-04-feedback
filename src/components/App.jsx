import React, { useState } from 'react';
import Feedback from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = { good, neutral, bad };

  function onLeaveFeedback(feedback) {
    switch (feedback) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        break;
    }
  }
  const totalFeedbackCount = () => {
    return Object.values(options).reduce(
      (acc, prevState) => acc + prevState,
      0
    );
    // return good + neutral + bad;
  };

  const positiveFeedbackCount = () => {
    const total = totalFeedbackCount();

    return !total ? '0' : Math.round((good / total) * 10000) / 100;
  };

  return (
    <>
      <Section text="Please leave feedback!">
        <Feedback
          options={Object.keys(options)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      {good || neutral || bad ? (
        <Section text="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedbackCount()}
            positiveFeedback={positiveFeedbackCount()}
          />
        </Section>
      ) : (
        <Notification text="There is no feedback" />
      )}
    </>
  );
};

export default App;
