import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import FotoFruta from "../compoents/FotoFruta";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Header,
  Footer,
  Main,
  BotaoFinal,
  Card,
  ImgConatiner,
  TituloCard,
  PrecoCard,
  TituloText,
  BananaPrataPedido,
  BananaVermelhaPedido,
  PupunhaPedido,
} from "../Styles/Pedidos";
const BananaVermelha = require("../img/BananaVermelha.jpg");
const BananaPrata = require("../img/BananaPrata.jpg");
const Pupunha = require("../img/Pupunha.jpg");

export default function Pedidos() {
  const navigation = useNavigation();
  const DATA = [
    { ID: "1", Nome: "Banana Vermelha", Preco: "R$5,00" },
    { ID: "2", Nome: "Banana Prata", Preco: "R$5,00" },
    { ID: "3", Nome: "Pupunha", Preco: "R$5,00" },
  ];

  const banana = require("../img/banana.jpg");
  return (
    <Container>
      <Header>
        <TituloText>Pedidos</TituloText>
      </Header>
      <Main>
        <Card>
          <View style={{ flexDirection: "row" }}>
            <ImgConatiner>
              <BananaVermelhaPedido />
            </ImgConatiner>
            <View style={{ flexDirection: "collumn" }}>
              <TituloCard>Banana Vermelha</TituloCard>
              <PrecoCard>R$5,00</PrecoCard>
            </View>
          </View>
        </Card>
        <Card>
          <View style={{ flexDirection: "row" }}>
            <ImgConatiner>
              <BananaPrataPedido />
            </ImgConatiner>
            <View style={{ flexDirection: "collumn" }}>
              <TituloCard>Banana Prata</TituloCard>
              <PrecoCard>R$5,00</PrecoCard>
            </View>
          </View>
        </Card>
        <Card>
          <View style={{ flexDirection: "row" }}>
            <ImgConatiner>
              <PupunhaPedido />
            </ImgConatiner>
            <View style={{ flexDirection: "collumn" }}>
              <TituloCard>Pupunha</TituloCard>
              <PrecoCard>R$5,00</PrecoCard>
            </View>
          </View>
        </Card>
        <Card>
          <View style={{ flexDirection: "row" }}>
            <ImgConatiner>
              <PupunhaPedido />
            </ImgConatiner>
            <View style={{ flexDirection: "collumn" }}>
              <TituloCard>Bacurí</TituloCard>
              <PrecoCard>R$5,00</PrecoCard>
            </View>
          </View>
        </Card>
      </Main>
      <Footer>
        <BotaoFinal onPress={() => navigation.navigate("Checkout")}>
          <Text style={{ fontWeight: "bold" }}>Finalizar Pedido</Text>
        </BotaoFinal>
      </Footer>
    </Container>
  );
}
