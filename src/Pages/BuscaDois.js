import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

import {
  Container, 
  HomeContainerHorizontal,
  RetanguloBusca,
  BolinhaTres,
  TextBuscaContainer,
  IconTresContainer,
  ContainerCartao,
  ContainerBusca,
  ContainerBuscaTitulo,
  TextBusca,
  WhatDoUWant,
  SeuJorgeImg,
  LiliImg,
  MaiconImg,
  CarmemImg,
  TextPedidoButtom,
} from "../Styles/Styles";

export default function BuscaDois () {
    const navigation = useNavigation()
    return (
        <Container> 
            <ContainerBuscaTitulo>
            <TextBusca>Frutas</TextBusca>
            </ContainerBuscaTitulo>
            <ContainerBusca>
            <ScrollView>
            <WhatDoUWant>4 vendedores perto {"\n"}          de você</WhatDoUWant>
             <HomeContainerHorizontal>
              <ContainerCartao onPress={ () => navigation.navigate("SeuJorge")}>
              <RetanguloBusca />
              <BolinhaTres> 
                <SeuJorgeImg />
              </BolinhaTres>
              <TextBuscaContainer>Frutas Seu Jorge</TextBuscaContainer>
              <IconTresContainer>
              <MaterialCommunityIcons name="fruit-citrus" size={30} color="#E8B280" />
              </IconTresContainer>
              </ContainerCartao>
              <ContainerCartao>
              <RetanguloBusca />
              <BolinhaTres>
              <LiliImg />
              </BolinhaTres>
              <TextBuscaContainer>Lili Frutos</TextBuscaContainer>
              <IconTresContainer>
              <MaterialCommunityIcons name="fruit-citrus" size={30} color="#E8B280" />
              </IconTresContainer>
              </ContainerCartao>
              </HomeContainerHorizontal>
              <HomeContainerHorizontal>
              <ContainerCartao>
              <RetanguloBusca />
              <BolinhaTres> 
                <MaiconImg />
              </BolinhaTres>
              <TextBuscaContainer>Maicon Frutas</TextBuscaContainer>
              <IconTresContainer>
              <MaterialCommunityIcons name="fruit-citrus" size={30} color="#E8B280" />
              </IconTresContainer>
              </ContainerCartao>
              <ContainerCartao>
              <RetanguloBusca />
              <BolinhaTres>
                  <CarmemImg />
              </BolinhaTres>
              <TextBuscaContainer>Quitandinha{"\n"}   Carmem</TextBuscaContainer>
              <IconTresContainer>
              <MaterialCommunityIcons name="fruit-citrus" size={30} color="#E8B280" />
              </IconTresContainer>
              </ContainerCartao>
              </HomeContainerHorizontal>
                <TextPedidoButtom> </TextPedidoButtom>
                <TextPedidoButtom> </TextPedidoButtom>
                <TextPedidoButtom> </TextPedidoButtom>
                <TextPedidoButtom> </TextPedidoButtom>
                <TextPedidoButtom> </TextPedidoButtom>
                <TextPedidoButtom> </TextPedidoButtom>
                
            </ScrollView>
            </ContainerBusca>
        </Container>
    );
  }

