import { COLOR } from "@/Theme/color";
import { SaveSvg, SoundSvg, TranslationSvg } from "@/assets/svgs";
import Slider from "@react-native-community/slider";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { moderateScale } from "react-native-size-matters";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";
import BannerModal from "@/components/CustomAd";
const adUnitId = __DEV__
  ? TestIds.BANNER
  : "ca-app-pub-6298877785663646~2737160503";
export default () => {
  const [usertext, setUsertext] = useState("");
  console.log(BannerAdSize.BANNER);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView>
          <BannerAd
            unitId={adUnitId}
            size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
          />
          <View style={styles.main}>
            <View style={styles.translationContainer}>
              <View style={styles.languageContainer}>
                <TranslationSvg />
                <View style={styles.languagePickerContainer}>
                  <Text style={styles.languageText}>English</Text>
                  <Text style={styles.countryText}>United state</Text>
                </View>
              </View>
              <TextInput
                multiline
                onChangeText={(e) => setUsertext(e)}
                style={styles.multiLineInput}
                placeholder="Enter text here..."
                placeholderTextColor={COLOR.GREY_200}
              />

              <View style={styles.soundIcon}>
                <SoundSvg />
              </View>
            </View>
            <View style={styles.musicControl}>
              <View style={styles.musicControlHeader}>
                <Text style={styles.musicHeaderText}>Control Audio</Text>
              </View>
              <View style={styles.controlContainer}>
                <Text style={styles.controlItemText}>Pitch</Text>
                <Slider
                  minimumValue={0}
                  maximumValue={20}
                  style={{ flex: 1 }}
                />
              </View>
              <View style={styles.controlContainer}>
                <Text style={styles.controlItemText}>Speed</Text>
                <Slider
                  minimumValue={0}
                  maximumValue={20}
                  style={{ flex: 1 }}
                />
              </View>
              <View style={styles.controlContainer}>
                <Text style={styles.controlItemText}>Volume</Text>
                <Slider
                  minimumValue={0}
                  maximumValue={20}
                  style={{ flex: 1 }}
                />
              </View>
            </View>
            {!!usertext && (
              <TouchableOpacity style={styles.saveButton}>
                <View style={styles.saveIconArea}>
                  <SaveSvg />
                </View>
                <View style={styles.saveTextArea}>
                  <Text style={styles.savetext}>Save</Text>
                </View>
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    paddingBottom: moderateScale(40),
  },
  safeArea: {
    flex: 1,
    backgroundColor: COLOR.WHITE_100,
  },
  translationContainer: {
    width: moderateScale(337),
    height: moderateScale(207),
    marginVertical: moderateScale(40),
    backgroundColor: COLOR.WHITE_100,
    borderWidth: 1,
    borderRadius: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  languageContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: moderateScale(20),
    marginRight: moderateScale(30),
    borderBottomWidth: 1,
    gap: moderateScale(10),
    marginVertical: moderateScale(8),
    paddingVertical: moderateScale(8),
  },
  languagePickerContainer: {},
  languageText: {
    fontSize: moderateScale(18),
    fontWeight: "700",
    color: COLOR.BLUE_900,
  },
  countryText: {
    fontSize: moderateScale(14),
    fontWeight: "700",
    color: COLOR.BLUE_900,
  },
  multiLineInput: {
    textAlignVertical: "top",
    fontSize: moderateScale(18),
    fontWeight: "700",
    flex: 1,
    marginLeft: moderateScale(20),
    marginRight: moderateScale(30),
    paddingBottom: moderateScale(4),
  },
  blankView: {},
  soundIcon: {
    zIndex: 99,
    backgroundColor: COLOR.WHITE_100,
    borderWidth: 2,
    width: moderateScale(52),
    height: moderateScale(52),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: moderateScale(52),
    position: "absolute",
    bottom: moderateScale(-26),
    right: moderateScale(20),
  },
  musicControl: {
    width: moderateScale(337),
    marginBottom: moderateScale(12),
    backgroundColor: COLOR.WHITE_100,
    borderWidth: 1,
    borderRadius: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },

  musicControlHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: moderateScale(12),
    marginRight: moderateScale(22),
    borderBottomWidth: 1,
    gap: moderateScale(10),
    marginVertical: moderateScale(8),
    paddingVertical: moderateScale(8),
  },
  musicHeaderText: {
    fontSize: moderateScale(16),
    fontWeight: "700",
    color: COLOR.BLUE_900,
  },

  controlContainer: {
    gap: moderateScale(8),
    marginHorizontal: moderateScale(20),
    paddingVertical: moderateScale(10),
  },
  controlItemText: {
    fontSize: moderateScale(16),
    fontWeight: "700",
    color: COLOR.BLUE_900,
  },
  saveButton: {
    width: moderateScale(108),
    borderWidth: 1,
    borderRadius: 3,
    padding: moderateScale(10),
    marginTop: moderateScale(30),
    alignSelf: "center",
    flexDirection: "row",
  },
  saveIconArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  saveTextArea: {
    flex: 1,
  },
  savetext: {
    fontSize: moderateScale(16),
    fontWeight: "700",
    color: COLOR.BLUE_900,
  },
});

// import React, { useEffect } from "react";
// import { Dimensions, StyleSheet, View } from "react-native";
// import Animated, {
//   Easing,
//   useSharedValue,
//   useAnimatedStyle,
//   withRepeat,
//   withTiming,
// } from "react-native-reanimated";

// const { width, height } = Dimensions.get("window");

// const SoundWave = () => {
//   const numberOfLines = 20;
//   const lines = [];

//   for (let i = 0; i < numberOfLines; i++) {
//     lines.push({
//       id: i,
//       value: useSharedValue((Math.random() * height) / 4),
//     });
//   }

//   useEffect(() => {
//     lines.forEach((line) => {
//       line.value.value = withRepeat(
//         withTiming((Math.random() * height) / 4, {
//           duration: 500,
//           easing: Easing.inOut(Easing.ease),
//         }),
//         -1,
//         true
//       );
//     });
//   }, []);

//   return (
//     <View style={styles.container}>
//       {lines.map((line) => (
//         <Animated.View
//           key={line.id}
//           style={[
//             styles.line,
//             {
//               left: (width / numberOfLines) * line.id,
//             },
//             useAnimatedStyle(() => ({
//               height: line.value.value,
//             })),
//           ]}
//         />
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   line: {
//     position: "absolute",
//     width: 4,
//     backgroundColor: "blue",
//     bottom: 0,
//   },
// });

// export default SoundWave;
