import * as React from "react";
import { View, Text } from "react-native";

export default function HomeScreen({ navigation }) {
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
      <Text
        style={{
          fontSize: 50,
          fontWeight: "bold",
          color: "black",
          textAlign: "center",
        }}
      >
        Home Screen
      </Text>
    </View>
  );
}
