import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  const onButtonClick = key => {
    onLeaveFeedback(key);
  };

  return (
    <div className={css.buttons}>
      {options.map(key => (
        <button
          type="button"
          className={css.button}
          key={key}
          onClick={() => onButtonClick(key)}
        >
          {key}
        </button>
      ))}
    </div>
  );
};
