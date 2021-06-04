import React, {Component} from 'react';
import {StyleSheet, Text, Image, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import MapView from "react-native-maps";
import { useNavigation } from '@react-navigation/native';


import {
  Container,
  TextDois,
  RetanguloFrutas,
  RetanguloDoces,
  RetanguloLegumes,
  RetanguloSalgados,
  RetanguloTipicas,
  Bolinha,
  ContainerCartao,
  IconContainerDois,
  HomeContainerHorizontal,
  FeiranteUm,
  FeiranteDois,
  FeiranteTres,
  FeiranteQuatro,
  FeiranteCinco,
} from "../Styles/Styles";

const {width, height} = Dimensions.get('screen')

const images = [
  'https://i.imgur.com/MESs2Tk.png',
  'https://i.imgur.com/EVaM64r.png'
]

export default function(props) {
  const navigation = useNavigation();

  return <Home {...props} navigation={navigation} />;
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0
    }
  }

  change(nativeEvent) {
    if(nativeEvent) {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      if (slide !== this.state.active) {
      this.setState({
        active:slide
      })
      }
    }
  
  }

  render() {
    const { active } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.wrap}>
          <ScrollView
            onScroll={({ nativeEvent })=>this.change(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={styles.wrap}
          >
            {
              images.map((e, index) =>
                <Image
                  key={e}
                  resizeMode="stretch"
                  style={styles.wrap}
                  source={{ uri: e }}
                />
              )
            }
          </ScrollView>
          <View style={styles.wrapDot}>
            {
              images.map((e, index) =>
                <Text
                  key={e}
                  style={active === index ? styles.dotActive : styles.dot}>●</Text>)
            }
          </View>
        </View>
        <HomeContainerHorizontal>
            <ScrollView horizontal={true}>
              <ContainerCartao>
              <RetanguloTipicas />
              <Bolinha> 
              <FeiranteCinco />
              </Bolinha>
              <TextDois>Açaí Dona Maria</TextDois>
              <IconContainerDois>
              <MaterialCommunityIcons name="food-variant" size={30} color="#462255" />
              </IconContainerDois>
              </ContainerCartao>
              <ContainerCartao>
              <RetanguloDoces />
              <Bolinha><FeiranteDois /></Bolinha>
              <TextDois>Docinhos Carmem</TextDois>
              <IconContainerDois>
              <MaterialCommunityIcons name="candycane" size={30} color="#EB4796" />
              </IconContainerDois>
              </ContainerCartao>
              <ContainerCartao onPress={ () => navigation.navigate("SeuJorge")}>
              <RetanguloFrutas />
              <Bolinha><FeiranteTres /></Bolinha>
              <TextDois>Frutas Seu Jorge</TextDois>
              <IconContainerDois>
              <MaterialCommunityIcons name="fruit-citrus" size={30} color="#E8B280" />
              </IconContainerDois>
              </ContainerCartao>
              <ContainerCartao>
              <RetanguloLegumes />
              <Bolinha><FeiranteQuatro /></Bolinha>
              <TextDois>Legumes do José</TextDois>
              <IconContainerDois>
              <Entypo name="leaf" size={24} color="#518966" />
              </IconContainerDois>
              </ContainerCartao>
              <ContainerCartao>
              <RetanguloSalgados />
              <Bolinha><FeiranteUm /></Bolinha>
              <TextDois>Salgadinhos da Lu</TextDois>
              <IconContainerDois>
              <Ionicons name="pizza-outline" size={30} color="#CF3131" />
              </IconContainerDois>
              </ContainerCartao>
              </ScrollView>
              </HomeContainerHorizontal>
        <View style = {styles.containerMap}>

           <MapView
             style={{ ...StyleSheet.absoluteFillObject }}
             initialRegion={{
             latitude: -1.456652,
             longitude: -48.485174,
             latitudeDelta: 0.01,
             longitudeDelta: 0.04,
          }}
        >

          <MapView.Marker coordinate={{ latitude: -1.456652, longitude: -48.485174 }} />
          </MapView>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
  },
  wrap: {
    width: width,
    height: height * 0.20 
  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  dot: {
    fontSize: 7,
    margin: 5,
    bottom: 3,
    color: '#C4C4C4'
  },
  dotActive: {
    fontSize: 7,
    margin: 5,
    bottom: 3,
    color: '#62A87C'
  },
  containerMap: { 
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    marginTop: 25,
    width: width,
    height: 250,
    borderRadius: 30,
  }

});
