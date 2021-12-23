import React,{useState,useContext,useEffect} from 'react';
import Event from "../assets/images/event.jpeg"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import { AppContext } from "../context/AppContext";
import { axios } from '../helper/axios';
import {

  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,

  SafeAreaView

} from 'react-native';



const EventScreen = (props) => {
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
              setEvent(response.data)
            }
          })
          .catch((err) => console.log("Error: ", err))
      }, [])
    const [event, setEvent] = useState([])
console.log(event)

  return (


    <SafeAreaView style={styles.backgroud}
    >
<View style={styles.evView}>
    <View style={{flex:1}}>
            <Image source={Event} style={styles.eventImage} />
            <Text style={styles.textStyle}>
                Event posted by : {event.user?.name}

            </Text>
            <Text style={styles.textStyle}>
                Type : {event.type}
            </Text>
            <View style={{flexDirection:"row"}}>
            <View style={{flexDirection:"row",flex:2}}>

            <Icon name="location-sharp" color={"#2697bb"} size={30}/>
            <Text style={styles.textStyle}>
                {event.location}</Text>
                </View>
                <View style={{flexDirection:"row",flex:1}}>
                <FontAwesome name="users" color={"#2697bb"} size={30} />
            <Text style={styles.textStyle}>
                {event.numberParticipants}</Text>
                    </View>



            </View>
            <Text style={styles.textStyle}>
                Description :
            </Text>
            <Text style={styles.textStyle}>
                {event.description}
           </Text>
            </View>
            <View style={{flexDirection:"row",marginBottom:10}}>
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
            <TextInput style={styles.commentInput}/>
            <TouchableOpacity style={styles.commentButton}>
                <Text style={{color:"white",fontWeight:"500"}}>
                    Comment
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
    fontSize:16,
    margin:5,
    color:"#4A5A77",
    fontWeight:"500"
},
commentInput:{
    width:190,
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

export default EventScreen;