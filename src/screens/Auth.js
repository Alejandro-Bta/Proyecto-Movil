import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import RegisterForm from "../components/Auth/RegisterForm";
import logo from "../../assets/logo.jpg";
import { layoutStyle } from "../styles";

export default function Auth() {
  const [showLogin, setsShowLogin] = useState(false);
  return (
    <View style={layoutStyle.container}>
      <Image style={styles.logo} source={logo} />
      {showLogin ? <Text>FormLogin</Text> : <RegisterForm />}
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
    marginBottom: 20,
  },
});
