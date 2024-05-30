import { COLOR } from "@/Theme/color";
import { PlaySvg } from "@/assets/svgs";
import { types } from "@babel/core";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { moderateScale } from "react-native-size-matters";

const RenderItem = () => (
  <View style={styles.item}>
    <View style={styles.messageArea}>
      <View style={styles.iconArea}>
        <PlaySvg />
      </View>
      <Text style={styles.historyText}>Hie,here any body else;</Text>
    </View>
    <View style={styles.itemBottomArea}>
      <Text style={styles.itemTimeText}>05:00 am</Text>
    </View>
  </View>
);

export default () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView>
          <View style={styles.main}>
            <Text style={styles.dateTitle}>Today</Text>
            {Array(4)
              .fill("")
              .map((e) => (
                <RenderItem />
              ))}
            <Text style={styles.dateTitle}>Yesterday</Text>
            {Array(4)
              .fill("")
              .map((e) => (
                <RenderItem />
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
    paddingBottom: moderateScale(30),
    paddingHorizontal: moderateScale(20),
    gap: 10,
  },
  safeArea: {
    flex: 1,
  },
  dateTitle: {
    fontWeight: "700",
    fontSize: moderateScale(21),
    marginVertical: moderateScale(10),
    color: COLOR.BLUE_900,
    paddingLeft: moderateScale(4),
  },
  item: {
    borderWidth: 1,
    backgroundColor: COLOR.WHITE_100,
    borderLeftWidth: 2,
    paddingRight: moderateScale(18),
    paddingVertical: moderateScale(6),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  iconArea: {
    paddingTop: moderateScale(4),
    marginHorizontal: moderateScale(10),
  },
  messageArea: {
    flexDirection: "row",
  },
  itemBottomArea: {
    width: "100%",
    borderStartColor: "red",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  historyText: {
    flex: 1,
    fontWeight: "700",
    fontSize: moderateScale(14),
    color: COLOR.BLUE_900,
  },
  itemTimeText: {
    fontWeight: "700",
    fontSize: moderateScale(10),
    color: COLOR.BLUE_900,
  },
});
