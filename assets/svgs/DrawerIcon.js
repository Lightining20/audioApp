import * as React from "react";
import Svg, { Path } from "react-native-svg";
export const DrawerSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M4 6h16M4 12h10M4 18h5"
    />
  </Svg>
);
