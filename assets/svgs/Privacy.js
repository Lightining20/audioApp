import * as React from "react";
import Svg, { Path } from "react-native-svg";
export const PrivacySvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={29}
    fill="none"
    {...props}
  >
    <Path
      stroke="#00215E"
      strokeLinecap="round"
      strokeWidth={2}
      d="M1 12.817c0-4.157 0-6.235.49-6.934.492-.7 2.446-1.368 6.354-2.706l.745-.255c2.037-.698 3.056-1.046 4.111-1.046 1.055 0 2.074.348 4.111 1.046l.745.255c3.908 1.338 5.863 2.007 6.353 2.706.491.699.491 2.777.491 6.934v2.047c0 3.257-1.088 5.768-2.6 7.687M1.25 17.476c1.115 5.588 5.7 8.466 8.718 9.785.938.41 1.407.615 2.732.615 1.325 0 1.794-.205 2.732-.615.751-.328 1.6-.753 2.468-1.293"
    />
    <Path
      stroke="#426B9E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.16 12.254v6.284c0 1.933-1.163 2.578-2.6 2.578h-5.2c-1.436 0-2.6-.645-2.6-2.578v-6.284c0-2.095 1.164-2.578 2.6-2.578a1.46 1.46 0 0 0 1.463 1.45h2.274c.806 0 1.463-.651 1.463-1.45 1.437 0 2.6.483 2.6 2.578Z"
    />
    <Path
      stroke="#426B9E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.56 9.676c0 .86-.657 1.56-1.463 1.56h-2.274a1.41 1.41 0 0 1-1.034-.458 1.604 1.604 0 0 1-.429-1.102c0-.86.657-1.56 1.463-1.56h2.274c.404 0 .768.173 1.034.457.267.284.429.673.429 1.103Z"
    />
    <Path
      stroke="#426B9E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.36 15.396h2.6M10.36 17.996h5.2"
      opacity={0.4}
    />
  </Svg>
);
