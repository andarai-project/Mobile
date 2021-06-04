import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Text, Picker } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import {
  Titulo,
  CardTipo,
  CardTitulo,
  Arrow,
  MainCard,
  MainCardDois,
  AmbulanteUm,
  AmbulanteDois,
  AmbulanteTres,
  AmbulanteQuatro,
} from "../Styles/Fidelize";

class Fidelize extends React.Component {
  render() {
    return (
      <View>
        <Titulo>Fidelidade</Titulo>
        <CardTipo>
          <CardTitulo>Tipos de Fidelidade</CardTitulo>
          <Arrow>
            <Icon name="chevron-right" size={25} color="#999" />
          </Arrow>
        </CardTipo>
        <MainCard>
          <AmbulanteUm />
          <AmbulanteDois />
        </MainCard>

        <MainCardDois>
          <AmbulanteTres />
          <AmbulanteQuatro />
        </MainCardDois>
      </View>
    );
  }
}

export default Fidelize;
