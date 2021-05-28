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
} from "../Styles/Pedidos";
const logo = require("../img/logo.png");

export default function Pedidos() {
  const navigation = useNavigation();
  const DATA = [
    { ID: "1", Nome: "Banana Vermelha", Preco: "R$5,00" },
    { ID: "2", Nome: "Maçã", Preco: "R$7,00" },
    { ID: "3", Nome: "Morango", Preco: "R$9,00" },
  ];

  const banana = require("../img/banana.jpg");
  return (
    <Container>
      <Header>
        <TituloText>Pedidos</TituloText>
      </Header>
      <Main>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Card>
              <View style={{ flexDirection: "row" }}>
                <ImgConatiner>
                  <FotoFruta image={banana} />
                </ImgConatiner>
                <View style={{ flexDirection: "collumn" }}>
                  <TituloCard>{item.Nome}</TituloCard>
                  <PrecoCard>{item.Preco}</PrecoCard>
                </View>
              </View>
            </Card>
          )}
          keyExtractor={(item) => item.ID}
        ></FlatList>
      </Main>
      <Footer>
        <BotaoFinal onPress={() => navigation.navigate("Home")}>
          <Text style={{ fontWeight: "bold" }}>Finalizar Pedido</Text>
        </BotaoFinal>
      </Footer>
    </Container>
  );
}
