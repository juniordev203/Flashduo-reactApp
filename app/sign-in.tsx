import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import icons from '@/constants/icons'
import { router } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SignIn = () => {
  const handleLogin = async () => {
    try {
      await AsyncStorage.setItem('isLoggedIn', 'true'); // Lưu trạng thái đăng nhập
      router.replace('/home/homePage'); // Chuyển hướng đến Home
    } catch (error) {
      console.error("Lỗi khi đăng nhập:", error);
    }
  };
  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView contentContainerClassName='h-full'>
        <Image source={images.bannerSignIn} className='w-full h-4/6' resizeMode="contain"></Image>
      </ScrollView>
      <View className='px-10'>
        <Text className='text-base text-center uppercase font-BeVietNamPro text-blue-500 mb-2'>Hi, Guy!</Text>
        <Text className='text-3xl text-center font-BeVietNamPro-ExtraBold text-gray-800 mb-2'>Cùng nhau học bài và {"\n"} trải nghiệm nhé !</Text>
        <Text className='text-xs text-center uppercase font-BeVietNamPro-Light text-gray-400 mb-5'>Chào mừng đến với Flashduo</Text>
        <View className='flex flex-col gap-4'>
          <TouchableOpacity onPress={handleLogin}
            className='w-full py-5 bg-white shadow-md shadow-zinc-300 rounded-full'>
            <View className='flex flex-row gap-3 items-center justify-center'>
              <Image
                source={icons.google}
                className='w-6 h-6'
                resizeMode='contain' />
              <Text className='text-lg font-medium text-center'>Đăng nhập với Google</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogin}
            className='w-full py-5 bg-white shadow-md shadow-zinc-300 rounded-full'>
            <View className='flex flex-row gap-3 items-center justify-center'>
              <Image
                source={icons.person}
                className='w-6 h-6'
                resizeMode='contain' />
              <Text className='text-lg font-medium text-center'>Đăng nhập với tư cách Khách</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SignIn