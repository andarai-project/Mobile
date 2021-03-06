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
  BananaPrataPedido,
  CounterContainer,
} from "../Styles/Styles";

export default function ProdutoUm () {
  const navigation = useNavigation();
    return (
      <ContainerFruta>
      <BolinhaDois>
        <BananaPrataPedido />
      </BolinhaDois>
      <ContainerPedidoTitulo>
      <TextPedidoUm>Banana Prata{"\n"}(12 unidades)</TextPedidoUm> 
      <TextPedidoDois>R$ 5,00</TextPedidoDois>
      </ContainerPedidoTitulo>
      <TextPedidoTres>Descrição</TextPedidoTres>
      <TextPedidoQuatro>
      - A banana contém muito ferro, que estimula a produção de hemoglobina. 
        Portanto, incluir o seu consumo na dieta é uma forma eficiente de ajudar a combater a anemia.{"\n"}{"\n"}
       - Colhidas no dia 30 de Maio. </TextPedidoQuatro>
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

