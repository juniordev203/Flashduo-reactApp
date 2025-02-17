import { View, Text, TouchableOpacity, SafeAreaView, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { router } from 'expo-router';
import SignIn from './sign-in';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from './home/homePage';

const Index = () => {
    // const [loading, setLoading] = React.useState(true);
    // useEffect(() => {
    //     const checkLoginStatus = async () => {
    //       try {
    //         const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
    //         if (isLoggedIn === 'true') {
    //           router.replace('/'); // Chuyển thẳng đến trang Home nếu đã đăng nhập
    //           return;
    //         }
    //       } catch (error) {
    //         console.error("Lỗi kiểm tra trạng thái đăng nhập:", error);
    //       } finally {
    //         setLoading(false); // Ngừng hiển thị màn hình loading
    //       }
    //     };
    
    //     checkLoginStatus();
    //   }, []);
    
    //   if (loading) {
    //     return (
    //       <View className="flex-1 items-center justify-center">
    //         <ActivityIndicator size="large" color="#0061FF" />
    //       </View>
    //     );
    //   }
    return (
        <SafeAreaView className="h-full bg-white">
            <SignIn />
        </SafeAreaView>
      );
}

export default Index