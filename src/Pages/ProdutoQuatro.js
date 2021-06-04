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
  PedidoBacuri,
  CounterContainer,
} from "../Styles/Styles";

export default function ProdutoUm () {
  const navigation = useNavigation();
    return (
      <ContainerFruta>
      <BolinhaDois>
        <PedidoBacuri />
      </BolinhaDois>
      <ContainerPedidoTitulo>
      <TextPedidoUm>Bacuri (5 unidades)</TextPedidoUm> 
      <TextPedidoDois>R$ 5,00</TextPedidoDois>
      </ContainerPedidoTitulo>
      <TextPedidoTres>Descrição</TextPedidoTres>
      <TextPedidoQuatro>
      - Bacuri é uma fruta nativa da floresta Amazônica.{"\n"} A polpa branca dessa fruta possui 
       altos índices de cálcio, fósforo, ferro e vitamina C.{"\n"}{"\n"} 
      - Colhidos no dia 2 de Junho.</TextPedidoQuatro>
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