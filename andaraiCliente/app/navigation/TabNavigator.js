import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from '../TabPages/TabBar';
import Home from '../TabPages/Home';
import Buscar from '../TabPages/Buscar';
import Mapa from '../TabPages/Mapa';
import Pedidos  from '../TabPages/Pedidos';
import Perfil from '../TabPages/Perfil';


const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    return <Tab.Navigator tabBar = {props => <TabBar {...props} /> }>
        <Tab.Screen 
        name = 'Home' 
        component = {Home} 
        initialParams={{ icon: 'home' }} 
        />
        <Tab.Screen 
        name = 'Buscar' 
        component = {Buscar} 
        initialParams={{ icon: 'search1' }}
        />
        <Tab.Screen 
        name = 'Mapa' 
        component = {Mapa} 
        initialParams={{ icon: 'pushpino' }}
        />
        <Tab.Screen 
        name = 'Pedidos' 
        component = {Pedidos} 
        initialParams={{ icon: 'bars' }}
        />
        <Tab.Screen 
        name = 'Perfil' 
        component = {Perfil} 
        initialParams={{ icon: 'user' }}
        />
    </Tab.Navigator>
}

export default TabNavigator;

