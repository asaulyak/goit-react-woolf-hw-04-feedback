import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { useEffect, useState } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [stats, setStats] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const [total, setTotal] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  useEffect(() => {
    const totalUpdated = Object.values(stats).reduce(
      (acc, current) => acc + current,
      0
    );

    const positivePercentageUpdated = Math.floor(
      (stats.good / totalUpdated) * 100
    );

    setTotal(totalUpdated);
    setPositivePercentage(positivePercentageUpdated);
  }, [stats]);

  const onLeaveFeedback = key => {
    setStats(prev => ({
      ...prev,
      [key]: prev[key] + 1,
    }));
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(stats)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title={'Statistics'}>
        {total ? (
          <Statistics
            good={stats.good}
            neutral={stats.neutral}
            bad={stats.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification />
        )}
      </Section>
    </div>
  );
};
