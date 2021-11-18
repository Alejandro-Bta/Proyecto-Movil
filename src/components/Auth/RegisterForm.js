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
    validationSchema: Yup.object(validationSchema()),
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
        value={formik.values.email}
        error={formik.errors.email}
      />
      <TextInput
        label="Nombre de usuario"
        style={formStyles.input}
        onChangeText={(text) => formik.setFieldValue("username", text)}
        value={formik.values.username}
        error={formik.errors.username}
      />
      <TextInput
        label="Contraseña"
        style={formStyles.input}
        onChangeText={(text) => formik.setFieldValue("password", text)}
        secureTextEntry
        value={formik.values.password}
        error={formik.errors.password}
      />
      <TextInput
        label="Repetir contraseña"
        style={formStyles.input}
        onChangeText={(text) => formik.setFieldValue("repeatpassword", text)}
        secureTextEntry
        value={formik.values.repeatpassword}
        error={formik.errors.repeatpassword}
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
function validationSchema() {
  return {
    email: Yup.string().email(true).required(true),
    username: Yup.string().required(true),
    password: Yup.string().required(true),
    repeatpassword: Yup.string()
      .required(true)
      .oneOf([Yup.ref("password")], true),
  };
}
