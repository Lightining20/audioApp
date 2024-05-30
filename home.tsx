import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Pressable,
  Text,
  FlatList,
  Modal,
} from "react-native";
import { Audio } from "expo-av";
import { useNavigation } from "expo-router";

export default function App() {
  const navigation = useNavigation();
  const [recording, setRecording] = useState();
  const [record, setRecord] = useState("");
  const [permissionResponse, requestPermission] = Audio.usePermissions();
  const [modal, setModal] = useState({ state: false, data: {} });
  const [sound, setSound] = useState();
  const [playbackStatus, setPlaybackStatus] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingDuration, setRecordingDuration] = useState(0);

  useEffect(() => {
    askPermission();
  }, []);

  const askPermission = async () => {
    if (permissionResponse?.status !== "granted") {
      await requestPermission();
    }
  };

  const startRecording = async () => {
    try {
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
      setIsRecording(true);
      setRecordingDuration(0);
      recording.setOnRecordingStatusUpdate((status) => {
        setRecordingDuration(status.durationMillis);
      });
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  };

  const stopRecording = async () => {
    setRecording(undefined);
    setIsRecording(false);
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
    const uri = recording.getURI();
    navigation.navigate("preview", { uri });
  };

  const setupSound = async (uri) => {
    const { sound } = await Audio.Sound.createAsync({ uri });

    sound.setOnPlaybackStatusUpdate((status) => {
      setPlaybackStatus(status);
    });
    setSound(sound);
  };

  const pauseSound = async () => {
    if (sound) {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  };

  const resumeSound = async () => {
    if (sound) {
      await sound.playAsync();
      setIsPlaying(true);
    }
  };

  const playSound = async () => {
    if (sound) {
      await sound.unloadAsync();
      setSound(null);
    }

    const { sound: newSound } = await Audio.Sound.createAsync({
      uri: modal.data.url,
    });
    setSound(newSound);

    newSound.setOnPlaybackStatusUpdate((status) => {
      setPlaybackStatus(status);
    });
    await newSound.playAsync();
    setIsPlaying(true);
  };

  const formatTime = (millis) => {
    const minutes = Math.floor(millis / 1000 / 60);
    const seconds = Math.floor((millis / 1000) % 60);
    return millis ? `${minutes}:${seconds < 10 ? "0" : ""}${seconds}` : `0:00`;
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.showRecordTiming}>
        <Text style={styles.timeText}>{formatTime(recordingDuration)}</Text>
      </Pressable>
      <Pressable
        style={styles.recordHandler}
        onPress={() => (isRecording ? stopRecording() : startRecording())}
      >
        {isRecording ? (
          <View style={styles.stopeRecord} />
        ) : (
          <View style={styles.startRecord} />
        )}
      </Pressable>
      <Modal
        visible={modal.state}
        onRequestClose={() => setModal({ state: false, data: {} })}
      >
        {playbackStatus && (
          <Text>
            {`Current Time: ${formatTime(
              playbackStatus.positionMillis
            )} / ${formatTime(playbackStatus.durationMillis)}`}
          </Text>
        )}

        <Text
          style={{ height: 40, backgroundColor: "lightgreen" }}
          onPress={playSound}
        >
          start
        </Text>
        <Text
          style={{ height: 40, backgroundColor: "lightgreen" }}
          onPress={resumeSound}
        >
          resume
        </Text>
        <Text
          style={{ height: 40, backgroundColor: "red" }}
          onPress={pauseSound}
        >
          pause
        </Text>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
    padding: 10,
  },
  stopeRecord: {
    backgroundColor: "red",
    width: 40,
    height: 40,
    borderRadius: 4,
  },
  startRecord: {
    backgroundColor: "red",
    width: 60,
    height: 60,
    borderRadius: 40,
  },
  recordHandler: {
    borderWidth: 1,
    width: 76,
    height: 76,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
  },
  showRecordTiming: {
    height: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 120,
  },
  timeText: {
    fontSize: 20,
  },
});
