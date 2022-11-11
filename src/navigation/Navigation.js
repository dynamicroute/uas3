import * as React from "react";
import { View, Text, Image, Button, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home";
import ServiceScreen from "../screens/Service";
import CreditScreen from "../screens/Credit";
import UserScreen from "../screens/User";
import NewTabCreditScreen from "../screens/NewTabCredit";
import FAQScreen from "../screens/FAQ";
import RenovasiKaryScreen from "../screens/Apps/RenovasiKary";
import MultigunaKaryScreen from "../screens/Apps/MultigunaKary";
import KaiPriorityNewScreen from "../screens/Apps/KaiPriorityNew";
import KaiPriorityKaryNewScreen from "../screens/Apps/KaiPriorityKaryNew";
import MultigunaScreen from "../screens/Apps/Multiguna";
import KaiPriority2XScreen from "../screens/Apps/KaiPriority2X";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const CreditScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Credit"
        component={CreditScreen}
        options={{
          headerShown: false,
          headerTitle: "Credit",
        }}
      />
      <Stack.Screen
        name="NewTabCredit"
        component={NewTabCreditScreen}
        options={{
          headerTitle: "",
          headerBackTitle: "Credit",
          headerTintColor: "#252525",
          // headerBackTitleStyle: { fontSize: 20 },
          // headerBackImageSource
        }}
      />
      <Stack.Screen
        name="FAQ"
        component={FAQScreen}
        options={{
          headerTitle: "",
          headerBackTitle: "Angsuran",
          headerTintColor: "#252525",
          // headerBackTitleStyle: { fontSize: 20 },
        }}
      />
      <Stack.Screen
        name="RenovasiKary"
        component={RenovasiKaryScreen}
        options={{
          headerTitle: "",
          headerBackTitle: "Angsuran",
          headerTintColor: "#252525",
          // headerBackTitleStyle: { fontSize: 20 },
        }}
      />
      <Stack.Screen
        name="MultigunaKary"
        component={MultigunaKaryScreen}
        options={{
          headerTitle: "",
          headerBackTitle: "Angsuran",
          headerTintColor: "#252525",
          // headerBackTitleStyle: { fontSize: 20 },
        }}
      />
      <Stack.Screen
        name="KaiPriorityNew"
        component={KaiPriorityNewScreen}
        options={{
          headerTitle: "",
          headerBackTitle: "Angsuran",
          headerTintColor: "#252525",
          // headerBackTitleStyle: { fontSize: 20 },
        }}
      />
      <Stack.Screen
        name="KaiPriorityKaryNew"
        component={KaiPriorityKaryNewScreen}
        options={{
          headerTitle: "",
          headerBackTitle: "Angsuran",
          headerTintColor: "#252525",
          // headerBackTitleStyle: { fontSize: 20 },
        }}
      />
      <Stack.Screen
        name="Multiguna"
        component={MultigunaScreen}
        options={{
          headerTitle: "",
          headerBackTitle: "Angsuran",
          headerTintColor: "#252525",
          // headerBackTitleStyle: { fontSize: 20 },
        }}
      />
      <Stack.Screen
        name="KaiPriority2X"
        component={KaiPriority2XScreen}
        options={{
          headerTitle: "",
          headerBackTitle: "Angsuran",
          headerTintColor: "#252525",
          // headerBackTitleStyle: { fontSize: 20 },
        }}
      />
    </Stack.Navigator>
  );
};

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                height: "100%",
              }}
            >
              <Image
                source={require("../../assets/home.png")}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  marginTop: 15,
                }}
              />
              <View style={{ position: "absolute", marginTop: 40 }}>
                <Text
                  style={{
                    fontWeight: "700",
                    fontSize: 13,
                    color: focused ? "#337E78" : "#666666",
                  }}
                >
                  Home
                </Text>
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Service"
        component={ServiceScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                height: "100%",
              }}
            >
              <Image
                source={require("../../assets/service.png")}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  marginTop: 15,
                }}
              />
              <View style={{ position: "absolute", marginTop: 40 }}>
                <Text
                  style={{
                    fontWeight: "700",
                    fontSize: 13,
                    color: focused ? "#337E78" : "#666666",
                  }}
                >
                  Service
                </Text>
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="CreditIndex"
        component={CreditScreens}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                height: "100%",
              }}
            >
              <Image
                source={require("../../assets/credit.png")}
                resizeMode="contain"
                style={{
                  width: 22,
                  height: 20,
                  marginTop: 15,
                }}
              />
              <View style={{ position: "absolute", marginTop: 40 }}>
                <Text
                  style={{
                    fontWeight: "700",
                    fontSize: 13,
                    color: focused ? "#337E78" : "#666666",
                  }}
                >
                  Credit
                </Text>
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                height: "100%",
              }}
            >
              <Image
                source={require("../../assets/user.png")}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  marginTop: 15,
                }}
              />
              <View style={{ position: "absolute", marginTop: 40 }}>
                <Text
                  style={{
                    fontWeight: "700",
                    fontSize: 13,
                    color: focused ? "#337E78" : "#666666",
                  }}
                >
                  User
                </Text>
              </View>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
