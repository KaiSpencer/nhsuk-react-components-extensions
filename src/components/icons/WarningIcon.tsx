import React, { HTMLProps } from 'react';

interface WarningIconProps extends HTMLProps<SVGSVGElement> {
  crossOrigin?: '' | 'anonymous' | 'use-credentials' | undefined;
}

const WarningIcon: React.FC<WarningIconProps> = props => (
  <svg viewBox="0 0 94 84" {...props}>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-3.000000, -8.000000)" fillRule="nonzero">
        <g transform="translate(3.779947, 8.633409)">
          <path
            d="M90.8930126,64.0811458 L57.1894206,6.34529674 C54.9711174,2.42788289 50.7739394,-2.84217094e-14 46.2200528,-2.84217094e-14 C41.6661663,-2.84217094e-14 37.4689882,2.42788289 35.250685,6.34529674 L1.75643213,64.0811458 C-0.537713182,67.8922222 -0.587720382,72.6207468 1.62532665,76.4780706 C3.83837369,80.3353944 7.97657929,82.7325678 12.4745931,82.762817 L79.9655126,82.762817 C84.5009389,82.8068426 88.7081638,80.4389226 90.9724747,76.5678531 C93.2367856,72.6967837 93.2064125,67.9239512 90.8930126,64.0811458 Z"
            fill="#FFB81C"
          />
          <path
            d="M49.2000528,53.9465905 L42.3600528,53.9465905 L41.2200528,24.3665905 L50.4600528,24.3665905 L49.2000528,53.9465905 Z M50.0400528,68.2465905 L41.6400528,68.2465905 L41.6400528,59.8465905 L50.0400528,59.8465905 L50.0400528,68.2465905 Z"
            fill="#212B32"
          />
        </g>
      </g>
    </g>
  </svg>
);

WarningIcon.defaultProps = {
  height: 84,
  width: 94,
};

export default WarningIcon;
