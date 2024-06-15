import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";
import { getAsyncItem } from "@/utils/storageHandler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { getItem } from "@/utils/localStorage";

const index = () => {
  const navigation = useNavigation();

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    const device_id = await getItem("DEVICE_ID");
    const userData = await getItem("USER_DATA");
    if (device_id || userData) {
      navigation.reset({ routes: [{ name: "(drawer)" }] });
    } else {
      navigation.reset({ routes: [{ name: "(auth)" }] });
    }
  };

  return <></>;
};

export default index;

const styles = StyleSheet.create({});
