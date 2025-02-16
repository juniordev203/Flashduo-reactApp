import { Stack } from "expo-router";
import "./global.css"
import { useFonts } from "expo-font"
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

export default function RootLayout() {
  const [fontLoaded] = useFonts({
    "BeVietnamPro-Bold": require('../assets/fonts/BeVietnamPro-Bold.ttf'),
    "BeVietnamPro-ExtraBold": require('../assets/fonts/BeVietnamPro-ExtraBold.ttf'),
    "BeVietnamPro-Light": require('../assets/fonts/BeVietnamPro-Light.ttf'),
    "BeVietnamPro-Medium": require('../assets/fonts/BeVietnamPro-Medium.ttf'),
    "BeVietnamPro-Regular": require('../assets/fonts/BeVietnamPro-Regular.ttf'),
    "BeVietnamPro-SemiBold": require('../assets/fonts/BeVietnamPro-SemiBold.ttf'),
  })

  useEffect(() => {
    if (fontLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontLoaded]);
  if (!fontLoaded) {
    return null;
  }
  return <Stack screenOptions={{ headerShown: false }}/>;
}

