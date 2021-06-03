import React, { Component } from "react";
import {
  Container,
  Content,
  Button,
  Footer,
  FooterTab,
  Text,
} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";

import Home from "../Pages/Home";
import Buscar from "../Pages/Buscar";
import Mapa from "../Pages/Mapa";
import Pedidos from "../Pages/Pedidos";
import Fidelize from "../Pages/Fidelize";
import BuscaDois from "../Pages/BuscaDois";

class Basic extends Component {
  constructor(props) {
    super(props);
    this.state = { footerTab: 1 };
  }

  renderTab = (number) => {
    switch (number) {
      case 1:
        return <Home />;
      case 2:
        return <Buscar />;
      case 3:
        return <Mapa />;
      case 4:
        return <Pedidos />;
      case 5:
        return <Fidelize />;
      default:
        return <Home />;
    }
  };

  changeTab = (number) => {
    if (this.state.footerTab !== number) {
      this.setState({ footerTab: number });
    }
  };

  render() {
    return (
      <Container>
        <Content style={{ backgroundColor: "#f0f0f0" }}>
          {this.renderTab(this.state.footerTab)}
        </Content>
        <Footer style={{ height: 70, color: "green" }}>
          <FooterTab>
            <Button
              style={{ height: 70 }}
              rounded
              vertical
              small
              active={this.state.footerTab === 1}
              onPress={() => {
                this.changeTab(1);
              }}
            >
              <Icon name="home" size={25} color="#999" />
              <Text>Home</Text>
            </Button>
            <Button
              rounded
              vertical
              small
              style={{ height: 70 }}
              active={this.state.footerTab === 2}
              onPress={() => {
                this.changeTab(2);
              }}
            >
              <Icon name="search" size={25} color="#999" />
              <Text>Buscar</Text>
            </Button>
            <Button
              style={{ height: 70 }}
              rounded
              vertical
              small
              active={this.state.footerTab === 3}
              onPress={() => {
                this.changeTab(3);
              }}
            >
              <Icon name="map" size={25} color="#999" />
              <Text>Mapa</Text>
            </Button>
            <Button
              style={{ height: 70 }}
              rounded
              vertical
              small
              active={this.state.footerTab === 4}
              onPress={() => {
                this.changeTab(4);
              }}
            >
              <Icon name="list" size={25} color="#999" />
              <Text>Pedido</Text>
            </Button>
            <Button
              style={{ height: 70 }}
              rounded
              vertical
              active={this.state.footerTab === 5}
              onPress={() => {
                this.changeTab(5);
              }}
            >
              <Icon name="user" size={25} color="#999" />
              <Text>Fidelize</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Basic;
