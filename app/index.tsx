import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";
import { getAsyncItem } from "@/utils/storageHandler";
import { SafeAreaProvider } from "react-native-safe-area-context";

const index = () => {
  const navigation = useNavigation();

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    if (await getAsyncItem("USER_DATA")) {
      navigation.reset({
        routes: [{ name: "(drawer)" }],
      });
    } else {
      navigation.reset({
        routes: [{ name: "(auth)" }],
      });
    }
  };

  return <></>;
};

export default index;

const styles = StyleSheet.create({});
