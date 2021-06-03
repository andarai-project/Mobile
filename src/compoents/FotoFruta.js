import React from "react";
import { ImageBackground } from "react-native";

const FotoFruta = (props) => {
  return (
    <ImageBackground
      source={props.image}
      style={{
        width: 65,
        height: 65,
        borderRadius: "100%",
      }}
    />
  );
};

export default FotoFruta;
