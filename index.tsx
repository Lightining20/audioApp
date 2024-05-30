import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { ActivityIndicator, Alert, StyleSheet, Text, View } from "react-native";

const Index = () => {
  const navigation = useNavigation();
  useEffect(() => {
    check();
  }, []);

  const check = async () => {
    const json = await AsyncStorage.getItem("USER_DATA");
    if (json) {
      navigation.reset({
        routes: [{ name: "home" }],
      });
    } else {
      navigation.reset({
        routes: [{ name: "login" }],
      });
    }
  };

  return (
    <View style={styles.main}>
      <ActivityIndicator size={"large"} />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
