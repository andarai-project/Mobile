import React, {Component} from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import CounterInput from "react-native-counter-input";

import {
  ContainerFruta,
  BolinhaDois,
  ButtomPedidosUm,
  TextPedidoUm,
  TextPedidoDois,
  TextPedidoTres,
  TextPedidoQuatro,
  TextPedidoButtom,
  ContainerPedidoTitulo,
  BananaVermelhaPedido,
  CounterContainer,
} from "../Styles/Styles";

export default function ProdutoUm () {
  const navigation = useNavigation();
    return (
      <ContainerFruta>
      <BolinhaDois>
        <BananaVermelhaPedido />
      </BolinhaDois>
      <ContainerPedidoTitulo>
      <TextPedidoUm>Banana Vermelha{"\n"}   (12 unidades)</TextPedidoUm> 
      <TextPedidoDois>R$ 5,00</TextPedidoDois>
      </ContainerPedidoTitulo>
      <TextPedidoTres>Descrição</TextPedidoTres>
      <TextPedidoQuatro>
      - A banana vermelha é fonte de potássio, vitaminas C e do complexo B e betacaroteno, 
      além de possuir 15%{"\n"} da quantidade de fibras recomendada por dia.{"\n"}{"\n"} 
      - Colhidas no dia 2 de Junho.</TextPedidoQuatro>
      <CounterContainer>
      <CounterInput backgroundColor = '#62A87C' 
      increaseButtonBackgroundColor = 'fff' 
      decreaseButtonBackgroundColor = 'fff'
      horizontal />
      </CounterContainer>
       <ButtomPedidosUm onPress={() => {navigation.goBack();}}>
         <TextPedidoButtom>Adicionar ao Carrinho</TextPedidoButtom>
         </ButtomPedidosUm> 
         <TextPedidoTres></TextPedidoTres>
         <TextPedidoTres></TextPedidoTres>
     </ContainerFruta>
    );
  }

