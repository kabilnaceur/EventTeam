import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/LoginScreen';
import SignupScreen from './Screens/SignupScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Load'
          headerMode='screen'
          screenOptions={{ headerShown: false }} >

          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Sign Up" component={SignupScreen} />

        </Stack.Navigator>
    </NavigationContainer>  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
