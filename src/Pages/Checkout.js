import React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CheckBox, Body } from "native-base";

import {
  TituloText,
  Container,
  Header,
  Main,
  Footer,
  BotaoFinal,
} from "../Styles/Pedidos";

import { TextoCheck } from "../Styles/Cadastro";

import { Card, Inputs, CardS, TotalView } from "../Styles/Checkout";

export default function Checkout() {
  const Alerta = () =>
    Alert.alert("Confirmação do Pedido", "Total R$18,00", [
      {
        text: "Cancelar",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "Confirmar", onPress: () => console.log("OK Pressed") },
    ]);
  return (
    <Container>
      <Header>
        <TituloText>Pedidos</TituloText>
      </Header>
      <Main>
        <View
          style={{
            flexDirection: "flex-start",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: 120,
          }}
        >
          <TituloText
            style={{
              marginTop: -20,
            }}
          >
            Informações de Entrega
          </TituloText>
        </View>

        <Card>
          <Inputs placeholder="Nome">Rita Menezes</Inputs>
          <Inputs placeholder="Endereço">Rua Meirelles, 67</Inputs>
          <Inputs
            style={{
              borderBottomWidth: 0,
            }}
          >
            (91) 98521-6985
          </Inputs>
        </Card>
        <View
          style={{
            flexDirection: "flex-start",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: 120,
            paddingTop: 20,
          }}
        >
          <TituloText
            style={{
              marginLeft: -50,
            }}
          >
            Método de Delivery
          </TituloText>
        </View>

        <CardS>
          <TextoCheck>
            <CheckBox
              style={{ marginTop: 25, marginLeft: 20 }}
              checked={false}
              color="green"
            />
            <Text style={{ paddingTop: 23, paddingLeft: 25, fontSize: 17 }}>
              Agendamento
            </Text>
          </TextoCheck>
          <View
            style={{
              borderBottomWidth: 1,
              width: "90%",
              paddingTop: 20,
              marginLeft: 15,
            }}
          ></View>
          <TextoCheck>
            <CheckBox
              style={{ marginTop: 22, marginLeft: 20 }}
              checked={true}
              color="green"
            />

            <Text style={{ paddingTop: 22, paddingLeft: 25, fontSize: 17 }}>
              Entregar agora
            </Text>
          </TextoCheck>
        </CardS>
        <View
          style={{
            flexDirection: "flex-start",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: 120,
          }}
        >
          <TituloText
            style={{
              marginLeft: -25,
            }}
          >
            Método de Pagamento
          </TituloText>
        </View>

        <CardS>
          <TextoCheck>
            <CheckBox
              style={{ marginTop: 25, marginLeft: 20 }}
              checked={false}
              color="green"
            />
            <Text style={{ paddingTop: 23, paddingLeft: 25, fontSize: 17 }}>
              Cartão
            </Text>
          </TextoCheck>
          <View
            style={{
              borderBottomWidth: 1,
              width: "90%",
              paddingTop: 20,
              marginLeft: 15,
            }}
          ></View>
          <TextoCheck>
            <CheckBox
              style={{ marginTop: 22, marginLeft: 20 }}
              checked={true}
              color="green"
            />

            <Text style={{ paddingTop: 22, paddingLeft: 25, fontSize: 17 }}>
              Dinheiro
            </Text>
          </TextoCheck>
        </CardS>
      </Main>
      <TotalView>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Total</Text>
        <Text style={{ fontSize: 20, paddingLeft: 230 }}>R$18</Text>
      </TotalView>
      <Footer>
        <BotaoFinal onPress={Alerta}>
          <Text style={{ fontWeight: "bold" }}>Finalizar Pedido</Text>
        </BotaoFinal>
      </Footer>
    </Container>
  );
}
