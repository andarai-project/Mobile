import React, { useEffect } from "react";
import firebase from "../../FireBaseConfig";
import { Alert, Text } from "react-native";

import {
  Container,
  Inputs,
  Titulo,
  ContainerUp,
  ContainerDown,
  TextoSenha,
  BotaoCadastrar,
  ContainerRow,
  TituloText,
} from "../Styles/Cadastro";
import Logo from "../compoents/Logo";

export default function SignIn({ navigation }) {
  const logo = require("../img/logo.png");

  const [email, onChangeText] = React.useState("");
  const [pass, onChangePass] = React.useState("");

  function loginFirebase() {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then((userCredential) => {
        // Signed in
        let user = userCredential.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        navigation.navigate("Index");
      } else {
        /*Alert.alert("Login Incorreto", "Email ou senha incorreto", [
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
        */
      }
    });
  });

  return (
    <Container>
      <ContainerUp>
        <Logo image={logo} />
      </ContainerUp>
      <ContainerDown>
        <ContainerRow>
          <Titulo>
            <TituloText
              style={{
                marginRight: 30,
                color: "#62a87c",
              }}
            >
              Entrar
            </TituloText>
          </Titulo>
          <Titulo onPress={() => navigation.navigate("SignUp")}>
            <TituloText style={{ marginLeft: 30 }}>Cadastrar</TituloText>
          </Titulo>
        </ContainerRow>
        <Inputs
          placeholder="Email"
          onChangeText={onChangeText}
          value={email}
        ></Inputs>
        <Inputs
          placeholder="Senha"
          onChangeText={onChangePass}
          value={pass}
        ></Inputs>
        <TextoSenha>Esqueceu a Senha?</TextoSenha>
        <BotaoCadastrar onPress={() => loginFirebase()}>
          <Text style={{ fontWeight: "bold" }}>Confirmar</Text>
        </BotaoCadastrar>
      </ContainerDown>
    </Container>
  );
}
