import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #f2f2f2;
`;

export const Header = styled.View`
  height: 150px;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const TituloText = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;

export const Main = styled.View`
  flex: 1;
  height: 500px;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const Footer = styled.View`
  height: 100px;
`;

export const Card = styled.View`
  height: 90px;
  width: 320px;
  border-radius: 20px;
  padding-top: 14px;
  padding-left: 14px;
  margin: 10px;
  background-color: white;
`;

export const ImgConatiner = styled.View`
  height: 65px;
  width: 65px;
  border-width: 1px;
  border-radius: 70px;
`;

export const TituloCard = styled.Text`
  font-weight: bold;
  padding-left: 10px;
  padding-top: 10px;
  font-size: 16px;
`;

export const PrecoCard = styled.Text`
  padding-left: 10px;
  padding-top: 5px;
  font-weight: bold;
  color: #62a87c;
`;

export const BotaoFinal = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 320px;
  height: 50px;
  border-radius: 20px;
  background-color: #62a87c;
`;
