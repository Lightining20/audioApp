// import React from "react";
// import { StyleSheet, View } from "react-native";
// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
//   withTiming,
//   withRepeat,
// } from "react-native-reanimated";
// const SoundWave = () => {
//   const offset = useSharedValue<number>(0);

//   const animatedStyles = useAnimatedStyle(() => ({
//     transform: [{ translateY: offset.value }],
//   }));

//   React.useEffect(() => {
//     offset.value = withRepeat(
//       // highlight-next-line
//       withTiming(-offset.value, { duration: 1500 }),
//       -1,
//       true
//     );
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Animated.View style={[styles.box, animatedStyles]} />
//     </View>
//   );
// };
// export default SoundWave;

// const styles = StyleSheet.create({
//   container: {
//     position: "relative",
//     flex: 1,
//     backgroundColor: "red",
//     alignItems: "center",
//     justifyContent: "center",
//     height: "100%",
//   },
//   box: {
//     height: 20,
//     width: 3,
//     backgroundColor: "#b58df1",
//     borderRadius: 20,
//   },
// });
import { COLOR } from "@/Theme/color";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  cancelAnimation,
} from "react-native-reanimated";
import { moderateScale } from "react-native-size-matters";

const SoundWave = ({ isAnimating = false }: { isAnimating: Boolean }) => {
  useEffect(() => {
    if (isAnimating) {
      startAnimation();
    } else {
      stopAnimation();
    }
  }, [isAnimating]);

  const lineCount = 5;
  const lineHeights = [
    {
      init: 10,
      max: 40,
    },
    {
      init: 40,
      max: 20,
    },
    {
      init: 30,
      max: 10,
    },
    {
      init: 14,
      max: 10,
    },
    {
      init: 35,
      max: 10,
    },
  ];
  const heights = Array(5)
    .fill("")
    .map((_, i) => ({
      animationValue: useSharedValue(lineHeights[i].init),
      [lineHeights[i].init]: lineHeights[i].init,
      [lineHeights[i].max]: lineHeights[i].max,
    }));
  const startAnimation = () => {
    heights.forEach((height, index) => {
      heights[index].animationValue.value = withRepeat(
        withTiming(lineHeights[index].max, { duration: 1000 }),
        -1,
        true
      );
    });
  };

  const stopAnimation = () => {
    heights.forEach((item, index) => {
      cancelAnimation(item.animationValue);
      item.animationValue.value = lineHeights[index].init;
    });
  };

  return (
    <View style={styles.waveContainer}>
      {heights.map((height, index) => (
        <Animated.View
          key={index}
          style={[
            styles.box,
            useAnimatedStyle(() => ({
              height: height.animationValue.value,
            })),
          ]}
        />
      ))}
    </View>
  );
};

export default SoundWave;

const styles = StyleSheet.create({
  waveContainer: {
    width: moderateScale(60),
    height: moderateScale(60),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  box: {
    width: moderateScale(6),
    backgroundColor: COLOR.BLUE_400,
    borderRadius: moderateScale(20),
  },
});
