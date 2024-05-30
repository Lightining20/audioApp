import * as React from "react";
import Svg, { Path } from "react-native-svg";
export const LeftSideRecordSvg = (props) => (
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
      d="M40 55a2.5 2.5 0 0 1-2.5-2.5v-45a2.5 2.5 0 0 1 5 0v45A2.5 2.5 0 0 1 40 55Zm-30-5a2.5 2.5 0 0 1-2.5-2.5v-35a2.5 2.5 0 0 1 5 0v35A2.5 2.5 0 0 1 10 50Zm20-5a2.5 2.5 0 0 1-2.5-2.5v-25a2.5 2.5 0 0 1 5 0v25A2.5 2.5 0 0 1 30 45Zm20-7.5a2.5 2.5 0 0 1-2.5-2.5V25a2.5 2.5 0 0 1 5 0v10a2.5 2.5 0 0 1-2.5 2.5ZM20 35a2.5 2.5 0 0 1-2.5-2.5v-5a2.5 2.5 0 0 1 5 0v5A2.5 2.5 0 0 1 20 35Z"
      clipRule="evenodd"
    />
  </Svg>
);
