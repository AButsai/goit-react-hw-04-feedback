import React, { useState } from 'react';
import { Section } from '../Section';
import { Statistics } from '../Statistics';
import { FeedbackOptions } from '../FeedbackOptions';
import Notification from '../Notification';

export function App() {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleCountFeedback = name => {
    switch (name) {
      case 'good':
        setState({ ...state, good: state.good + 1 });
        break;

      case 'neutral':
        setState({ ...state, neutral: state.neutral + 1 });
        break;

      case 'bad':
        setState({ ...state, bad: state.bad + 1 });
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return Object.values(state).reduce((acc, value) => acc + value, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return ((100 / countTotalFeedback()) * state.good).toFixed();
  };

  const total = countTotalFeedback();
  const positiveFeedbackPercentage = countPositiveFeedbackPercentage();
  const options = Object.keys(state);
  const { good, neutral, bad } = state;

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleCountFeedback}
        />
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedbackPercentage}
          />
        )}
      </Section>
    </div>
  );
}
