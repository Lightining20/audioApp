import Ionicons from "@expo/vector-icons/Ionicons";
import {
  StyleSheet,
  Image,
  Platform,
  View,
  Button,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import { supabase } from "@/services/googleAuth";
import { useNavigation } from "expo-router";
import { setAsyncItem } from "@/utils/storageHandler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { FaceBookSvg, GoogleSvg, Logo } from "@/assets/svgs";
import { moderateScale } from "../../Theme/matrix";
import { COLOR } from "@/Theme/color";
import { useState } from "react";
export default function TabTwoScreen() {
  GoogleSignin.configure({
    scopes: ["https://www.googleapis.com/auth/drive.readonly"],
    webClientId:
      "728293211693-ch3mnmu4prekuoj55m9j55jtlcl0ucp4.apps.googleusercontent.com",
  });

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [error, setError] = useState({
    email: "",
    pass: "",
    confirmPass: "",
  });

  const navigation = useNavigation();
  const onGooglePress = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(
        "🚀 ~ file: register.tsx:47 ~ onGooglePress ~ userInfo:",
        userInfo.user
      );
    } catch (error: any) {
      console.log("🚀 ~ file: explore.tsx:19 ~ onPress={ ~ error:", error);
    }
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea} edges={["top"]}>
        <ScrollView style={styles.scrollView}>
          <View>
            <View style={styles.logo}>
              <Logo
                width={moderateScale(98)}
                height={moderateScale(98)}
                viewBox="0 0 250 250"
              />
            </View>
            <View>
              <Text style={styles.label}>Email id</Text>
              <TextInput
                onChangeText={(e) => setEmail(e)}
                style={styles.inputFieled}
              />
              {error.email && (
                <Text style={styles.errorText}>{error.email}</Text>
              )}
            </View>
            <View style={styles.passContainer}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                onChangeText={(e) => setPass(e)}
                style={styles.inputFieled}
              />
              {error.pass && <Text style={styles.errorText}>{error.pass}</Text>}
            </View>
            <View style={styles.passContainer}>
              <Text style={styles.label}>Confirm Password</Text>
              <TextInput
                onChangeText={(e) => setConfirmPass(e)}
                style={styles.inputFieled}
              />
              {error.confirmPass && (
                <Text style={styles.errorText}>{error.confirmPass}</Text>
              )}
            </View>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginText}>Sign up</Text>
            </TouchableOpacity>
            <View style={styles.divider}>
              <View style={styles.HRline} />
              <Text style={styles.dividerText}>Or</Text>
              <View style={styles.HRline} />
            </View>
            <View style={styles.providerContainer}>
              <TouchableOpacity onPress={onGooglePress}>
                <GoogleSvg />
              </TouchableOpacity>
              <FaceBookSvg />
            </View>
            <Text style={styles.signUpDesc}>
              Already have account ?
              <Text
                onPress={() => navigation.navigate("index")}
                style={styles.signUpText}
              >
                Login
              </Text>
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    paddingHorizontal: moderateScale(20),
  },
  logo: {
    marginVertical: moderateScale(45),
    alignSelf: "center",
  },
  errorText: {
    color: COLOR.RED_300,
    marginLeft: moderateScale(4),
  },
  label: {
    color: COLOR.BLUE_900,
    marginLeft: moderateScale(4),
    fontSize: moderateScale(20),
    fontWeight: "700",
  },
  inputFieled: {
    borderRadius: moderateScale(8),
    borderWidth: 1,
    height: moderateScale(46),
  },
  passContainer: {
    marginTop: moderateScale(20),
  },
  loginButton: {
    width: moderateScale(150),
    height: moderateScale(48),
    marginVertical: moderateScale(30),
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLOR.BLUE_900,
    borderRadius: moderateScale(8),
  },
  loginText: {
    color: COLOR.WHITE_100,
    fontSize: moderateScale(28),
    fontWeight: "700",
  },
  divider: {
    flexDirection: "row",
  },
  HRline: {
    flex: 1,
    height: 2,
    backgroundColor: COLOR.BLACK,
    alignSelf: "center",
  },
  dividerText: {
    marginHorizontal: moderateScale(4),
    fontSize: moderateScale(18),
    fontWeight: "700",
  },
  providerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: moderateScale(40),
    marginVertical: moderateScale(20),
  },
  signUpDesc: {
    alignSelf: "center",
    fontWeight: "700",
    fontSize: moderateScale(18),
    color: COLOR.GREY_300,
  },
  signUpText: {
    color: COLOR.BLUE_900,
  },
});
