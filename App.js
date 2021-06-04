import "react-native-gesture-handler";
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "./src/cadastro/SignIn";
import SignUp from "./src/cadastro/SignUp";
import Index from "./src/Pages/Index";
import Buscar from "./src/Pages/Buscar";
import BuscaDois from "./src/Pages/BuscaDois";
import Home from "./src/Pages/Home";
import SeuJorge from "./src/Pages/SeuJorge";
import ProdutoUm from "./src/Pages/ProdutoUm";
import ProdutoDois from "./src/Pages/ProdutoDois";
import ProdutoTres from "./src/Pages/ProdutoTres";
import ProdutoQuatro from "./src/Pages/ProdutoQuatro";
import Checkout from "./src/Pages/Checkout";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Buscar" component={Buscar} />
        <Stack.Screen name="BuscaDois" component={BuscaDois} />
        <Stack.Screen name="SeuJorge" component={SeuJorge} />
        <Stack.Screen name="ProdutoUm" component={ProdutoUm} />
        <Stack.Screen name="ProdutoDois" component={ProdutoDois} />
        <Stack.Screen name="ProdutoTres" component={ProdutoTres} />
        <Stack.Screen name="ProdutoQuatro" component={ProdutoQuatro} />
        <Stack.Screen name="Checkout" component={Checkout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
