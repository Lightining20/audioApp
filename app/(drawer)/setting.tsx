import { COLOR } from "@/Theme/color";
import { height } from "@/Theme/matrix";
import {
  CustomerCareSvg,
  NetworkSvg,
  PlaySvg,
  ThemeSvg,
  PrivacySvg,
  RoundedCheck,
} from "@/assets/svgs";
import { types } from "@babel/core";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { moderateScale } from "react-native-size-matters";

const settingItem = [
  { icon: () => <ThemeSvg />, name: "App theme" },
  { icon: () => <NetworkSvg />, name: "Voice convert Language" },
  { icon: () => <CustomerCareSvg />, name: "Contact Us" },
  { icon: () => <PrivacySvg />, name: "Privacy policy" },
  { icon: () => <RoundedCheck />, name: "Licence and Attribute" },
];

export default () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.main}>
            {settingItem.map((e, i) => (
              <View key={`${i}SETTING`} style={styles.item}>
                <View style={styles.iconArea}>{e.icon()}</View>
                <View style={styles.itemTextContainer}>
                  <Text style={styles.itemText}>{e.name}</Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: moderateScale(24),
    paddingVertical: moderateScale(40),
    gap: moderateScale(20),
  },
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  item: {
    flexDirection: "row",
    height: moderateScale(46),
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
  itemBottomArea: {
    justifyContent: "flex-end",
  },
  iconArea: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: moderateScale(30),
  },
  itemTimeText: {
    fontWeight: "700",
    fontSize: moderateScale(10),
    color: COLOR.BLUE_900,
  },
  itemText: {
    fontWeight: "700",
    fontSize: moderateScale(14),
    color: COLOR.BLUE_900,
  },

  itemTextContainer: {
    flex: 1,
    justifyContent: "center",
  },
});
