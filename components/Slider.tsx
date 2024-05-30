import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Slider from "@react-native-community/slider";
import prettyMilliseconds from "pretty-ms";

const formatTime = (millis) => {
  const minutes = Math.floor(millis / 1000 / 60);
  const seconds = Math.floor((millis / 1000) % 60);
  return millis ? `${minutes}:${seconds < 10 ? "0" : ""}${seconds}` : `0:00`;
};
export const CustomSlider = ({ start, end, current, onChange }) => {
  return (
    <View style={styles.main}>
      <Text>{formatTime(current)}</Text>
      <Slider
        value={current}
        minimumValue={start}
        maximumValue={end}
        onValueChange={onChange}
        style={styles.sliderStyle}
      />
      <Text>{formatTime(end)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
  },
  sliderStyle: {
    width: "70%",
  },
});
