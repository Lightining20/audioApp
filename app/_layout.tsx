// app/_layout.tsx
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { Stack } from "expo-router";
import { useEffect } from "react";

export default function Layout() {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        // "276746971660-aeaf61gkgscunpo6f3l1ddl4irj4ggto.apps.googleusercontent.com",
        "276746971660-un2c57qjcnrdgf82c4926a8io00hm327.apps.googleusercontent.com",
    });
  }, []);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      {/* <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="preview" options={{ headerShown: false }} />  */}
    </Stack>
  );
}
