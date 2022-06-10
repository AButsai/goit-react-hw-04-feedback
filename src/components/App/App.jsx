import React, { useState } from 'react';
import { Section } from '../Section';
import { Statistics } from '../Statistics';
import { FeedbackOptions } from '../FeedbackOptions';
import Notification from '../Notification';

const options = ['good', 'neutral', 'bad'];

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleCountFeedback = name => {
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return ((100 / countTotalFeedback()) * good).toFixed();
  };

  const total = countTotalFeedback();
  const positiveFeedbackPercentage = countPositiveFeedbackPercentage();

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
