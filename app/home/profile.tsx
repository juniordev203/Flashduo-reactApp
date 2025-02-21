import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bell, User, Edit, ArrowRight, Wallet, Calendar, HelpCircle, LogOut, Settings2, SunMoon } from "lucide-react-native"
import { Divider } from '@rneui/themed';

const ProfileScreen = () => {
  const handleLogout = async () => {
    // const result = await logout();
    // if (result) {
    //   Alert.alert("Success", "Logged out successfully");
    //   refetch();
    // } else {
    //   Alert.alert("Error", "Failed to logout");
    // }
  };
  interface SettingsItemProp {
    Icon: any;
    title: string;
    onPress?: () => void;
    textStyle?: string;
    showArrow?: boolean;
  }
  const SettingsItem = ({
    Icon,
    title,
    onPress,
    textStyle,
  }: SettingsItemProp) => (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-row items-center justify-between py-3"
    >
      <View className="flex flex-row items-center gap-3">
        <Icon color="#000"/>
        <Text className={`text-lg font-medium text-gray-900 ${textStyle}`}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-7"
      >
        <View className="flex flex-row items-center justify-between mt-5">
          <View className="flex flex-row items-center gap-2">
            <User color={"#000"}/>
            <Text className="text-lg font-bold">Cá nhân</Text>
          </View>
          <Bell color={"#000"}/>
        </View>

        <View className="flex flex-row justify-center mt-5">
          <View className="flex flex-col items-center relative mt-5">
            <Image source={require("@/assets/images/avatar.jpg")}
            style={{ width: 100, height: 100, borderRadius: 50}}/>
            <TouchableOpacity className="absolute bottom-11 right-2">
              <Edit color={"#000"}/>
            </TouchableOpacity>
            <Text className="text-2xl font-bold mt-2">Junior203</Text>
          </View>
        </View>

        <View className="flex flex-col mt-10">
          <SettingsItem Icon={SunMoon} title="Giao diện tối" />
          <SettingsItem Icon={Wallet} title="Thanh toán" />
        </View>
        <Divider color="#000" width={1}/>
        <View className="flex flex-col pt-5 border-blue-200">
          <SettingsItem Icon={Settings2} title="Cài đặt" />
          <SettingsItem Icon={HelpCircle} title="Trung tâm trợ giúp" />
        </View>
        <Divider color="#000" width={1}/>
        <View className="flex flex-col pt-5 border-blue-200">
          <SettingsItem
            Icon={LogOut}
            title="Logout"
            textStyle="text-danger"
            showArrow={false}
            onPress={handleLogout}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

