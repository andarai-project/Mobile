import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import MapView from "react-native-maps";

import {
  Container,
  TextUm,
  ContainerTelaMapa,
} from "../Styles/Styles";

class Mapa extends React.Component {
  render() {
    return (
      <ContainerTelaMapa>
       <MapView
             style={{ ...StyleSheet.absoluteFillObject }}
             initialRegion={{
             latitude: -1.456652,
             longitude: -48.485174,
             latitudeDelta: 0.01,
             longitudeDelta: 0.04,
          }}
        >

          </MapView>
     </ContainerTelaMapa>
    );
  }
}

export default Mapa;
