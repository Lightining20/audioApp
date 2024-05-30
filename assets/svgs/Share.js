import * as React from "react";
import Svg, { Path } from "react-native-svg";
export const ShareSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      stroke="#1C274C"
      strokeLinecap="round"
      strokeWidth={2}
      d="M1 12.626A3.125 3.125 0 1 0 4.125 9.5M13.5 5.75l-6.25 4.376M13.5 19.5l-6.25-4.374M16.625 23.876A3.125 3.125 0 1 0 13.5 20.75M19.331 6.063a3.125 3.125 0 1 1-1.144-4.269"
    />
  </Svg>
);
