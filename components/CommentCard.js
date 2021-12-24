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


  const CommentCard = (props) => {
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
       <View style={styles.evView}  onPress={()=>props.navig.navigate("Event",{eventId:props.event._id,isLiked:props.isLiked,addLike:props.addLike,deleteLike:props.deleteLike})}
       >
        <View style={{padding:10,alignItems:"center"}} >
      <Image source={UserPhoto} style={styles.photo} />
      </View>
      <View style={{flex:1}}>
          <Text style={{...styles.Text,fontSize:17}}>
          {props.comment.user?.name}
          </Text>
          <Text style={styles.Text}>
            {props.comment.comment}
          </Text>
      </View>
      <View>
          <TouchableOpacity style={{margin:10}}>
          <FontAwesome name="heart-o" color={"#D61554"} size={28} />

          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft:13}}>
          <FontAwesome name="trash" color={"#2697bb"} size={28} />

          </TouchableOpacity>
      </View>




       </View>
        

 
            




    );
  }
  
  
  const styles = StyleSheet.create({


    evView:{
        flex:1,
        backgroundColor:"#E8F0FE",
        width:"90%",
        height:80,
        borderRadius:20,
        marginTop:15,
        marginLeft:15,
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
  
  export default CommentCard;