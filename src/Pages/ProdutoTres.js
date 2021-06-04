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
  PupunhaPedido,
  CounterContainer,
} from "../Styles/Styles";

export default function ProdutoUm () {
  const navigation = useNavigation();
    return (
      <ContainerFruta>
      <BolinhaDois>
        <PupunhaPedido />
      </BolinhaDois>
      <ContainerPedidoTitulo>
      <TextPedidoUm>Pupunha{"\n"}(1 Cacho)</TextPedidoUm> 
      <TextPedidoDois>R$ 5,00</TextPedidoDois>
      </ContainerPedidoTitulo>
      <TextPedidoTres>Descrição</TextPedidoTres>
      <TextPedidoQuatro>
      - A pupunha tem grande concentração das vitaminas A e C{"\n"}ou seja, 
        fortalece a imunidade contra agentes infecciosos e também é fundamental para a saúde da visão.{"\n"}{"\n"}
        - Colhidas 1 de Junho.</TextPedidoQuatro>
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

