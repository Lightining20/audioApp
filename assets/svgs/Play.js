import * as React from "react";
import Svg, { Path } from "react-native-svg";
export const PlaySvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={27}
    fill="none"
    {...props}
  >
    <Path
      fill="#0F3986"
      d="M1 13.5v8.709c0 2.886 3.168 4.711 5.746 3.31l4.003-2.178M1 8.5V4.791C1 1.905 4.168.08 6.746 1.481l16.015 8.71a3.747 3.747 0 0 1 0 6.618l-8.008 4.355"
    />
    <Path
      stroke="#00215E"
      strokeLinecap="round"
      d="M1 13.5v8.709c0 2.886 3.168 4.711 5.746 3.31l4.003-2.178M1 8.5V4.791C1 1.905 4.168.08 6.746 1.481l16.015 8.71a3.747 3.747 0 0 1 0 6.618l-8.008 4.355"
    />
  </Svg>
);
