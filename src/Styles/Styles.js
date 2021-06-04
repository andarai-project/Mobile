import styled from "styled-components";

//we can try padding with px or nothing if it doesn't work
export const OpacidadeTocavel = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 5em;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
`;

export const ContainerTelaMapa = styled.View`
  flex: 1;
`;

export const TextUm = styled.Text`
  font-size: 15px;
  font-weight: bold;
  position: absolute;
  color: black;
`;

export const TextDois = styled.Text`
  font-size: 15px;
  font-weight: bold;
  position: absolute;
  color: black;
  top: 180px;
`;

export const TextTres = styled.Text`
  font-size: 15px;
  left: -23px;
  position: absolute;
  color: black;
`;

export const TextPedidoUm = styled.Text`
  top: 55px;
  font-size: 22px;
  font-weight: bold;
  color: black;
`;

export const TextPedidoDois = styled.Text`
  top: 60px;
  font-size: 15px;
  font-weight: bold;
  color: black;
`;

export const TextPedidoTres = styled.Text`
  right: 130px;
  top: 350px;
  font-size: 15px;
  font-weight: bold;
  color: black;
`;

export const TextPedidoQuatro = styled.Text`
  left: 20px;
  top: 350px;
  font-size: 13px;
  color: black;
`;

export const TextPedidoButtom = styled.Text`
  left: -1px;
  right: 80px;
  font-size: 15px;
  font-weight: bold;
  color: black;
`;

export const TextBusca = styled.Text`
  top: 70px;
  position: absolute;
  font-size: 27px;
  font-weight: bold;
  color: black;
`;

export const WhatDoUWant = styled.Text`
  top: 10px;
  left: 90px;
  font-size: 25px;
  font-weight: bold;
  color: black;
`;

export const TextBuscaTitulo = styled.Text`
  top: 10px;
  left: 20px;
  font-size: 25px;
  font-weight: bold;
  color: black;
`;

export const TextCategoria = styled.Text`
  top: 20px;
  left: 20px;
  font-size: 10px;
  color: #adadaf;
`;

export const SeuJorgeImg = styled.Image.attrs({
  source: require("../img/FeiranteTres.jpg"),
  resizeMode: "stretch",
  position: "absolute",
})`
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 100px;
  width: 100px;
  border-radius: 130px;
`;

export const LiliImg = styled.Image.attrs({
  source: require("../img/Lili.jpg"),
  resizeMode: "stretch",
  position: "absolute",
})`
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 100px;
  width: 100px;
  border-radius: 300px;
`;

export const MaiconImg = styled.Image.attrs({
  source: require("../img/Maicon.jpeg"),
  resizeMode: "stretch",
  position: "absolute",
})`
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 100px;
  width: 100px;
  border-radius: 130px;
`;

export const CarmemImg = styled.Image.attrs({
  source: require("../img/Carmem.jpg"),
  resizeMode: "stretch",
  position: "absolute",
})`
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 100px;
  width: 100px;
  border-radius: 130px;
`;

export const FeiranteImagem = styled.Image.attrs({
  source: require("../img/Jorge.jpg"),
  resizeMode: "stretch",
  position: "absolute",
})`
  justify-content: center;
  align-items: center;
  align-self: center;
  top: -20px;
  height: 250px;
  width: 100%;
`;

export const FeiranteUm = styled.Image.attrs({
  source: require("../img/FeiranteUm.jpg"),
  resizeMode: "stretch",
  position: "absolute",
})`
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 130px;
  width: 130px;
  border-radius: 130px;
`;

export const FeiranteDois = styled.Image.attrs({
  source: require("../img/FeiranteDois.jpg"),
  resizeMode: "stretch",
  position: "absolute",
})`
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 130px;
  width: 130px;
  border-radius: 130px;
`;

export const FeiranteTres = styled.Image.attrs({
  source: require("../img/FeiranteTres.jpg"),
  resizeMode: "stretch",
  position: "absolute",
})`
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 130px;
  width: 130px;
  border-radius: 300px;
`;
export const FeiranteQuatro = styled.Image.attrs({
  source: require("../img/FeiranteQuatro.jpeg"),
  resizeMode: "stretch",
  position: "absolute",
})`
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 130px;
  width: 130px;
  border-radius: 140px;
