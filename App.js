import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/LoginScreen';
import EventScreen from './Screens/EventScreen';
import HomeScreen from './Screens/HomeScreen';
import AppContextProvider from './context/AppContext';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import SettingsScreen from './Screens/SettingsScreen';
import ProfileScreen from './Screens/ProfileScreen';
import AccountScreen from './Screens/AccountScreen';
import SecurityScreen from './Screens/SecurityScreen';
import AddEventScreen from './Screens/AddEventScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignupScreen from './Screens/SignupScreen';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const SettingStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

const SettingsPages = (props) => {
  return(  <SettingStack.Navigator
    initialRouteName='Profile'
    headerMode='screen'
 
  >
          <SettingStack.Screen name="Settings" component={SettingsScreen}
          />
          <SettingStack.Screen name="Account" component={AccountScreen}/>
          <SettingStack.Screen name="Security" component={SecurityScreen}/>


  </SettingStack.Navigator>)


}
const HomePages = (props) => {
  return(  <HomeStack.Navigator
    initialRouteName='Home'
    headerMode='screen'
 
  >
          <HomeStack.Screen name="Home" component={HomeScreen}
          />
          <HomeStack.Screen name="Event" component={EventScreen}/>


</HomeStack.Navigator>  )


}
const ProfilePages = (props) => {
  return(  <ProfileStack.Navigator
    initialRouteName='Profile'
    headerMode='screen'
 
  >
          <ProfileStack.Screen name="Profile" component={ProfileScreen}
          />
          <ProfileStack.Screen name="Event" component={EventScreen}/>


</ProfileStack.Navigator>  )


}
const BottomNav = (props) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#2697bb',
        keyboardHidesTabBar: true 

      }}
      headerMode='screen'

    >
      <Tab.Screen name="Home" component={HomePages}           
        options={{      
          headerShown: false,
 
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />

            ),}} />
                  <Tab.Screen name="Add Event" component={AddEventScreen}           
        options={{       
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="event-note" color={color} size={size} />

            ),}} />
                  <Tab.Screen name="Profile Page" component={ProfilePages}           
        options={{    headerShown: false,
     
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="user" color={color} size={size} />

            ),}} />
                  <Tab.Screen name="Setting" component={SettingsPages}           
        options={{       
          headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Icon name="settings-sharp" color={color} size={size} />

            ),}} />
    </Tab.Navigator>


  )

}

export default function App() {
  return (
    <AppContextProvider>
    <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Load'
          headerMode='screen'
          screenOptions={{ headerShown: false }} >

          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Sign Up" component={SignupScreen} />
          <Stack.Screen name="Home" component={BottomNav} />

        </Stack.Navigator>
    </NavigationContainer> 
    </AppContextProvider>
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
