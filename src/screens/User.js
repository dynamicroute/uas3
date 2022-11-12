import * as React from "react";
import { View, Text } from "react-native";

export default function UserScreen({ navigation }) {
  return (
    <View>
      <View
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          backgroundColor: "#337E78",
          height: "100%",
          width: "100%",
        }}
      >
        <View
          style={{
            height: 80,
            width: 80,
            borderRadius: 40,
            backgroundColor: "white",
            marginBottom: 10,
            borderWidth: 3,
            borderColor: "#83CEC8",
          }}
        ></View>
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 25,
            marginBottom: 40,
          }}
        >
          Lukman Nur Hakim
        </Text>
        <View
          style={{
            backgroundColor: "white",
            width: "100%",
            height: "70%",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{ fontSize: "20", fontWeight: "bold", color: "#252525" }}
          >
            User Profile Screen
          </Text>
        </View>
      </View>
    </View>
  );
}
