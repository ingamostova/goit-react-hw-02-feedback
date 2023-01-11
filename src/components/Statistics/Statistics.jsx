import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, title }) => {
  return (
    <>
      <h2>{title}</h2>
      <div>
        <p>good: {good}</p>
        <p>neutral: {neutral}</p>
        <p>bad: {bad}</p>
      </div>
    </>
  );
};
