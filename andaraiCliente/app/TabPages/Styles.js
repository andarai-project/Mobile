import styled from "styled-components";
import { Dimensions } from 'react-native';

const {width} = Dimensions.get('screen')

export const Wrapper = styled.View.attrs({
  position: "absolute",
  bottom: 20,
  width: width,
  alignItems: 'center',
  justifyContent: 'center',
})

export const ContainerTab = styled.View.attrs({
  flexDirection: 'row',
  backgroundColor: '#fff',
  width: width,
  justifyContent: 'space-between',
})

//we can try padding with px or nothing if it doesn't work
export const OpacidadeTocavel = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 5em;
`;


export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #76a6ef;    
`;

export const TextUm = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;
