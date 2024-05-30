import * as React from "react";
import Svg, { Path } from "react-native-svg";
export const RightSideRecordSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={60}
    fill="none"
    {...props}
  >
    <Path
      fill="#5AB2FF"
      fillRule="evenodd"
      d="M20 5a2.5 2.5 0 0 1 2.5 2.5v45a2.5 2.5 0 0 1-5 0v-45A2.5 2.5 0 0 1 20 5Zm30 5a2.5 2.5 0 0 1 2.5 2.5v35a2.5 2.5 0 0 1-5 0v-35A2.5 2.5 0 0 1 50 10Zm-20 5a2.5 2.5 0 0 1 2.5 2.5v25a2.5 2.5 0 0 1-5 0v-25A2.5 2.5 0 0 1 30 15Zm-20 7.5a2.5 2.5 0 0 1 2.5 2.5v10a2.5 2.5 0 0 1-5 0V25a2.5 2.5 0 0 1 2.5-2.5ZM40 25a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-5 0v-5A2.5 2.5 0 0 1 40 25Z"
      clipRule="evenodd"
    />
  </Svg>
);
