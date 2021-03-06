import React from 'react';
import { LIGHT_GRAY } from '../../constants';

const Reply = props => {
  const color = props.color ? props.color : LIGHT_GRAY;

  return (
    <svg
      width="11"
      height="12"
      viewBox="0 0 11 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={props.style}
    >
      <path
        d="M10.1933 8.47335L7.14 11.5267C6.88 11.7867 6.45333 11.7867 6.19333 11.5267C5.93333 11.2667 5.93333 10.84 6.19333 10.58L8.11333 8.66669H1.33333C0.966664 8.66669 0.666664 8.36669 0.666664 8.00002V1.33335C0.666664 0.966687 0.966664 0.666687 1.33333 0.666687C1.7 0.666687 2 0.966687 2 1.33335V7.33335H8.11333L6.19333 5.42002C5.93333 5.16002 5.93333 4.73335 6.19333 4.47335C6.45333 4.21335 6.88 4.21335 7.14 4.47335L10.1933 7.52669C10.4533 7.78669 10.4533 8.21335 10.1933 8.47335Z"
        fill={color}
      />
    </svg>
  );
};

export default Reply;
