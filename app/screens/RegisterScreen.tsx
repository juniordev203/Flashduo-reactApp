import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import axios from "react-native-axios";

import { NavigationProp } from "@react-navigation/native";
import { Redirect } from "expo-router";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await axios.post("http://localhost:5000/api/register", { email, password });
      Alert.alert("Success", "Account created successfully!");
      Redirect("/login");
    } catch (error) {
      Alert.alert("Error", "Registration failed!");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>Register</Text>
      <TextInput placeholder="Email" style={styles.input} onChangeText={setEmail} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} onChangeText={setPassword} />
      <TouchableOpacity onPress={handleRegister}>
        <Text style={{ color: "white" }}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  button: { backgroundColor: "blue", padding: 10, alignItems: "center", borderRadius: 5 },
};

export default RegisterScreen;
