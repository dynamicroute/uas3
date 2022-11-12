import * as React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

export default function CreditScreen({ navigation }) {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        height: "100%",
        width: "100%",
        paddingHorizontal: 20,
      }}
    >
      <TouchableOpacity
        style={{
          height: 120,
          width: 120,
          backgroundColor: "#337E78",
          borderRadius: 120,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => navigation.navigate("NewTabCredit")}
      >
        <Image
          source={require("../../assets/arrow.png")}
          resizeMode="contain"
          style={{
            width: 50,
            height: 50,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
