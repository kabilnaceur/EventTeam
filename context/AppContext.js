import React, { createContext, useState } from 'react';
import {axios} from "../helper/axios";
import logo from "../assets/images/logo.png"
import * as Notifications from 'expo-notifications';


import {

View,Text,Image,StyleSheet

} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
Notifications.setNotificationHandler({
  handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
  }),
});

export const AppContext = createContext();


const AppContextProvider =  (props) => {
  
  const [events, setEvents] = useState([])

  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState( AsyncStorage.getItem('token'));
  const [user, setUser] = useState(null); 
  const [notifications, setNotifications] = React.useState([])
  const notificationListener = React.useRef();

  React.useEffect(async () => {
    await refreshUser()

}, [])
    const loginUser= (token) => {
    setToken(token);
    


  };
  const refreshUser = async () => {
    setLoading(true)
    if (token)
        axios.get(`/users/userconn`,{
          headers: { Authorization: `Bearer ${token}` },
        })
            .then(response => {
              setNotifications(response.data.notifications.slice(0).reverse())

                setUser(response.data.connectedUser)
                setLoading(false)

            }).catch(err => {
                setUser(null)
                setLoading(false)

                console.log(err)
            })
    else
        setLoading(false)


}

  const logoutUser = async () => {

    await AsyncStorage.removeItem('token');
    setUser(null)
    setLoading(false)
  
  };
  const markNotificationsAsRead = () => {
    axios.patch('/users/notifications')
        .then(res => {
            console.log('successfully updated')
        })
        .catch(err => {
            console.log(err)
        })
}
const registerForPushNotificationsAsync = async () => {
  let token;

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
  }
  if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
  }
  token = (await Notifications.getExpoPushTokenAsync()).data;
  console.log('token', token);


  if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#FF231F7C',
      });
  }

  return token;
}

React.useEffect(() => {
  if (user) {
      registerForPushNotificationsAsync().then(token => {
          axios.patch('/users/notification-token', {
            headers: { Authorization: `Bearer ${token}` },
          })
              .then(res => {
                  console.log("kabil",token)
              })
              .catch(err => {
                  console.log(err)
              })

      });

      notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
          const newNotification = notification.request.content.data
          setNotifications((_notifications) => {

              return [newNotification, ..._notifications]
          });
      });

      return () => {
          Notifications.removeNotificationSubscription(notificationListener.current);
      };
  }
}, [user]);

  return (
    <AppContext.Provider
      value={{
        token,
        user,  
        setUser,
        loginUser,
        logoutUser,
        setLoading,
        refreshUser,
        events,
        setEvents,
        markNotificationsAsRead,
        notifications
      }}
    >
      {!loading?(props.children):
      (<View style={styles.backgroud}>
      <Image source={logo} style={styles.logo} />
        </View>
      )}
    </AppContext.Provider>
  );
};

const styles = StyleSheet.create({
  backgroud: {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#F5F7FA" ,

  },
  logo : {
    marginTop:20,
    width:500,
    height:200
  },





});

export default AppContextProvider;
