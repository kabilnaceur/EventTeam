import React from 'react';
import Event from "../assets/images/event.jpeg"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {

    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    View,
  } from 'react-native';


  const EventUser = (props) => {




    return (
        <TouchableOpacity style={styles.evView}  onPress={()=>props.navig.navigate("Event",{eventId:props.event._id})}
        >
           <View>
           <Image source={Event} style={styles.eventImage} />

           </View>
           <View style={{flex:1,paddingLeft:10}}>
           <Text style={{...styles.textStyle,fontSize:20,fontWeight:"bold",color:"#2697bb", marginTop:10}}>
           {props.event.name}
               </Text>
               <Text style={{...styles.textStyle,fontSize:15,marginTop:8}}>
                Type :  {props.event.type}

            </Text>
           
           <View style={{flexDirection:"row",marginTop:8}}>
            <View style={{flexDirection:"row",flex:2,marginRight:10}}>

            <Icon name="location-sharp" color={"#2697bb"} size={20}/>
            <Text style={styles.textStyle}>
                {props.event.location}
                </Text>
                </View>
                <View style={{flexDirection:"row",flex:3}}>
                <MaterialIcons name="event-note" color={"#2697bb"} size={20} />

            <Text style={styles.textStyle}>
            {props.event.date}
                </Text>
                    </View>
                    <View style={{flexDirection:"row",flex:1}}>
                <FontAwesome name="users" color={"#2697bb"} size={20} />
            <Text style={styles.textStyle}>
                0
                </Text>
                    </View>
</View>


            </View>


        


       </TouchableOpacity>
        

 
            




    );
  }
  
  
  const styles = StyleSheet.create({


    evView:{
        flex:1,
        backgroundColor:"white",
        width:"100%",
        height:140,
        borderRadius:20,
        marginBottom:15,
        flexDirection:"row"
    },
    eventImage:{
        width:100,
        height:140, 
        borderRadius:20
    
    },
    textStyle:{
        color:"#4A5A77",
        fontWeight:"500"
    },

  
  
  });
  
  export default EventUser;