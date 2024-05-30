import { TouchableOpacity, View } from "react-native";
import { Drawer } from "expo-router/drawer";
import { COLOR } from "@/Theme/color";
import { DrawerSvg } from "@/assets/svgs";
import { moderateScale } from "react-native-size-matters";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import CustomDrawer from "@/components/CustomDrawer";

export default () => {
  const navigation = useNavigation();
  return (
    <Drawer
      drawerContent={() => <CustomDrawer />}
      screenOptions={{
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            style={{ padding: 20 }}
          >
            <DrawerSvg width={moderateScale(30)} height={moderateScale(30)} />
          </TouchableOpacity>
        ),
        headerStyle: { backgroundColor: COLOR.BLUE_400 },
        headerTitleStyle: {
          color: COLOR.BLUE_900,
          fontSize: moderateScale(28),
        },
      }}
    >
      <Drawer.Screen name="index" options={{ title: "VoiceMatic" }} />
      <Drawer.Screen name="addOwnvoice" options={{ title: "Add own voice" }} />
      <Drawer.Screen name="privacyPolicy" />
      <Drawer.Screen name="rateApp" />
      <Drawer.Screen name="saveAudio" />
      <Drawer.Screen name="setting" options={{ title: "Setting" }} />
      <Drawer.Screen name="ShareApp" />
      <Drawer.Screen name="History" options={{ title: "History" }} />
    </Drawer>
  );
};
