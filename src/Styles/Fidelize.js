import styled from "styled-components/native";

export const Titulo = styled.Text`
  font-weight: bold;
  font-size: 38px;
  margin-left: 30px;
  margin-top: 40px;
`;

export const CardTipo = styled.View`
  height: 60px;
  width: 350px;
  background-color: white;
  align-self: center;
  border-radius: 20px;
  margin-top: 55px;
  flex-direction: row;
`;

export const CardTitulo = styled.Text`
  font-weight: bold;
  font-size: 19px;
  align-self: flex-start;
  margin-top: 18px;
  margin-left: 15px;
`;

export const Arrow = styled.View`
  align-self: flex-end;
  padding-left: 120px;
  padding-bottom: 16px;
`;

export const MainCard = styled.View`
  height: 205px;
  width: 100%;
  align-self: center;
  margin-top: 40px;
  flex-direction: row;
`;

export const MainCardDois = styled.View`
  height: 205px;
  width: 100%;
  align-self: center;
  flex-direction: row;
`;

export const AmbulanteUm = styled.Image.attrs({
  source: require("../img/FeiranteUm.jpg"),
})`
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 160px;
  width: 160px;
  border-radius: 100px;
  margin-left: 37px;
`;

export const AmbulanteDois = styled.Image.attrs({
  source: require("../img/Carmem.jpg"),
})`
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 160px;
  width: 160px;
  border-radius: 100px;
  margin-left: 20px;
`;

export const AmbulanteTres = styled.Image.attrs({
  source: require("../img/FeiranteTres.jpg"),
})`
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 160px;
  width: 160px;
  border-radius: 100px;
  margin-left: 37px;
`;

export const AmbulanteQuatro = styled.Image.attrs({
  source: require("../img/FeiranteQuatro.jpeg"),
})`
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 160px;
  width: 160px;
  border-radius: 100px;
  margin-left: 20px;
`;
