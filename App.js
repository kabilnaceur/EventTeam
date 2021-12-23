import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import AppContextProvider from './context/AppContext';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import SettingsScreen from './Screens/SettingsScreen';
import ProfileScreen from './Screens/ProfileScreen';
import AddEventScreen from './Screens/AddEventScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignupScreen from './Screens/SignupScreen';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const BottomNav = (props) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#2697bb',
        keyboardHidesTabBar: true 

      }}
      headerMode='screen'

    >
      <Tab.Screen name="Home" component={HomeScreen}           
        options={{       
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />

            ),}} />
                  <Tab.Screen name="Add Event" component={AddEventScreen}           
        options={{       
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="event-note" color={color} size={size} />

            ),}} />
                  <Tab.Screen name="Profile" component={ProfileScreen}           
        options={{       
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="user" color={color} size={size} />

            ),}} />
                  <Tab.Screen name="Settings" component={SettingsScreen}           
        options={{       
              tabBarIcon: ({ color, size }) => (
                <Icon name="settings-sharp" color={color} size={size} />

            ),}} />
    </Tab.Navigator>


  )

}

export default function App() {
  return (
    <NavigationContainer>
        <AppContextProvider>
        <Stack.Navigator
          initialRouteName='Load'
          headerMode='screen'
          screenOptions={{ headerShown: false }} >

          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Sign Up" component={SignupScreen} />
          <Stack.Screen name="Home" component={BottomNav} />

        </Stack.Navigator>
        </AppContextProvider>
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
