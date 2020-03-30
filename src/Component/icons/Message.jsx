import React from 'react';
import { LIGHT_GRAY } from '../../constants';

const Message = props => {
  const color = props.color ? props.color : LIGHT_GRAY;

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={props.style}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.66667 0.833328H17.3333C18.3417 0.833328 19.1667 1.65833 19.1667 2.66666V13.6667C19.1667 14.675 18.3417 15.5 17.3333 15.5H4.5L0.833332 19.1667V2.66666C0.833332 1.65833 1.65833 0.833328 2.66667 0.833328ZM9.86096 12.7397L12.531 7.73969C12.711 7.39969 12.461 6.99969 12.091 6.99969H10.921V3.49969C10.921 2.97969 10.221 2.80969 9.98096 3.25969L7.31096 8.25969C7.13096 8.59969 7.37096 8.99969 7.75096 8.99969H8.92096V12.4997C8.92096 13.0197 9.62096 13.1897 9.86096 12.7397Z"
        fill={color}
      />
    </svg>
  );
};

export default Message;
