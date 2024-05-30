import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform, View, Button, Text } from "react-native";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import { supabase } from "@/services/googleAuth";
import { useNavigation } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function TabTwoScreen() {
  GoogleSignin.configure({
    scopes: ["https://www.googleapis.com/auth/drive.readonly"],
    webClientId:
      "728293211693-ch3mnmu4prekuoj55m9j55jtlcl0ucp4.apps.googleusercontent.com",
  });

  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <Text style={styles.desc}>Sign In with google</Text>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={async () => {
          try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            if (userInfo.idToken) {
              const { data, error } = await supabase.auth.signInWithIdToken({
                provider: "google",
                token: userInfo.idToken,
              });
              if (!error) {
                await AsyncStorage.setItem("USER_DATA", JSON.stringify(data));
                navigation.reset({
                  routes: [{ name: "home" }],
                });
              }
            } else {
              throw new Error("no ID token present!");
            }
          } catch (error: any) {
            console.log(
              "🚀 ~ file: explore.tsx:19 ~ onPress={ ~ error:",
              error
            );
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  desc: {
    fontSize: 24,
  },
});
