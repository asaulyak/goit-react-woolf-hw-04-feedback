import css from '../FeedbackOptions/FeedbackOptions.module.css';

export const Section = ({ title, children }) => (
  <section className={css.feedback}>
    {title && <h2 className={css.title}>{title}</h2>}
    {children}
  </section>
);
