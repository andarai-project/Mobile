import React from 'react';
import {View, StyleSheet, Text, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import {
  Container,
  TextUm,
  SalgadosButtom,
  FrutasButtom,
  TipicasButtom,
  DocesButtom,
  LegumesButtom,
  CadastroInput,
  IconContainerUm,
} from "../Styles/Styles";

class Buscar extends React.Component {
  render() {
    return (
      <Container>
       <ScrollView>
          <CadastroInput placeholder="Buscar">
          </CadastroInput>
          <FrutasButtom>
          <IconContainerUm>
          <MaterialCommunityIcons name="fruit-citrus" size={30} color="#E8B280" />
          </IconContainerUm>
         <TextUm>Frutas</TextUm>
          </FrutasButtom>
          <TipicasButtom>
            <IconContainerUm>
            <MaterialCommunityIcons name="food-variant" size={30} color="#462255" />
            </IconContainerUm>
            <TextUm>Comidas Tipicas</TextUm>
          </TipicasButtom>
          <DocesButtom>
          <IconContainerUm>
          <MaterialCommunityIcons name="candycane" size={30} color="#EB4796" />
          </IconContainerUm>
            <TextUm>Doces</TextUm>
          </DocesButtom>
          <SalgadosButtom>
          <IconContainerUm>
          <Ionicons name="pizza-outline" size={30} color="#CF3131" />
          </IconContainerUm>
            <TextUm>Salgados</TextUm>
          </SalgadosButtom>
          <LegumesButtom>
          <IconContainerUm>
          <Entypo name="leaf" size={24} color="#518966" />
          </IconContainerUm>
            <TextUm>Legumes</TextUm>
          </LegumesButtom>
          </ScrollView>
     </Container>
    );
  }
}

export default Buscar;
