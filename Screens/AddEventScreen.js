import React,{useState,useContext,useEffect} from 'react';
import NoImage from "../assets/images/noimage.jpeg"
import { AppContext } from "../context/AppContext";
import { axios } from '../helper/axios';

import {

  StyleSheet,
  Image,
View,
  SafeAreaView,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView

} from 'react-native';



const AddEventScreen = (props) => {
    const {token,events,setEvents} = useContext(AppContext)

    const [name, setName] = useState("");
    const [date, setDate] = useState(null);
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const addEvent = () => {

        axios.post("/users/events", {name:name,date:date,type:type,location:location,des:description}, {
          headers: { Authorization: `Bearer ${token}` }
        })
          .then((resp) => {
              console.log(resp)
              const newEvents = [resp.data,...events];
              setEvents(newEvents);
              setType('')
              setDescription('')
              setLocation('')
              setDate('')
              setName('')

          })
          .catch((err) => { console.log('Error : ', err) })
    
      }



  return (
      


    <SafeAreaView style={styles.backgroud}
    >
        <ScrollView contentContainerStyle={{width:"100%",justifyContent:"center",paddingTop:20,paddingBottom:20,alignItems:"center"}}>

              <View style={styles.loginView}>
              <Image source={NoImage} style={styles.image} />

        <Text style={styles.usernameText}>
        Name
        </Text>
        <TextInput
        style={styles.input}
        onChangeText={(e) => setName(e)}

        />
        <Text style={styles.usernameText}>
        Type
        </Text>
        <TextInput
        style={styles.input}
        onChangeText={(e) => setType(e)}

        />
                <Text style={styles.usernameText}>
                Location
        </Text>
        <TextInput
        style={styles.input}
        onChangeText={(e) => setLocation(e)}

        />
                <Text style={styles.usernameText}>
                Date
        </Text>
        <TextInput
        style={styles.input}
        onChangeText={(e) => setDate(e)}

        />
         <Text style={styles.usernameText} type="password">
             Description
        </Text>
        <TextInput
        style={styles.inputDescription}
        onChangeText={(e) => setDescription(e)}


        />
        <TouchableOpacity style={styles.buttonLogin}              
onPress={addEvent}

        >
          <Text style={styles.buttonText}>
            Add Event
          </Text>
        </TouchableOpacity>

      </View>

      </ScrollView>
  
    </SafeAreaView>


  );
}


const styles = StyleSheet.create({
  backgroud: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#F5F7FA" ,

  },
  buttonLogin:{
    marginTop:18,
    backgroundColor:"#2697bb",
    borderRadius:50,
    width: 105,
    alignItems:"center",
    justifyContent:"center",
    height: 39
  
  },
  buttonText:{
    color:"white",
    fontSize: 16,
  
  },
  loginView:{
    alignItems:"center",
    backgroundColor:"white",
    width:280,
    height:550,
    borderRadius:20,
  },
  loginText:{
    fontSize: 11,
    marginTop:22,
    color: "#D61554",
    width: 149,
    height: 26,
    textAlign:"center"


  },
  input:{
    backgroundColor:"#E8F0FE",
    width: 223,
    height: 33,
    borderRadius:50,
    paddingLeft:10
  },
usernameText:
{
  width: 223,
  height: 33,
  marginTop:8,
  color: "#4A5A77",
  fontSize: 13,


},
image : {
    marginTop:10,
    width:80,
    height:80,
    borderRadius:100,
  },
  inputDescription:{
    backgroundColor:"#E8F0FE",
    width: 223,
    height: 55,
    borderRadius:20,
    paddingLeft:10

  },

});

export default AddEventScreen;