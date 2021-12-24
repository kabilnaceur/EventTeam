import React,{useState,useContext,useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { AppContext } from "../context/AppContext";
import { axios } from '../helper/axios';
import logo from "../assets/images/logo.png"


import {

  StyleSheet,
View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Text

} from 'react-native';
import EventCard from '../components/EventCart';



const HomeScreen = (props) => {
    const {token,user,setUser,events,setEvents} = useContext(AppContext)
    const [loading, setLoading] = React.useState(true)
    const [searchTerm, setSearchTerm] = useState("")
    const [eventsSearching, setEventsSearching] = useState([])

      const searching = ()=> {
        console.log("hhhh")
        axios.get(`/events/search?searchTerm=${searchTerm}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      ).then(res => {
        console.log("hhhh",res.data.events)

        setEvents(res.data.events)
        setSearchTerm("")

      }).catch(err => {
        console.log(err)
      })

      }
    React.useEffect(() => {
      if (!user)
          {props.navigation.replace('Login')}
          else{setLoading(false)}
     
  }, [user])
useEffect(() => {
    axios.get('/events', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(response => {
        if (response && response.data) {
          setEvents(response.data)
        }
      })
      .catch((err) => console.log("Error: ", err))
  }, [])
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
      console.log(eventsSearching)
if(!loading){

  return (


    <SafeAreaView style={styles.backgroud}
    >
        <View style={styles.searchView}>
        <TextInput style={styles.searchInput}  
        onChangeText={(e) => setSearchTerm(e)}
        value={searchTerm}
        placeholder="Search .."
       
        />
        <TouchableOpacity style={styles.searchButton}  onPress={searching}>
        <Icon name="search-outline" color={"white"} size={30}/>

        </TouchableOpacity>



        </View>
        <ScrollView contentContainerStyle={styles.eventView}>
          
            {
                events.map(event=>(
                    <EventCard navig={props.navigation} key={event._id} event={event} isLiked={isLiked} addLike={addLike} deleteLike={deleteLike}/>


                ))
            }

        </ScrollView>
    
  
    </SafeAreaView>


  )}else{
    return(
    <View style={styles.backgroud}>
    <Image source={logo} style={styles.logoScreen} />
      </View>)
  };
}


const styles = StyleSheet.create({
  backgroud: {
    flex:1,
    alignItems:"center",
    backgroundColor:"#F5F7FA" ,

  },
  searchView:{
      backgroundColor:"white",
      width:350,
      height:50,
      marginTop:20,
      borderRadius:10,
      flexDirection:"row"

  },
  searchInput:{
    backgroundColor:"#E8F0FE",
    width:"80%",
    height:35,
    marginLeft:10,
    marginTop:7,
    borderRadius:100,
    padding:10
},
searchButton:{
    width:35,
    height:35,
    backgroundColor:'#2697bb',
    marginLeft:10,
    marginTop:7,
    borderRadius:10,
    alignItems:"center",
    justifyContent:"center"


},
eventView:{
    backgroundColor:"#F5F7FA",
    margin:20,
    alignItems:"center",
    paddingBottom:20
    
},logoScreen : {
  marginTop:20,
  width:500,
  height:200
}






});

export default HomeScreen;