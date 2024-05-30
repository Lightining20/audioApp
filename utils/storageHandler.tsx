import AsyncStorage from "@react-native-async-storage/async-storage";
type KeyboardStatic = "USER_DATA";

const setAsyncItem = async (key: KeyboardStatic, item: any) => {
  await AsyncStorage.setItem(key, JSON.stringify(item));
};
const getAsyncItem = async (key: KeyboardStatic) =>
  JSON.parse((await AsyncStorage.getItem(key)) || "null");
export { setAsyncItem, getAsyncItem };
