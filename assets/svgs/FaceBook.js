import * as React from "react";
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";
export const FaceBookSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <Path fill="url(#a)" d="M0 0h48v48H0z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#b" transform="scale(.01563)" />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,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"
        id="b"
        width={64}
        height={64}
      />
    </Defs>
  </Svg>
);
