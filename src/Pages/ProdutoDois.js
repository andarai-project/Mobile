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
  BananaPrataPedido,
} from "../Styles/Styles";

class ProdutoDois extends React.Component {
  render() {
    return (
      <ContainerFruta>
      <BolinhaDois>
        <BananaPrataPedido />
      </BolinhaDois>
      <ContainerPedidoTitulo>
      <TextPedidoUm>Banana Prata{"\n"}(15 Unidades)</TextPedidoUm> 
      <TextPedidoDois>R$ 5,00</TextPedidoDois>
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

export default ProdutoDois;