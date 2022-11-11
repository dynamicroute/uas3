import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CreditScreen from "./src/screens/Credit";
import BottomNavigation from "./src/navigation/Navigation";

const Stack = createNativeStackNavigator();

const MainScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name="Credit" component={CreditScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
