import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #bcbaba;
`;

export const ContainerUp = styled.View`
  flex: 2;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const ContainerDown = styled.View`
  flex: 4;
  flex-direction: column;
  width: 100%;
  margin-top: 50px;
`;

export const Inputs = styled.TextInput`
  height: 40px;
  width: 70%;
  margin-top: 30px;
  font-size: 18px;
  border-bottom-width: 1px;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const Titulo = styled.TouchableOpacity`
  font-size: 20px;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const TituloText = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;

export const TextoSenha = styled.Text`
  font-size: 15px;
  align-self: flex-start;
  margin-left: 15%;
  font-weight: bold;
  color: #62a87c;
  margin-top: 40px;
`;

export const BotaoCadastrar = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 320px;
  height: 50px;
  border-radius: 20px;
  margin-top: 35px;
  margin-bottom: 10px;
  background-color: #62a87c;
`;

export const ContainerRow = styled.View`
  flex-direction: row;
  width: 100%;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const ContainerCheck = styled.View`
  justify-content: flex-start;
  margin-left: 55px;
  margin-top: 20px;
`;

export const TextoCheck = styled.View`
  flex-direction: row;
`;
