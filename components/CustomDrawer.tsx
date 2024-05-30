import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLOR } from "@/Theme/color";
import {
  AccountUserSvg,
  HistorySvg,
  HomeSvg,
  MicSvg,
  PrivacySvg,
  SaveSvg,
  SettingSvg,
  ShareSvg,
  StarSvg,
} from "@/assets/svgs";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { moderateScale } from "react-native-size-matters";
import { DrawerItem } from "@react-navigation/drawer";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import { height } from "@/Theme/matrix";

const firstPhase = [
  {
    title: "Home",
    screen: "index",
    icon: () => <HomeSvg />,
  },
  {
    title: "Add Your Ownvoice",
    screen: "addOwnvoice",
    icon: () => <MicSvg />,
  },
  {
    title: "Settings",
    screen: "setting",
    icon: () => <SettingSvg />,
  },
];

const secondPhase = [
  {
    title: "saveAudio",
    screen: "setting",
    icon: () => <SaveSvg />,
  },
  {
    title: "History",
    screen: "History",
    icon: () => <HistorySvg />,
  },
  {
    title: "Rate app",
    screen: "rateApp",
    icon: () => <StarSvg />,
  },
  {
    title: "Share App",
    screen: "ShareApp",
    icon: () => <ShareSvg />,
  },
  {
    title: "Privacy policy ",
    screen: "privacyPolicy",
    icon: () => <PrivacySvg />,
  },
];

const CustomDrawer = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ borderRightWidth: 2, height }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.accountContainer}>
            <View style={styles.userAvatarArea}>
              <AccountUserSvg />
            </View>
            <Text style={styles.userDetailText}>UserName</Text>
            <Text
              style={[
                styles.userDetailText,
                { paddingBottom: moderateScale(10) },
              ]}
            >
              Email2@gmail.com
            </Text>
            <View style={styles.divider} />
          </View>
          <View style={styles.itemContainer}>
            {firstPhase.map((e) => (
              <DrawerItem
                label={e.title}
                labelStyle={styles.label}
                onPress={() =>
                  navigation.dispatch(DrawerActions.jumpTo(e.screen))
                }
                icon={() => (
                  <View
                    style={{
                      width: moderateScale(25),
                      height: moderateScale(25),
                    }}
                  >
                    {e.icon()}
                  </View>
                )}
              />
            ))}
            <View style={styles.divider} />
            {secondPhase.map((e) => (
              <DrawerItem
                label={e.title}
                labelStyle={styles.label}
                onPress={() =>
                  navigation.dispatch(DrawerActions.jumpTo(e.screen))
                }
                icon={() => (
                  <View
                    style={{
                      width: moderateScale(25),
                      height: moderateScale(25),
                    }}
                  >
                    {e.icon()}
                  </View>
                )}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  accountContainer: {
    backgroundColor: COLOR.BLUE_400,
    paddingTop: moderateScale(30),
  },
  userAvatarArea: {
    width: moderateScale(108),
    height: moderateScale(108),
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLOR.GREY_100,
    borderRadius: moderateScale(108),
    marginBottom: moderateScale(10),
  },
  userDetailText: {
    fontSize: moderateScale(14),
    fontWeight: "700",
    alignSelf: "center",
    color: COLOR.BLUE_900,
  },
  label: {
    color: COLOR.BLUE_900,
    fontSize: moderateScale(16),
  },
  divider: {
    height: 1,
    marginLeft: moderateScale(4),
    marginRight: moderateScale(16),
    backgroundColor: COLOR.BLACK,
  },
  itemContainer: {
    paddingLeft: moderateScale(10),
    backgroundColor: COLOR.WHITE_100,
  },
});
