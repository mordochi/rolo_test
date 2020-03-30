import React from 'react';
import { PURPLE } from '../../constants';

const Voice = props => {
  const color = props.color ? props.color : PURPLE;

  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={props.style}
    >
      <path
        d="M5.25 7.58335C6.53866 7.58335 7.58333 6.53868 7.58333 5.25002C7.58333 3.96136 6.53866 2.91669 5.25 2.91669C3.96133 2.91669 2.91666 3.96136 2.91666 5.25002C2.91666 6.53868 3.96133 7.58335 5.25 7.58335Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.1125 2.54915C10.92 2.28081 10.955 1.91915 11.1883 1.68581C11.4742 1.39998 11.9642 1.42331 12.2092 1.74415C13.8192 3.87331 13.8133 6.69081 12.2092 8.75581C11.9642 9.07665 11.48 9.09998 11.1942 8.81415L11.1767 8.79665C10.9492 8.56915 10.9083 8.20748 11.095 7.94498C12.2558 6.28831 12.2617 4.14748 11.1125 2.54915ZM9.02417 4.53248C9.21084 4.99331 9.21084 5.50665 9.02417 5.96748C8.91334 6.24165 8.96 6.55081 9.17 6.76081L9.1875 6.77831C9.52584 7.11665 10.1033 7.04665 10.325 6.62081C10.7683 5.77498 10.7683 4.78331 10.3133 3.90248C10.0917 3.47081 9.50834 3.38915 9.16417 3.73331L9.15834 3.73915C8.96 3.94331 8.91334 4.25831 9.02417 4.53248ZM5.25 8.74998C3.6925 8.74998 0.583336 9.53165 0.583336 11.0833V11.6666C0.583336 11.9875 0.845836 12.25 1.16667 12.25H9.33334C9.65417 12.25 9.91667 11.9875 9.91667 11.6666V11.0833C9.91667 9.53165 6.8075 8.74998 5.25 8.74998Z"
        fill={color}
      />
    </svg>
  );
};

export default Voice;
