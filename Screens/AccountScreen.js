import React,{useState,useContext} from 'react';
import { axios } from '../helper/axios';
import { AppContext } from "../context/AppContext";
import UserPhoto from "../assets/images/userPic.jpg"

import {

    StyleSheet,
    View,
Image,
    TouchableOpacity,
    TextInput,
    Text,
SafeAreaView,
Platform,
Keyboard

  } from 'react-native';

const AccountScreen = (props) => {

  const {user,token,setUser} = useContext(AppContext)
  const [username, setUsername] = useState(user?.username);
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);

  const update = () => {
    axios
      .put(
        '/users/' + user._id,

        { name: name,
          email: email,
          username: username,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
         }
      )
      .then((response) => {
        props.navigation.navigate("Settings")
        console.log(response);
        setUser({...user,"name":response.data.name,"username":response.data.username,"email":response.data.email})
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <SafeAreaView style={styles.backgroud}
    >
     <View style={styles.obDetails}>
         <View style={{alignItems:"center",justifyContent:"center",marginTop:0,backgroundColor:"#F5F7FA",height:20}}>
         <TouchableOpacity>
         <Image source={UserPhoto} style={styles.userPhoto}  />

         </TouchableOpacity>


         </View>

         <Text style={styles.textStyle}>
            Name
         </Text>
         <TextInput style={styles.inputStyle}
        value={name}
        onChangeText={(e) => setName(e)}


         />

         <Text style={styles.textStyle}>
            E-mail
         </Text>
         <TextInput style={styles.inputStyle}
          value={email}
          onChangeText={(e) => setEmail(e)}


         />


         <Text style={styles.textStyle}>
            Username
         </Text>
         <TextInput style={styles.inputStyle}
                 value={username}
                 onChangeText={(e) => setUsername(e)}


         />

      

     </View>
     

<TouchableOpacity style={styles.buttonLogin} onPress={update}
        >
          <Text style={styles.buttonText}>
            Edit account
          </Text>
        </TouchableOpacity>
  
    </SafeAreaView>
  );
}

 
const styles = StyleSheet.create({
  backgroud: {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#F5F7FA" ,

  },
  obDetails:{
    marginTop:25,
      backgroundColor:"white",
      width:315,
      height:310,
      borderRadius:20


  },
 
  inputStyle:{
    marginTop:10,
    marginLeft:20,
    backgroundColor:"#E8F0FE",
    width:275,
    height:33,
    borderRadius:50,
    fontSize:15,
    paddingLeft:10,
    


  },
  textStyle:{
    marginTop:20,
    marginLeft:20,
    color:"#4A5A77",
    fontSize:16,
    fontWeight:"500"



  },
  buttonLogin:{
    marginTop:20,
    backgroundColor:"#2697bb",
    borderRadius:50,
    width: 120,
    alignItems:"center",
    justifyContent:"center",
    height: 39
  
  },
  buttonText:{
    color:"white",
    fontSize: 16,
  
  },
   userPhoto:{
      width:90,
      height:90,
      borderRadius:100,

  }
  




});

export default AccountScreen;