import React,{useState,useContext,useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { AppContext } from "../context/AppContext";
import { axios } from '../helper/axios';


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
    const {token,user} = useContext(AppContext)
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
  const [events, setEvents] = useState([])


  return (


    <SafeAreaView style={styles.backgroud}
    >
        <View style={styles.searchView}>
        <TextInput style={styles.searchInput}  
        onChangeText={(e) => setSearchTerm(e)}
        placeholder="Search .."
        />
        <TouchableOpacity style={styles.searchButton}>
        <Icon name="search-outline" color={"white"} size={30}/>

        </TouchableOpacity>



        </View>
        <ScrollView contentContainerStyle={styles.eventView}>
            {
                events.map(event=>(
                    <EventCard navig={props.navigation} key={event._id} event={event}/>


                ))
            }

        </ScrollView>
    
  
    </SafeAreaView>


  );
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
    
},






});

export default HomeScreen;