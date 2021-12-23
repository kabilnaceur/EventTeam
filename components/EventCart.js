import React from 'react';
import ContactPhoto from "../../assets/images/user.png"
import CallIcon from "../../assets/images/phonerec.png"
import CallType from "../../assets/images/callType.png"


import {

    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    View
  } from 'react-native';


  const EventCard = (props) => {


    return (
       <TouchableOpacity style={{flexDirection:"row",margin:8,backgroundColor:"white",height:60}} key = {props.contact._id} >


           



       </TouchableOpacity>
        

 
            




    );
  }
  
  
  const styles = StyleSheet.create({

    contacPhoto: {

        marginLeft:10,
        marginTop:12,
      width:37,
      height:37
    }
  
  
  
  });
  
  export default EventCard;