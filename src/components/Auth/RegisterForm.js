import React from "react";
import { View, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { formStyles } from "../../styles";

export default function FormRegister() {
  return (
    <View>
      <TextInput label="Email" style={formStyles.input} />
      <TextInput label="Nombre de usuario" style={formStyles.input} />
      <TextInput label="Contraseña" style={formStyles.input} secureTextEntry />
      <TextInput
        label="Repetir contraseña"
        style={formStyles.input}
        secureTextEntry
      />
      <Button mode="contained" style={formStyles.btnSucces}>
        Registrarse
      </Button>
      <Button
        mode="text"
        style={formStyles.btnText}
        labelStyle={formStyles.btnTextLabel}
      >
        Iniciar sesión
      </Button>
    </View>
  );
}
