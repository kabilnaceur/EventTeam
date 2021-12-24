import React,{useContext,useState} from 'react';
import Event from "../assets/images/event.jpeg"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import { AppContext } from "../context/AppContext";
import { axios } from '../helper/axios';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {

    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    View,
    TextInput
  } from 'react-native';


  const EventCard = (props) => {
    const [comment , setComment] = useState("")
    const {token} = useContext(AppContext)

    const addComment= () => {

        axios.post("/events/comments", {eventId:props.event._id,comment:comment}, {
          headers: { Authorization: `Bearer ${token}` }
        })
          .then((resp) => {
              console.log(resp)
              setComment('')


          })
          .catch((err) => { console.log('Error : ', err) })
    
      }


    return (
       <TouchableOpacity style={styles.evView}  onPress={()=>props.navig.navigate("Event",{eventId:props.event._id})}
       >


           
<View >
            <Image source={Event} style={styles.eventImage} />
            <Text style={{...styles.textStyle,fontSize:16,fontWeight:"bold",color:"#2697bb"}}>
                 {props.event.name}
            </Text>
            <Text style={{...styles.textStyle,fontSize:15}}>
                Event posted by : {props.event.user.name}

            </Text>

            <Text style={{...styles.textStyle,fontSize:15}}>
                Type : {props.event.type}
            </Text>
            <View style={{flexDirection:"row"}}>
            <View style={{flexDirection:"row",flex:4}}>

            <Icon name="location-sharp" color={"#2697bb"} size={20}/>
            <Text style={styles.textStyle}>
                {props.event.location}</Text>
                </View>
                <View style={{flexDirection:"row",flex:3}}>
                <MaterialIcons name="event-note" color={"#2697bb"} size={20} />

            <Text style={styles.textStyle}>
                {props.event.date}</Text>
                    </View>
                    <View style={{flexDirection:"row",flex:1}}>
                <FontAwesome name="users" color={"#2697bb"} size={20} />
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
            <TextInput style={styles.commentInput}
            onChangeText={(e) => setComment(e)}

            />
            <TouchableOpacity style={styles.commentButton}
            onPress={addComment}
            >
                <Text style={{color:"white",fontWeight:"500"}}>
                <Icon name="send" color={"white"} size={20}/>
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
        height:320,
        borderRadius:20,
        marginBottom:15
    },
    eventImage:{
        width:300,
        height:150, 
        borderRadius:20
    
    },
    textStyle:{
        margin:5,
        color:"#4A5A77",
        fontWeight:"500"
    },
    commentInput:{
        width:180,
        height:40,
        backgroundColor:"#E8F0FE",
        borderRadius:50,
        padding:10
    },
    commentButton:{
        marginTop:3,
        width:40,
        height:35,
        backgroundColor:"#2697bb",
        marginLeft:10,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10
    }
  
  
  
  });
  
  export default EventCard;