import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Drawer = createDrawerNavigator();

const BottomTab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#3c0a6b",
          },
          headerTintColor: "#ffffff",
          tabBarActiveTintColor: "#3c0a6b"
        }}
      >
        <BottomTab.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            tabBarIcon: ({color, size}) => <Ionicons name="home" color={color} size={size}></Ionicons>
          }}
        ></BottomTab.Screen>
        <BottomTab.Screen name="User" component={UserScreen} options={{
          tabBarIcon: ({color, size}) => <Ionicons name="person" color={color} size={size}></Ionicons>
        }}></BottomTab.Screen>
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
