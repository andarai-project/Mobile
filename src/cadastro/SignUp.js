import React, { useEffect } from "react";
import firebase from "../../FireBaseConfig";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { CheckBox, Body } from "native-base";

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
  ContainerCheck,
  TextoCheck,
} from "../Styles/Cadastro";
import Logo from "../compoents/Logo";

export default function SignUp({ navigation }) {
  const logo = require("../img/logo.png");

  const [email, onChangeText] = React.useState("");
  const [pass, onChangePass] = React.useState("");

  function loginFirebase() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, pass)
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

  return (
    <Container>
      <ContainerUp>
        <Logo image={logo} />
      </ContainerUp>
      <ContainerDown>
        <ContainerRow>
          <Titulo onPress={() => navigation.navigate("SignIn")}>
            <TituloText style={{ marginRight: 30 }}>Entrar</TituloText>
          </Titulo>
          <Titulo>
            <TituloText style={{ marginLeft: 30, color: "#62a87c" }}>
              Cadastrar
            </TituloText>
          </Titulo>
        </ContainerRow>
        <Inputs placeholder="Nome"></Inputs>
        <Inputs
          placeholder="Email"
          onChangeText={onChangeText}
          value={email}
        ></Inputs>
        <Inputs
          placeholder="Senha"
          onChangeText={onChangePass}
          value={pass}
          secureTextEntry={true}
        ></Inputs>
        <Inputs placeholder="Telefone"></Inputs>
        <ContainerCheck>
          <Text
            style={{
              paddingLeft: 10,
              paddingBottom: 10,
              fontSize: 17,
              color: "gray",
            }}
          >
            Categoria
          </Text>
          <TextoCheck>
            <CheckBox style={{ marginTop: 10 }} checked={true} color="green" />
            <Text style={{ paddingTop: 10, paddingLeft: 15, fontSize: 17 }}>
              Cliente
            </Text>
          </TextoCheck>
          <TextoCheck>
            <CheckBox style={{ marginTop: 10 }} checked={false} color="green" />
            <Text style={{ paddingTop: 10, paddingLeft: 15, fontSize: 17 }}>
              Ambulante
            </Text>
          </TextoCheck>
        </ContainerCheck>
        <BotaoCadastrar onPress={() => loginFirebase()}>
          <Text style={{ fontWeight: "bold" }}>Confirmar</Text>
        </BotaoCadastrar>
      </ContainerDown>
    </Container>
  );
}
