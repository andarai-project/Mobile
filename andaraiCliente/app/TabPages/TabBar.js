import React, {useState} from 'react';
import Tab from './Tab';
import {View, StyleSheet, Dimensions } from 'react-native';


const {width} = Dimensions.get('screen')


const TabBar = ({state, navigation}) => {
    const [selected, setSelected] = useState('Home')
    const {routes} = state;
    const renderColor = (currentTab) => (currentTab === selected ? '#76a6ef' : 'black' ); 

    const handlePress = (activeTab, index) => {
    if(state.index !== index){ 
      setSelected(activeTab);
      navigation.navigate(activeTab);
      }
    };

  

  return (
     <View style = {styles.wrapper}>
         <View style = {styles.container}>
           {
               routes.map((route, index) => 
               <Tab tab = {route} 
                icon={route.params.icon} 
                onPress={ () => handlePress(route.name, index)} 
                color={renderColor(route.name)} 
                key={route.key}
                />
              )
           }
         </View>
     </View>
  )
};

const styles = StyleSheet.create({
   wrapper: {
     position: 'absolute',
     width: width,
     bottom: 0,
     alignItems: 'center',
     justifyContent: 'center',
   },
   container:{
     flexDirection: 'row',
     backgroundColor: '#fff',
     width: width,
   }

})



export default TabBar;