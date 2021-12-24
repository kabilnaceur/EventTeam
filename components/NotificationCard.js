import React,{useContext,useState} from 'react';
import Event from "../assets/images/event.jpeg"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import { AppContext } from "../context/AppContext";
import { axios } from '../helper/axios';
import UserPhoto from "../assets/images/userPic.jpg"

import {

    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    View,
    TextInput
  } from 'react-native';


  const NotificationCard = (props) => {

    return (
       <View style={styles.evView}  
       >
        <View style={{padding:10,alignItems:"center"}} >
      <Image source={UserPhoto} style={styles.photo} />
      </View>
      <View style={{flex:1}}>
          <Text style={{...styles.Text,fontSize:17}}>
          kabil naceur
          </Text>
          <Text style={styles.Text}>
        has liked your event Party
          </Text>
      </View>


       </View>
        

 
            




    );
  }
  
  
  const styles = StyleSheet.create({


    evView:{
        flex:1,
        backgroundColor:"#E8F0FE",
        width:"100%",
        height:80,
        borderRadius:20,
        marginTop:10,
        flexDirection:"row"
    },
    photo: {
        borderRadius: 100,
        width: 40,
        height: 40
      },
  
      Text:{
        color: "#4A5A77",
        marginTop:10
    
    
      },
  
  });
  
  export default NotificationCard;