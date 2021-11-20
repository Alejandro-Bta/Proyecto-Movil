import React from "react";
import { View, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { formStyles } from "../../styles";

export default function LoginForm(props) {
  const { changeForm } = props;
  return (
    <View>
      <TextInput label="Email o Username" style={formStyles.input} />
      <TextInput label="Contraseña" style={formStyles.input} />
      <Button mode="contained" style={formStyles.btnSucces}>
        Iniciar Sesión
      </Button>
      <Button
        mode="text"
        style={formStyles.btnText}
        labelStyle={formStyles.btnTextLabel}
        onPress={changeForm}
      >
        Registrarse
      </Button>
    </View>
  );
}
