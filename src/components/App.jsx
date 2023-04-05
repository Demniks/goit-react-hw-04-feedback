import React, { useState } from 'react';
import Feedback from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = Object.keys({ good, neutral, bad });

  function onLeaveFeedback(feedback) {
    switch (feedback) {
      case 'good':
        setGood(feedback => feedback + 1);
        break;
      case 'neutral':
        setNeutral(feedback => feedback + 1);
        break;
      case 'bad':
        setBad(feedback => feedback + 1);
        break;

      default:
        break;
    }
  }

  function totalFeedbackCount() {
    return good + neutral + bad;
  }

  function positiveFeedbackCount() {
    const total = totalFeedbackCount();

    return !total ? '0' : Math.round((good / total) * 10000) / 100;
  }

  return (
    <>
      <Section text="Please leave feedback!">
        <Feedback options={options} onLeaveFeedback={onLeaveFeedback} />
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
}

export default App;
