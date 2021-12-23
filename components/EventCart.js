import React from 'react';
import Event from "../assets/images/event.jpeg"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';


import {

    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    View,
    TextInput
  } from 'react-native';


  const EventCard = (props) => {


    return (
       <TouchableOpacity style={styles.evView}  onPress={()=>props.navig.navigate("Event")}
       >


           
<View >
            <Image source={Event} style={styles.eventImage} />
            <Text style={styles.textStyle}>
                Event posted by : {props.event.user.name}

            </Text>
            <Text style={styles.textStyle}>
                Type : {props.event.type}
            </Text>
            <View style={{flexDirection:"row"}}>
            <View style={{flexDirection:"row",flex:2}}>

            <Icon name="location-sharp" color={"#2697bb"} size={30}/>
            <Text style={styles.textStyle}>
                {props.event.location}</Text>
                </View>
                <View style={{flexDirection:"row",flex:1}}>
                <FontAwesome name="users" color={"#2697bb"} size={30} />
            <Text style={styles.textStyle}>
                {props.event.numberParticipants}</Text>
                    </View>



            </View>
            <View style={{flexDirection:"row"}}>
                <TouchableOpacity style={{margin:8}}
                            onPress={()=>{
                                props.isLiked(props.event._id)
                                    ? props.deleteLike(props.event._id)
                                    : props.addLike(props.event._id)}} 
                >
                {
                props.isLiked(props.event._id)?(
                    <FontAwesome name="heart" color={"#D61554"} size={30} />

                ):(
                    <FontAwesome name="heart-o" color={"#D61554"} size={30} />

                )
              }

                </TouchableOpacity>
            <TextInput style={styles.commentInput}/>
            <TouchableOpacity style={styles.commentButton}>
                <Text style={{color:"white",fontWeight:"500"}}>
                    Comment
                </Text>
            </TouchableOpacity>


            </View>



            </View>


       </TouchableOpacity>
        

 
            




    );
  }
  
  
  const styles = StyleSheet.create({


    evView:{
        flex:1,
        backgroundColor:"white",
        width:300,
        height:300,
        borderRadius:20,
        marginBottom:15
    },
    eventImage:{
        width:300,
        height:150, 
        borderRadius:20
    
    },
    textStyle:{
        fontSize:16,
        margin:5,
        color:"#4A5A77",
        fontWeight:"500"
    },
    commentInput:{
        width:160,
        height:40,
        backgroundColor:"#E8F0FE",
        borderRadius:50,
        padding:10
    },
    commentButton:{
        width:70,
        height:40,
        backgroundColor:"#2697bb",
        marginLeft:10,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10
    }
  
  
  
  });
  
  export default EventCard;