`;

export const FeiranteCinco = styled.Image.attrs({
  source: require("../img/FeiranteCinco.jpg"),
  resizeMode: "stretch",
  position: "absolute",
})`
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 130px;
  width: 130px;
  border-radius: 100px;
`;

export const FrutasButtom = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  align-self: center;
  flex-direction: row;
  width: 320px;
  height: 60px;
  border-radius: 30px;
  margin-top: 50px;
  margin-bottom: 10px;
  background-color: #ffeddc;
`;

export const TipicasButtom = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  align-self: center;
  flex-direction: row;
  width: 320px;
  height: 60px;
  border-radius: 30px;
  margin-top: 50px;
  margin-bottom: 10px;
  background-color: #d2b1e0;
`;

export const DocesButtom = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  align-self: center;
  flex-direction: row;
  width: 320px;
  height: 60px;
  border-radius: 30px;
  margin-top: 50px;
  margin-bottom: 10px;
  background-color: #fbdfec;
`;

export const SalgadosButtom = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  align-self: center;
  flex-direction: row;
  width: 320px;
  height: 60px;
  border-radius: 30px;
  margin-top: 50px;
  margin-bottom: 10px;
  background-color: #ffcccc;
`;
export const LegumesButtom = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  align-self: center;
  flex-direction: row;
  width: 320px;
  height: 60px;
  border-radius: 30px;
  margin-top: 50px;
  margin-bottom: 10px;
  background-color: #b5f5cd;
`;

export const ButtomPedidosUm = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  align-self: center;
  flex-direction: row;
  width: 320px;
  height: 60px;
  border-radius: 30px;
  margin-top: 530px;
  margin-bottom: 10px;
  background-color: #62a87c;
`;

export const ButtomPedidosDois = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  align-self: center;
  flex-direction: row;
  width: 320px;
  height: 60px;
  border-radius: 30px;
  margin-top: 50px;
  margin-bottom: 10px;
  background-color: #b5f5cd;
`;

export const BuscarInput = styled.TextInput.attrs({
  placeholderTextColor: "#ffffff",
  placeholderPadding: "20",
  fontSize: 17,
  fontWeight: "bold",
})`
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 50px;
  padding-left: 20px;
  width: 280px;
  height: 50px;
  border-radius: 30px;
  background-color: #62a87c;
`;

export const IconContainerUm = styled.View`
  left: -130px;
`;

export const IconContainerDois = styled.View`
  position: absolute;
  align-self: center;
  top: 220px;
`;

export const IconTresContainer = styled.View`
  position: absolute;
  align-self: center;
  top: 190px;
`;

export const HomeContainerHorizontal = styled.View`
  align-self: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerBusca = styled.View`
  margin-top: 150px;
  align-self: center;
  border-radius: 30px;
  width: 100%;
  background-color: #ecfbf2;
`;

export const SearchContainer = styled.View`
  margin-top: 200px;
  align-self: center;
  border-radius: 20px;
  width: 100%;
  background-color: #f2f2f2;
`;


export const ContainerBuscaTitulo = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #FFEDDC;
`;

export const RetanguloFrutas = styled.View`
  align-self: center;
  margin-top: 81px;
  background-color: #ffeddc;
  flex-direction: row;
  height: 190px;
  width: 190px;
  border-radius: 20px;
`;

export const RetanguloTipicas = styled.View`
  align-self: center;
  margin-top: 81px;
  background-color: #d2b1e0;
  flex-direction: row;
  height: 190px;
  width: 190px;
  border-radius: 20px;
`;

export const RetanguloDoces = styled.View`
  align-self: center;
  margin-top: 81px;
  background-color: #fbdfec;
  flex-direction: row;
  height: 190px;
  width: 190px;
  border-radius: 20px;
`;

export const RetanguloSalgados = styled.View`
  align-self: center;
  margin-top: 81px;
  background-color: #ffcccc;
  flex-direction: row;
  height: 190px;
  width: 190px;
  border-radius: 20px;
`;

export const RetanguloLegumes = styled.View`
  align-self: center;
  margin-top: 81px;
  background-color: #b5f5cd;
  flex-direction: row;
  height: 190px;
  width: 190px;
  border-radius: 20px;
`;

