import React from "react";
import { ImageBackground } from "react-native";

const Logo = (props) => {
  return (
    <ImageBackground
      source={props.image}
      style={{
        width: 200,
        height: 200,
        marginTop: 150,
      }}
    />
  );
};

export default Logo;
