import { Link } from "expo-router";
import { View, Text, SafeAreaView } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <SafeAreaView className="h-full bg-white">

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text className="font-bold text-lg text-red-900">XIn chào viet nam</Text>
        <Link href="/sign-in" ><Text className="font-bold text-lg text-red-900">Đăng nhập</Text></Link>
        <Link href="/home/profile" ><Text className="font-bold text-lg text-red-900">profile</Text></Link>

      </View>
    </SafeAreaView>
  );
}
export default HomeScreen;