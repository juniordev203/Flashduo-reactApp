import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-lg text-red-900">XIn chào viet nam</Text>
      <Link href="/sign-in" ><Text className="font-bold text-lg text-red-900">Đăng nhập</Text></Link>
      <Link href="/explore">Khám phá</Link>
      <Link href="/profile">Tài khoản</Link>
      <Link href="/properties/1">Property</Link>
    </View>
  );
}
