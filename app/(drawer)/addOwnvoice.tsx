import { COLOR } from "@/Theme/color";
import {
  LeftSideRecordSvg,
  RecordingMicSvg,
  RightSideRecordSvg,
} from "@/assets/svgs";
import SoundWave from "@/components/SoundWave";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";

export default () => {
  const [isRecording, setIsRecording] = useState(false);
  const handleRecording = () => setIsRecording((e) => !e);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.main}>
          <View style={styles.displayTextContainer}>
            <Text style={styles.displayedText}>
              Hello, i am voicematic user i want own my voice translation
            </Text>
          </View>
          <Text style={styles.screenDesc}>SPEAK LOUDLY</Text>

          <View style={styles.musicControl}>
            <SoundWave isAnimating={isRecording} />
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={handleRecording}
              style={styles.recordingButton}
            >
              <RecordingMicSvg />
            </TouchableOpacity>
            <SoundWave isAnimating={isRecording} />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingHorizontal: moderateScale(16),
  },
  main: {
    paddingTop: moderateScale(60),
    gap: moderateScale(80),
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
  displayTextContainer: {
    height: moderateScale(104),
    padding: moderateScale(10),
    borderWidth: 1,
    backgroundColor: COLOR.WHITE_100,
    borderLeftWidth: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  displayedText: {
    flex: 1,
    fontSize: moderateScale(18),
    fontWeight: "700",
    color: COLOR.BLUE_900,
  },
  screenDesc: {
    fontSize: moderateScale(18),
    fontWeight: "700",
    color: COLOR.BLUE_900,
    alignSelf: "center",
  },
  musicControl: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: moderateScale(100),
  },
  recordingButton: {
    width: moderateScale(100),
    height: moderateScale(100),
    marginHorizontal: moderateScale(10),
    borderRadius: moderateScale(100),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLOR.BLUE_900,
  },
});
