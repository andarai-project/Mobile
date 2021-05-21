import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { Button } from "native-base";

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
        <Inputs placeholder="Email"></Inputs>
        <Inputs placeholder="Senha"></Inputs>
        <TextoSenha>Esqueceu a Senha?</TextoSenha>
        <BotaoCadastrar onPress={() => navigation.navigate("Index")}>
          <Text style={{ fontWeight: "bold" }}>Confirmar</Text>
        </BotaoCadastrar>
      </ContainerDown>
    </Container>
  );
}
