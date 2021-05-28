import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { TituloText } from "../Styles/Pedidos";

export default function Pedidos() {
  return (
    <View>
      <TituloText>Checkout</TituloText>
    </View>
  );
}
