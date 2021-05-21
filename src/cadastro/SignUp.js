import React from "react";
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
        <Inputs placeholder="Email"></Inputs>
        <Inputs placeholder="Senha"></Inputs>
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
        <BotaoCadastrar onPress={() => navigation.navigate("Index")}>
          <Text style={{ fontWeight: "bold" }}>Confirmar</Text>
        </BotaoCadastrar>
      </ContainerDown>
    </Container>
  );
}
