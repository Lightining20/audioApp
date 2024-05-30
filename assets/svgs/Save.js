import * as React from "react";
import Svg, { Path } from "react-native-svg";
export const SaveSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    fill="none"
    {...props}
  >
    <Path
      stroke="#00215E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 11.688v5.937A2.375 2.375 0 0 0 3.375 20h14.25A2.375 2.375 0 0 0 20 17.625V15.25M1 5.75V3.375A2.375 2.375 0 0 1 3.375 1h9.704c.63 0 1.234.25 1.68.696l4.545 4.546c.446.445.696 1.05.696 1.68V10.5M14.062 20v-5.938H6.939V20"
    />
  </Svg>
);
