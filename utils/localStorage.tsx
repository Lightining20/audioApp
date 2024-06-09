import AsyncStorage from "@react-native-async-storage/async-storage";

type AsyncKeys = "USER_DATA" | "DEVICE_ID" | "TOKEN";

const setItem = async (key: AsyncKeys, item) => {
  await AsyncStorage.setItem(key, JSON.stringify(item));
};

const getItem = async (key: AsyncKeys) =>
  JSON.parse((await AsyncStorage.getItem(key)) || "null");

const clearLocalStorage = async () => {
  await AsyncStorage.clear();
};

export { setItem, getItem, clearLocalStorage };