export const ContainerCartao = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  top: -10px;
  left: 20px;
  margin-left: 30px;
  flex-direction: row-reverse;
`;

export const ContainerPedidoTitulo = styled.TouchableOpacity`
  top: 260px;
  justify-content: center;
  align-items: center;
`;
export const Bolinha = styled.View`
  position: absolute;
  top: 40px;
  background-color: #ffffff;
  height: 120px;
  width: 120px;
  border-radius: 100px;
`;

export const BolinhaDois = styled.View`
  position: absolute;
  top: 70px;
  background-color: #ffffff;
  height: 200px;
  width: 200px;
  border-radius: 100px;
`;

export const BolinhaTres = styled.View`
  position: absolute;
  top: 40px;
  background-color: #ffffff;
  height: 100px;
  width: 100px;
  border-radius: 50px;
`;

export const TextBuscaContainer = styled.Text`
  font-size: 15px;
  font-weight: bold;
  position: absolute;
  color: black;
  top: 150px;
`;

export const RetanguloBusca = styled.View`
  align-self: center;
  margin-top: 81px;
  background-color: #FFEDDC;
  flex-direction: row;
  height: 150px;
  width: 140px;
  border-radius: 20px;
`;

export const ContainerLista = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  align-self: center;
  flex-direction: row;
  border-radius: 30px;
`;

export const ContainerFruta = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: #b5f5cd;
`;

export const BananaVermelhaJorge = styled.Image.attrs({
  source: require("../img/BananaVermelha.jpg"),
  resizeMode: "stretch",
  position: "absolute",
})`
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 100px;
  width: 100px;
  border-radius: 100px;
`;

export const BananaVermelhaPedido = styled.Image.attrs({
  source: require("../img/BananaVermelha.jpg"),
  resizeMode: "stretch",
  position: "absolute",
})`
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 200px;
  width: 200px;
  border-radius: 100px;
`;

export const BananaPrataPedido = styled.Image.attrs({
  source: require("../img/BananaPrata.jpg"),
  resizeMode: "stretch",
  position: "absolute",
})`
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 200px;
  width: 200px;
  border-radius: 100px;
`;

export const PupunhaPedido = styled.Image.attrs({
  source: require("../img/Pupunha.jpg"),
  resizeMode: "stretch",
  position: "absolute",
})`
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 200px;
  width: 200px;
  border-radius: 100px;
`;

export const PrataBananaJorge = styled.Image.attrs({
  source: require("../img/BananaPrata.jpg"),
  resizeMode: "stretch",
  position: "absolute",
})`
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 100px;
  width: 100px;
  border-radius: 300px;
`;

export const BananaNanicaJorge = styled.Image.attrs({
  source: require("../img/BananaNanica.jpg"),
  resizeMode: "stretch",
  position: "absolute",
})`
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 100px;
  width: 100px;
  border-radius: 300px;
`;

export const PupunhaJorge = styled.Image.attrs({
  source: require("../img/Pupunha.jpg"),
  resizeMode: "stretch",
  position: "absolute",
})`
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 100px;
  width: 100px;
  border-radius: 100px;
`;

export const CupuaçuJorge = styled.Image.attrs({
  source: require("../img/Cupuaçu.jpg"),
  resizeMode: "stretch",
  position: "absolute",
})`
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 100px;
  width: 100px;
  border-radius: 100px;
`;

export const BacuriJorge = styled.Image.attrs({
  source: require("../img/Bacuri.jpg"),
  resizeMode: "stretch",
  position: "absolute",
})`
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 100px;
  width: 100px;
  border-radius: 100px;
`;

export const PedidoBacuri = styled.Image.attrs({
  source: require("../img/Bacuri.jpg"),
  resizeMode: "stretch",
  position: "absolute",
})`
 justify-content: center;
 align-items: center;
 align-self: center;
 height: 200px;
 width: 200px;
 border-radius: 100px;
`;
export const CounterContainer = styled.View`
  top: 430px;
  justify-content: center;
  align-items: center;
`;
export const MapaView = styled.View`
  height: 750px;
  width: 100%;
`;
