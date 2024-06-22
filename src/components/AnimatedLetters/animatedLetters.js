import './animatedLetters.scss';
import PropTypes from 'prop-types';
import React from 'react';

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span
          key={char + i}
          className={`${letterClass} _${i + idx}`}
          style={{ display: 'inline-block', animationDelay: letterClass === 'text-animate' ? `${i * 0.1}s` : '0s' }} 
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

AnimatedLetters.propTypes = {
  letterClass: PropTypes.string.isRequired,
  strArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  idx: PropTypes.number.isRequired,
};

export default AnimatedLetters;
