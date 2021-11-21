import React from "react";
import { StyleSheet , Text, View } from "react-native";
import { Provider } from "react-redux";
import HomeScrreen from "./screens/HomeScrreen";
import MapScreen from "./screens/MapScreen";
import { store } from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import 'react-native-gesture-handler'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function App() {
  const stack = createStackNavigator();

  return (
    <Provider store={store}>
        <NavigationContainer> 
        <SafeAreaProvider>
            <stack.Navigator>
              <stack.Screen 
                name='HomeScreen'
                component={HomeScrreen}
                Options={{
                  headerShown: false,
                }}
              />
              <stack.Screen 
                name='MapScreen'
                component={MapScreen}
                Options={{
                  headerShown: false,
                }}
              />
            </stack.Navigator>
        </SafeAreaProvider>
        </NavigationContainer>     
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
