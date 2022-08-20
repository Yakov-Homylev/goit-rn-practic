import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./Screens/Auth/LoginScreen";
import RegistrationScreen from "./Screens/Auth/RegistrationScreen";
import HomeScreen from "./Screens/Main/HomeScreen";

const AuthStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator initialRouteName="Login">
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
