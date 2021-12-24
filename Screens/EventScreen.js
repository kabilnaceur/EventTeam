import React,{useState,useContext,useEffect,useRef} from 'react';
import Event from "../assets/images/event.jpeg"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import { AppContext } from "../context/AppContext";
import { axios } from '../helper/axios';
import io from "socket.io-client"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {

  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,

  SafeAreaView,
  ScrollView

} from 'react-native';
import CommentCard from '../components/CommentCard';



const EventScreen = (props) => {
    const socket = useRef();
    useEffect(() => {

        socket.current = io("http://192.168.1.6:4000");
        socket.current.on("get", (data) => {
          setNewComment({
            user: data.senderId,
            comment: data.text,
          });
        });
      }, []);
 useEffect(() => {

        socket.current.emit("addUser", user._id);
        socket.current.on("getUsers", (users) => {

        });
      }, [user]);

    const [comment , setComment] = useState("")
    const [userEvent , setUserEvent] = useState(false)
    useEffect(() => {
        newComment &&
          
          setComments((prev) => [...prev, newComment]);
      }, [newComment]);

    const [newComment , setNewComment] = useState({})

    const addComment= () => {
        socket.current.emit("send", {
            senderId: user._id,
            text:comment,
          });

        axios.post("/events/comments", {eventId:event._id,comment:comment}, {
          headers: { Authorization: `Bearer ${token}` }
        })
          .then((resp) => {
              setComment('')


          })
          .catch((err) => { console.log('Error : ', err) })
    
      }
    const {token,user,setUser} = useContext(AppContext)
    const isLiked = (eventId) => {
        if (user) {
          return user?.likes?.map(event => event._id).includes(eventId)
      
        }}
        const addLike = (eventId) => {
            axios.get(`events/${eventId}`,  {
                headers: { Authorization: `Bearer ${token}` },
              }).then(
              event => {
                axios.post('users/likes', {
                  eventId: eventId
                },
                  {
                    headers: { Authorization: `Bearer ${token}` },
                  }).then(res => {
                    setUser({ ...user, likes: [...user.likes, event.data] })
                  }).catch(err => {
                    console.log(err)
                  })
                console.log(event)
              }
            ).catch(err => {
              console.log(err)
            })
          }
          const deleteLike = (eventId) => {
            axios.delete(`/users/likes/${eventId}`, {
              headers: { Authorization: `Bearer ${token}` },
            }).then(res => {
              const _user = { ...user }
              const eventIndex = user.likes.findIndex(event => event._id === eventId)
              if (eventIndex > -1) {
                _user.likes.splice(eventIndex, 1)
                setUser({ ..._user })
              }
        
            }).catch(err => {
              console.log(err)
            })
          }

    useEffect(() => {
        axios.get(`/events/${props.route.params.eventId}`, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then(response => {
            if (response && response.data) {
                user?.events.map(eventId=>{
                    if(eventId._id===response.data._id)
                    {setUserEvent(true)}
                })
              setEvent(response.data)
              setComments(response.data.comments)

            }
          })
          .catch((err) => console.log("Error: ", err))
      }, [])
    const [event, setEvent] = useState([])
    const [comments, setComments] = useState([])



  return (


    <SafeAreaView style={styles.backgroud}
    >
<View style={styles.evView}>
    <View style={{flex:1}}>
            <ScrollView >
            <Image source={Event} style={styles.eventImage} />

            <Text style={{...styles.textStyle,fontSize:20,fontWeight:"bold",color:"#2697bb"}}>
                 {event.name}
            </Text>
            <Text style={{...styles.textStyle,fontSize:15}}>
                Event posted by : {event.user?.name}

            </Text>
            <Text style={{...styles.textStyle,fontSize:15}}>
                Type : {event.type}
            </Text>
            <View style={{flexDirection:"row"}}>
            <View style={{flexDirection:"row",flex:4}}>

            <Icon name="location-sharp" color={"#2697bb"} size={20}/>
            <Text style={styles.textStyle}>
                {event.location}</Text>
                </View>
                <View style={{flexDirection:"row",flex:3}}>
                <MaterialIcons name="event-note" color={"#2697bb"} size={20} />

            <Text style={styles.textStyle}>
                {event.date}</Text>
                    </View>
                <View style={{flexDirection:"row",flex:1}}>
                <FontAwesome name="users" color={"#2697bb"} size={20} />
            <Text style={styles.textStyle}>
                {event.numberParticipants}</Text>
                    </View>



            </View>
            <Text style={{...styles.textStyle,fontSize:15}}>
                Description :
            </Text>
            <Text style={{...styles.textStyle,fontSize:15}}>
                {event.description}
           </Text>
           {
               userEvent?(
                   <View style={{alignItems:"center",justifyContent:"center"}}>

                <TouchableOpacity style={{margin:8,backgroundColor:"#2697bb",width:170,height:40,borderRadius:40,justifyContent:"center",alignItems:"center"}}>
                <Text style={{color:"white",fontSize:15}}>
                        Edit Event
                    </Text>

                </TouchableOpacity>
                </View>



               ):(
                <View style={{alignItems:"center",justifyContent:"center"}}>

<TouchableOpacity style={{margin:8,backgroundColor:"#2697bb",width:170,height:40,borderRadius:40,justifyContent:"center",alignItems:"center"}}>
<Text style={{color:"white",fontSize:15}}>
                        Join Event
                    </Text>
                </TouchableOpacity>
                </View>
               )
           }
           {
               comments.map(comment=>(
                <CommentCard comment={comment} key={comment._id}/>

               ))
           }
           </ScrollView>
            </View>
            <View style={{flexDirection:"row",marginBottom:10,marginTop:10}}>
            <TouchableOpacity style={{margin:8}}
                            onPress={()=>{
                                isLiked(event._id)
                                    ? deleteLike(event._id)
                                    : addLike(event._id)}} 
                >
                {
                isLiked(event._id)?(
                    <FontAwesome name="heart" color={"#D61554"} size={30} />

                ):(
                    <FontAwesome name="heart-o" color={"#D61554"} size={30} />

                )
              }

                </TouchableOpacity>
            <TextInput style={styles.commentInput}
            value={comment}
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

  
    </SafeAreaView>


  );
}


const styles = StyleSheet.create({
  backgroud: {
    flex:1,
    alignItems:"center",
    backgroundColor:"#F5F7FA" ,

  },

  evView:{
    
    backgroundColor:"white",
    width:350,
    height:"95%",
    borderRadius:20,
    marginTop:15
},
eventImage:{
    width:350,
    height:150, 
    borderRadius:20

},
textStyle:{
    margin:5,
    color:"#4A5A77",
    fontWeight:"500"
},
commentInput:{
    width:220,
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

export default EventScreen;