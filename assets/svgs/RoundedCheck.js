import * as React from "react";
import Svg, { Path } from "react-native-svg";
export const RoundedCheck = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={29}
    height={29}
    fill="none"
    {...props}
  >
    <Path
      fill="#00215E"
      fillRule="evenodd"
      d="M14.5 28.375c7.663 0 13.875-6.212 13.875-13.875a13.81 13.81 0 0 0-2.297-7.648l-11.03 12.256a3.083 3.083 0 0 1-4.143.404l-5.038-3.779a1.542 1.542 0 1 1 1.85-2.466l5.038 3.779L24.08 4.463A13.827 13.827 0 0 0 14.5.625C6.837.625.625 6.837.625 14.5S6.837 28.375 14.5 28.375Z"
      clipRule="evenodd"
    />
  </Svg>
);
