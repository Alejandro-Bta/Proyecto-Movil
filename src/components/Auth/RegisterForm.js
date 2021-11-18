import React from "react";
import { View, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useFormik } from "formik";
import * as Yup from "yup";
import { formStyles } from "../../styles";

export default function FormRegister(props) {
  const { changeForm } = props;

  const formik = useFormik({
    initialValues: initialValues(),
    onSubmit: (formData) => {
      console.log("Registro enviado");
      console.log(formData);
    },
  });

  return (
    <View>
      <TextInput
        label="Email"
        style={formStyles.input}
        onChangeText={(text) => formik.setFieldValue("email", text)}
      />
      <TextInput
        label="Nombre de usuario"
        style={formStyles.input}
        onChangeText={(text) => formik.setFieldValue("username", text)}
      />
      <TextInput
        label="Contraseña"
        style={formStyles.input}
        onChangeText={(text) => formik.setFieldValue("password", text)}
        secureTextEntry
      />
      <TextInput
        label="Repetir contraseña"
        style={formStyles.input}
        onChangeText={(text) => formik.setFieldValue("repeatpassword", text)}
        secureTextEntry
      />
      <Button
        mode="contained"
        style={formStyles.btnSucces}
        onPress={formik.handleSubmit}
      >
        Registrarse
      </Button>
      <Button
        mode="text"
        style={formStyles.btnText}
        labelStyle={formStyles.btnTextLabel}
        onPress={changeForm}
      >
        Iniciar sesión
      </Button>
    </View>
  );
}

function initialValues() {
  return {
    email: "",
    username: "",
    password: "",
    repeatpassword: "",
  };
}
