import React from 'react';
import { LIGHT_GRAY } from '../../constants';

const Phone = props => {
  const color = props.color ? props.color : LIGHT_GRAY;

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
        d="M11.2175 8.90169L9.73583 8.73253C9.38 8.69169 9.03 8.81419 8.77917 9.06503L7.70583 10.1384C6.055 9.29836 4.70167 7.95086 3.86167 6.29419L4.94083 5.21503C5.19167 4.96419 5.31417 4.61419 5.27333 4.25836L5.10417 2.78836C5.03417 2.19919 4.53833 1.75586 3.94333 1.75586H2.93417C2.275 1.75586 1.72667 2.30419 1.7675 2.96336C2.07667 7.94503 6.06083 11.9234 11.0367 12.2325C11.6958 12.2734 12.2442 11.725 12.2442 11.0659V10.0567C12.25 9.46753 11.8067 8.97169 11.2175 8.90169Z"
        fill={color}
      />
    </svg>
  );
};

export default Phone;
