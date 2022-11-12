import * as React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

export default function NewTabCreditScreen({ navigation }) {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ alignItems: "center" }}
      style={{
        backgroundColor: "#F8F9FE",
        height: "100%",
        width: "100%",
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          marginTop: 20,
          height: "12%",
          width: "100%",
          borderRadius: 5,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 2,
          borderColor: "#DFDFDF",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: "25",
            color: "#5E5E5E",
            letterSpacing: 1,
          }}
        >
          Kemampuan Angsur
        </Text>
        <Text
          style={{
            fontSize: "20",
            color: "#5E5E5E",
            letterSpacing: 1,
            marginTop: 5,
            fontWeight: "500",
          }}
        >
          Rp 30,000,000
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          alignItems: "flex-end",
          marginTop: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("FAQ")}>
          <Text
            style={{
              fontSize: 20,
              color: "#337E78",
              fontWeight: "500",
              letterSpacing: 1,
            }}
          >
            Apa itu saldo?
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: "100%",
        }}
      >
        <Text
          style={{
            color: "#6B6B6B",
            fontWeight: "bold",
            fontSize: 22,
            marginTop: 20,
            letterSpacing: 0.5,
          }}
        >
          Tips
        </Text>
        <Text
          style={{
            color: "#6B6B6B",
            fontSize: 20,
            marginTop: 5,
            letterSpacing: 0.5,
          }}
        >
          - Balance saldo didapatkan dari informasi gaji dan pinjaman
        </Text>
        <Text
          style={{
            color: "#6B6B6B",
            fontSize: 20,
            marginTop: 5,
            letterSpacing: 0.5,
          }}
        >
          - Tentukan product pinjaman dengan bunga yang menarik
        </Text>
      </View>
      <View style={{ width: "100%" }}>
        <Text
          style={{
            color: "#6B6B6B",
            fontWeight: "bold",
            fontSize: 22,
            marginTop: 20,
          }}
        >
          KAS - Product for your Needs
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          paddingVertical: 10,
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("RenovasiKary")}
          style={{
            backgroundColor: "white",
            width: "48.5%",
            height: 120,
            borderColor: "#DCDDDF",
            borderWidth: 2,
            borderStyle: "dashed",
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#6B6B6B", fontSize: 22 }}>RENOVASI</Text>
          <Text style={{ color: "#6B6B6B", fontSize: 22 }}>Kary</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("MultigunaKary")}
          style={{
            backgroundColor: "white",
            width: "48.5%",
            height: 120,
            borderColor: "#DCDDDF",
            borderWidth: 2,
            borderStyle: "dashed",
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#6B6B6B", fontSize: 22 }}>MULTIGUNA</Text>
          <Text style={{ color: "#6B6B6B", fontSize: 22 }}>Kary</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("KaiPriorityNew")}
          style={{
            backgroundColor: "white",
            width: "48.5%",
            height: 120,
            borderColor: "#DCDDDF",
            borderWidth: 2,
            borderStyle: "dashed",
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#6B6B6B", fontSize: 22 }}>KAI PRIORITY</Text>
          <Text style={{ color: "#6B6B6B", fontSize: 22 }}>NEW</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("KaiPriorityKaryNew")}
          style={{
            backgroundColor: "white",
            width: "48.5%",
            height: 120,
            borderColor: "#DCDDDF",
            borderWidth: 2,
            borderStyle: "dashed",
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#6B6B6B", fontSize: 22 }}>KAI PRIORITY</Text>
          <Text style={{ color: "#6B6B6B", fontSize: 22 }}>KARY NEW</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingVertical: 10,
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Multiguna")}
          style={{
            backgroundColor: "white",
            width: "48.5%",
            height: 120,
            borderColor: "#DCDDDF",
            borderWidth: 2,
            borderStyle: "dashed",
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#6B6B6B", fontSize: 22 }}>MULTIGUNA</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("KaiPriority2X")}
          style={{
            backgroundColor: "white",
            width: "48.5%",
            height: 120,
            borderColor: "#DCDDDF",
            borderWidth: 2,
            borderStyle: "dashed",
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#6B6B6B", fontSize: 22 }}>KAI PRIORITY</Text>
          <Text style={{ color: "#6B6B6B", fontSize: 22 }}>2X</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
