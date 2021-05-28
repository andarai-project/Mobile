import React, {Component} from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";

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
} from "../Styles/Styles";

class ProdutoTres extends React.Component {
  render() {
    return (
      <ContainerFruta>
      <BolinhaDois>
          <PupunhaPedido/>
      </BolinhaDois>
      <ContainerPedidoTitulo>
      <TextPedidoUm>Pupunha{"\n"}(1 Cacho)</TextPedidoUm> 
      <TextPedidoDois>R$ 8,00</TextPedidoDois>
      </ContainerPedidoTitulo>
      <TextPedidoTres>Área de Entrega</TextPedidoTres>
      <TextPedidoQuatro>Delivered between monday aug and thursday{"\n"}20 from 8pm to 91:32 pm </TextPedidoQuatro>
       <ButtomPedidosUm>
         <TextPedidoButtom>Adicionar ao Carrinho</TextPedidoButtom>
         </ButtomPedidosUm> 
     </ContainerFruta>
    );
  }
}

export default ProdutoTres;