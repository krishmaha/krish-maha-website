// import './animatedLetters.scss';
// import PropTypes from 'prop-types';
// import React from 'react';

// const AnimatedLetters = ({ letterClass, strArray, idx }) => {
//   const handleMouseEnter = (e) => {
//     e.target.classList.add('rubberBand');
//   };

//   const handleAnimationEnd = (e) => {
//     e.target.classList.remove('rubberBand');
//   };

//   return (
//     <span>
//       {strArray.map((char, i) => (
//         <span
//           key={char + i}
//           className={`${letterClass} _${i + idx}`}
//           onMouseEnter={handleMouseEnter}
//           onAnimationEnd={handleAnimationEnd}
//           style={{ display: 'inline-block', animationDelay: letterClass === 'text-animate' ? `${i * 0.1}s` : '0s' }}
//         >
//           {char === ' ' ? '\u00A0' : char}
//         </span>
//       ))}
//     </span>
//   );
// };

// AnimatedLetters.propTypes = {
//   letterClass: PropTypes.string.isRequired,
//   strArray: PropTypes.arrayOf(PropTypes.string).isRequired,
//   idx: PropTypes.number.isRequired,
// };

// export default AnimatedLetters;

import './animatedLetters.scss';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  const [hoverEnabled, setHoverEnabled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHoverEnabled(true);
    }, 4000); // Adjust this duration to match the initial animation duration
    return () => clearTimeout(timer);
  }, []);

  const handleMouseEnter = (e) => {
    if (hoverEnabled) {
      e.target.classList.add('rubberBand');
    }
  };

  const handleAnimationEnd = (e) => {
    e.target.classList.remove('rubberBand');
  };

  return (
    <span>
      {strArray.map((char, i) => (
        <span
          key={char + i}
          className={`${letterClass} _${i + idx}`}
          onMouseEnter={handleMouseEnter}
          onAnimationEnd={handleAnimationEnd}
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
