import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
export const NetworkSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        stroke="#00215E"
        strokeWidth={2.5}
        d="M15 28.75c7.594 0 13.75-6.156 13.75-13.75S22.594 1.25 15 1.25m0 27.5C7.406 28.75 1.25 22.594 1.25 15S7.406 1.25 15 1.25m0 27.5c3.75 0 5-6.25 5-13.75S18.75 1.25 15 1.25m0 27.5c-3.75 0-5-6.25-5-13.75s1.25-13.75 5-13.75M2.5 20h25m-25-10h25"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h30v30H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
