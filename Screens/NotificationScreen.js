import React,{useContext,useEffect} from 'react';
import { AppContext } from "../context/AppContext";

import {

    StyleSheet,
SafeAreaView,
ScrollView,


  } from 'react-native';
import NotificationCard from '../components/NotificationCard';

const NotificationScreen = (props) => {



  const {user,notifications} = useContext(AppContext)
  console.log(notifications)
  return (
    <SafeAreaView style={styles.backgroud}
    >      
    <ScrollView style={{width:"100%",padding:15}}>
        <NotificationCard/>
        <NotificationCard/>
        <NotificationCard/>
        <NotificationCard/>
        <NotificationCard/>
        <NotificationCard/>

    </ScrollView>
  
 
  
    </SafeAreaView>
  );
}

 
const styles = StyleSheet.create({
  backgroud: {
    flex:1,
    justifyContent:"flex-start",
    alignItems:"center",
    backgroundColor:"#F5F7FA" ,

  },
});

export default NotificationScreen;