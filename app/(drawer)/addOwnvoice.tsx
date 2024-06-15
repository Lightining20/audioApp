import { COLOR } from "@/Theme/color";
import { RecordingMicSvg } from "@/assets/svgs";
import SoundWave from "@/components/SoundWave";
import { BASE_URL, END_POINTS } from "@/constants/appConstants";
import { getItem } from "@/utils/localStorage";
import { Audio } from "expo-av";
import { useEffect, useState } from "react";
import {
  PermissionsAndroid,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { moderateScale } from "react-native-size-matters";

export default () => {
  const [isRecording, setIsRecording] = useState<Audio.Recording>();
  const [permissionResponse, requestPermission] = Audio.usePermissions();

  useEffect(() => {
    return () => {};
  }, [isRecording]);

  useEffect(() => {
    const askPermission = async () => {
      if (permissionResponse?.status !== "granted") {
        await requestPermission();
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
        );
        console.log(
          "🚀 ~ file: addOwnvoice.tsx:154 ~ askPermission ~ granted:",
          granted
        );
      }
    };
    askPermission();
  }, []);

  const startStopRecording = async () => {
    try {
      if (!isRecording) {
        const { recording } = await Audio.Recording.createAsync(
          Audio.RecordingOptionsPresets.HIGH_QUALITY
        );
        setIsRecording(recording);
      } else {
        await isRecording.stopAndUnloadAsync();
        await Audio.setAudioModeAsync({ allowsRecordingIOS: false });

        const uri = isRecording.getURI();

        setIsRecording(undefined);

        const formData = new FormData();

        formData.append("file", {
          uri: uri,
          type: "audio/m4a",
          name: uri?.split("/").at(-1),
        });

        const a = await fetch(
          "https://7fce-113-193-115-75.ngrok-free.app/api/upload-audio",
          {
            body: formData,
            method: "POST",
            headers: { Authorization: await getItem("TOKEN") },
          }
        ).then((res) => res.json());

        console.log("🚀 ~ startStopRecording ~ jsonResponse:", a);
      }

      // recording.setOnRecordingStatusUpdate((status) => {
      //   setRecordingDuration(status.durationMillis);
      // });
    } catch (err) {
      console.log("🚀 ~ startStopRecording ~ err:", err);
    }
  };

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
            <SoundWave isAnimating={!!isRecording} />
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={startStopRecording}
              style={styles.recordingButton}
            >
              <RecordingMicSvg />
            </TouchableOpacity>
            <SoundWave reverse isAnimating={!!isRecording} />
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

// import { useEffect, useState } from "react";
// import {
//   View,
//   StyleSheet,
//   Pressable,
//   Text,
//   FlatList,
//   Modal,
//   Alert,
//   Platform,
//   PermissionsAndroid,
// } from "react-native";
// import { Audio } from "expo-av";
// import * as FileSystem from "expo-file-system";
// import { useNavigation } from "expo-router";
// import { BASE_URL, END_POINTS } from "@/constants/appConstants";
// import axios from "../../services/axios";

// export default function App() {
//   const navigation = useNavigation();
//   const [recording, setRecording] = useState();
//   const [record, setRecord] = useState("");
//   const [permissionResponse, requestPermission] = Audio.usePermissions();
//   const [modal, setModal] = useState({ state: false, data: {} });
//   const [sound, setSound] = useState();
//   const [playbackStatus, setPlaybackStatus] = useState(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isRecording, setIsRecording] = useState(false);
//   const [recordingDuration, setRecordingDuration] = useState(0);

//   const saveRecordingToFile = async (uri) => {
//     try {
//       const fileName = `recording-${Date.now()}.m4a`;
//       const directory = `${FileSystem.documentDirectory}audioRecording`; // Adjust directory path as needed
//       const destinationUri = `${directory}/${fileName}`;

//       // Ensure the directory exists and is writable
//       await FileSystem.makeDirectoryAsync(directory, { intermediates: true });

//       await FileSystem.moveAsync({
//         from: uri,
//         to: destinationUri,
//       });

//       console.log("Recording saved to:", destinationUri);
//       return destinationUri;
//     } catch (error) {
//       console.error("Error saving recording to file", error);
//     }
//   };

//   const saveFile = async (uri, filename, mimetype = "video/mp4") => {
//     if (Platform.OS === "android") {
//       try {
//         const permissions =
//           await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
//         console.log("Permissions:", permissions);

//         if (permissions.granted) {
//           const base64 = await FileSystem.readAsStringAsync(uri, {
//             encoding: FileSystem.EncodingType.Base64,
//           });

//           const newFileUri = `${permissions.directoryUri}/${filename}`;

//           console.log(
//             "🚀 ~ file: addOwnvoice.tsx:228 ~ saveFile ~ newFileUri:",
//             newFileUri
//           );
//           await FileSystem.writeAsStringAsync(newFileUri, base64, {
//             encoding: FileSystem.EncodingType.Base64,
//           });

//           console.log("File saved:", newFileUri);
//         } else {
//           console.log("Directory permission not granted.");
//         }
//       } catch (error) {
//         console.error("Error saving file:", error);
//       }
//     } else {
//       console.log(
//         "Saving files using Storage Access Framework is supported only on Android."
//       );
//     }
//   };

//   const setupSound = async (uri) => {
//     const { sound } = await Audio.Sound.createAsync({ uri });

//     sound.setOnPlaybackStatusUpdate((status) => {
//       setPlaybackStatus(status);
//     });
//     setSound(sound);
//   };

//   const pauseSound = async () => {
//     if (sound) {
//       await sound.pauseAsync();
//       setIsPlaying(false);
//     }
//   };

//   const resumeSound = async () => {
//     if (sound) {
//       await sound.playAsync();
//       setIsPlaying(true);
//     }
//   };

//   const playSound = async () => {
//     if (sound) {
//       await sound.unloadAsync();
//       setSound(null);
//     }

//     const { sound: newSound } = await Audio.Sound.createAsync({
//       uri: modal.data.url,
//     });
//     setSound(newSound);

//     newSound.setOnPlaybackStatusUpdate((status) => {
//       setPlaybackStatus(status);
//     });
//     await newSound.playAsync();
//     setIsPlaying(true);
//   };

//   const formatTime = (millis) => {
//     const minutes = Math.floor(millis / 1000 / 60);
//     const seconds = Math.floor((millis / 1000) % 60);
//     return millis ? `${minutes}:${seconds < 10 ? "0" : ""}${seconds}` : `0:00`;
//   };

//   return (
//     <View style={styles.container}>
//       <Pressable style={styles.showRecordTiming}>
//         <Text style={styles.timeText}>{formatTime(recordingDuration)}</Text>
//       </Pressable>
//       <Pressable
//         style={styles.recordHandler}
//         onPress={() => (isRecording ? stopRecording() : startRecording())}
//       >
//         {isRecording ? (
//           <View style={styles.stopeRecord} />
//         ) : (
//           <View style={styles.startRecord} />
//         )}
//       </Pressable>
//       <Modal
//         visible={modal.state}
//         onRequestClose={() => setModal({ state: false, data: {} })}
//       >
//         {playbackStatus && (
//           <Text>
//             {`Current Time: ${formatTime(
//               playbackStatus.positionMillis
//             )} / ${formatTime(playbackStatus.durationMillis)}`}
//           </Text>
//         )}

//         <Text
//           style={{ height: 40, backgroundColor: "lightgreen" }}
//           onPress={playSound}
//         >
//           start
//         </Text>
//         <Text
//           style={{ height: 40, backgroundColor: "lightgreen" }}
//           onPress={resumeSound}
//         >
//           resume
//         </Text>
//         <Text
//           style={{ height: 40, backgroundColor: "red" }}
//           onPress={pauseSound}
//         >
//           pause
//         </Text>
//       </Modal>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 20,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#ecf0f1",
//     padding: 10,
//   },
//   stopeRecord: {
//     backgroundColor: "red",
//     width: 40,
//     height: 40,
//     borderRadius: 4,
//   },
//   startRecord: {
//     backgroundColor: "red",
//     width: 60,
//     height: 60,
//     borderRadius: 40,
//   },
//   recordHandler: {
//     borderWidth: 1,
//     width: 76,
//     height: 76,
//     borderRadius: 50,
//     justifyContent: "center",
//     alignItems: "center",
//     position: "absolute",
//     bottom: 20,
//   },
//   showRecordTiming: {
//     height: 60,
//     borderRadius: 50,
//     justifyContent: "center",
//     alignItems: "center",
//     position: "absolute",
//     bottom: 120,
//   },
//   timeText: {
//     fontSize: 20,
//   },
// });
