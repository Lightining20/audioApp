import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { CustomSlider } from "@/components";
import { useRoute } from "@react-navigation/native";
import { Audio } from "expo-av";
import Ionicons from "@expo/vector-icons/Ionicons";

const preview = () => {
  const route = useRoute();
  const { uri } = route?.params;
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);
  const [sound, setSound] = useState();
  const [loading, setLoading] = useState(true);
  const [playbackStatus, setPlaybackStatus] = useState();

  useEffect(() => {
    setupSound();
  }, []);

  const setupSound = async () => {
    const { sound: newSound } = await Audio.Sound.createAsync({ uri });
    newSound?.setOnPlaybackStatusUpdate((status) => setPlaybackStatus(status));
    setSound(newSound);
    setLoading(false);
  };

  const playSound = async () => {
    try {
      sound?.setOnPlaybackStatusUpdate((status) => setPlaybackStatus(status));
      await sound.playAsync();
      setIsSoundPlaying(true);
    } catch (error) {
      console.log("🚀 ~ file: preview.tsx:32 ~ playSound ~ error:", error);
    }
  };

  const pauseSound = async () => {
    try {
      await sound.pauseAsync();
      setIsSoundPlaying(false);
    } catch (error) {
      console.log("🚀 ~ file: preview.tsx:49 ~ pauseSound ~ error:", error);
    }
  };

  const setSpecificTime = async (millis) => {
    const aspectedTime = playbackStatus?.positionMillis + millis;
    const endTime = playbackStatus?.durationMillis;
    console.log(
      "🚀 ~ file: preview.tsx:55 ~ setSpecificTime ~ endTime:",
      endTime
    );

    if (aspectedTime <= endTime) {
      await sound.playFromPositionAsync(aspectedTime);
      setPlaybackStatus((e) => ({ positionMillis: aspectedTime, ...e }));
    } else if (aspectedTime <= 0) {
      await sound.playFromPositionAsync(0);
      setPlaybackStatus((e) => ({ positionMillis: 0, ...e }));
    } else {
      await sound.playFromPositionAsync(endTime);
      setPlaybackStatus((e) => ({ positionMillis: endTime, ...e }));
    }
  };

  return (
    <View style={styles.main}>
      {loading ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <>
          <Ionicons name="musical-notes-outline" size={200} />
          <View style={styles.sliderArea}>
            <CustomSlider
              current={playbackStatus?.positionMillis}
              start={0}
              end={playbackStatus?.durationMillis}
              onChange={async (value) => {
                await sound.playFromPositionAsync(value);
                setPlaybackStatus((e) => ({ positionMillis: value, ...e }));
              }}
            />
            <View style={styles.soundControllerArea}>
              <TouchableOpacity onPress={() => setSpecificTime(-5000)}>
                <Ionicons name="play-skip-back-outline" size={32} />
              </TouchableOpacity>
              <Text onPress={isSoundPlaying ? pauseSound : playSound}>
                {isSoundPlaying ? (
                  <Ionicons name="pause-outline" size={32} />
                ) : (
                  <Ionicons name="play-outline" size={32} />
                )}
              </Text>
              <TouchableOpacity onPress={() => setSpecificTime(5000)}>
                <Ionicons name="play-skip-forward-outline" size={32} />
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default preview;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  soundControllerArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 200,
  },
  sliderArea: {
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
});
