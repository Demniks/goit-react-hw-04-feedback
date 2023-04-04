import React, { Component } from 'react';
import Feedback from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  stateOptions = Object.keys(this.state);

  onLeaveFeedback = feedback => {
    this.setState(prevState => {
      return { [feedback]: prevState[feedback] + 1 };
    });
  };

  totalFeedbackCount() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  positiveFeedbackCount(good) {
    const total = this.totalFeedbackCount();
    if (!total) {
      return 0;
    }
    const count = this.state[good];
    const percentage = Number(((count / total) * 100).toFixed(2));
    return percentage;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.totalFeedbackCount();
    const positive = this.positiveFeedbackCount('good');

    return (
      <>
        <Section text="Please leave feedback!">
          <Feedback
            options={this.stateOptions}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        {total !== 0 ? (
          <Section text="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positiveFeedback={positive}
            />
          </Section>
        ) : (
          <Notification text="There is no feedback" />
        )}
      </>
    );
  }
}

export default App;
