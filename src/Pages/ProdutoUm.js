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
  BananaVermelhaPedido,
} from "../Styles/Styles";

class ProdutoUm extends React.Component {
  render() {
    return (
      <ContainerFruta>
      <BolinhaDois>
        <BananaVermelhaPedido />
      </BolinhaDois>
      <ContainerPedidoTitulo>
      <TextPedidoUm>Banana Vermelha{"\n"}   (12 unidades)</TextPedidoUm> 
      <TextPedidoDois>R$ 5,00</TextPedidoDois>
      </ContainerPedidoTitulo>
      <TextPedidoTres>Área de Entrega</TextPedidoTres>
      <TextPedidoQuatro>Delivered between monday aug and thursday{"\n"}20 from 8pm to 91:32 pm </TextPedidoQuatro>
       <ButtomPedidosUm>
         <TextPedidoButtom>Adicionar ao Carrinho</TextPedidoButtom>
         </ButtomPedidosUm> 
         <TextPedidoTres></TextPedidoTres>
         <TextPedidoTres></TextPedidoTres>
     </ContainerFruta>
    );
  }
}

export default ProdutoUm;
