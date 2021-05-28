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
  ContainerBuscaTitulo,
  TextBuscaTitulo,
  TextCategoria,
  TextTres,
  FeiranteImagem,
  SearchContainer,
  BananaVermelhaJorge,
  PrataBananaJorge,
  BananaNanicaJorge,
  PupunhaJorge,
  CupuaçuJorge,
} from "../Styles/Styles";

export default function SeuJorge () {
    const navigation = useNavigation()
    return (
        <Container> 
            <ContainerBuscaTitulo>
            <FeiranteImagem />
            </ContainerBuscaTitulo>
            <SearchContainer>
            <ScrollView>
            <TextBuscaTitulo>Frutas Seu Jorge</TextBuscaTitulo>
            <TextCategoria>Bananas</TextCategoria>
             <HomeContainerHorizontal>
             <ScrollView horizontal={true}>
              <ContainerCartao onPress={ () => navigation.navigate("ProdutoUm")}>
              <RetanguloBusca />
              <BolinhaTres> 
                <BananaVermelhaJorge/>
              </BolinhaTres>
              <TextBuscaContainer>Banana Vermelha</TextBuscaContainer>
              <IconTresContainer>
              <TextTres>R$ 5,00</TextTres>
              </IconTresContainer>
              </ContainerCartao>
              <ContainerCartao onPress={ () => navigation.navigate("ProdutoDois")}>
              <RetanguloBusca />
              <BolinhaTres>
              <PrataBananaJorge />
              </BolinhaTres>
              <TextBuscaContainer>Banana Prata</TextBuscaContainer>
              <IconTresContainer>
              <TextTres>R$ 5,00</TextTres>
              </IconTresContainer>
              </ContainerCartao>
              <ContainerCartao>
              <RetanguloBusca />
              <BolinhaTres>
                <BananaNanicaJorge />
              </BolinhaTres>
              <TextBuscaContainer>Banana Nanica</TextBuscaContainer>
              <IconTresContainer>
              <TextTres>R$ 5,00</TextTres>
              </IconTresContainer>
              </ContainerCartao>
              </ScrollView>
              </HomeContainerHorizontal>
              <TextCategoria>Regionais</TextCategoria>
              <HomeContainerHorizontal>
              <ScrollView horizontal={true}>
              <ContainerCartao onPress={ () => navigation.navigate("ProdutoTres")}>
              <RetanguloBusca />
              <BolinhaTres> 
                <PupunhaJorge />
              </BolinhaTres>
              <TextBuscaContainer>Pupunha</TextBuscaContainer>
              <IconTresContainer>
              <TextTres>R$ 5,00</TextTres>
              </IconTresContainer>
              </ContainerCartao>
              <ContainerCartao>
              <RetanguloBusca />
              <BolinhaTres>
                <CupuaçuJorge />
              </BolinhaTres>
              <TextBuscaContainer>Cupuaçu</TextBuscaContainer>
              <IconTresContainer>
              <TextTres>R$ 5,00</TextTres>
              </IconTresContainer>
              </ContainerCartao>
              </ScrollView>
              </HomeContainerHorizontal>
                
            </ScrollView>
            </SearchContainer>
        </Container>
    );
  }


