import React,{useState,useContext} from 'react';
import { axios } from '../helper/axios';
import { AppContext } from "../context/AppContext";

import {

    StyleSheet,
    View,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    TouchableOpacity,
    TextInput,
    Text,
SafeAreaView,
Keyboard,
Platform

  } from 'react-native';

const SecurityScreen = (props) => {

  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const {user,token} = useContext(AppContext)

  const updatePassword = () => {
    if(confirmPassword===newPassword)
  {  axios
      .patch(
        '/users/password/' + user._id,

        { password: password, newPassword: newPassword },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        props.navigation.navigate("Profile")
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });}else{
        console.log("noooooo")
      }
  };

  console.log(password,newPassword,confirmPassword)
  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
    <KeyboardAvoidingView style={styles.backgroud} behavior={Platform.OS==='ios'?'position':''}>
    <SafeAreaView style={{justifyContent:"center",alignItems:"center"}}
    >
     <View style={styles.obDetails}>
       <View style={{alignItems:"center"}}>
       <Text style={styles.Text}>
your password must be more than six characters long and 
consist of a combination of numbers
</Text>

       </View>


         <Text style={styles.textStyle}>
         Old Password
         </Text>
         <TextInput style={styles.inputStyle}
          onChangeText={(e) => setPassword(e)}
          secureTextEntry={true}


         />

         <Text style={styles.textStyle}>
         New Password
                  </Text>
         <TextInput style={styles.inputStyle}
         onChangeText={(e) => setNewPassword(e)}
         secureTextEntry={true}

         />

         <Text style={styles.textStyle}>
         Confirm New Password
         </Text>
         <TextInput style={styles.inputStyle}
        onChangeText={(e) => setConfirmPassword(e)}
        secureTextEntry={true}


         />

     </View>
     

<TouchableOpacity style={styles.buttonLogin} onPress={updatePassword}
        >
          <Text style={styles.buttonText}>
            Change password
          </Text>
        </TouchableOpacity>
  
    </SafeAreaView>
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
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
      backgroundColor:"white",
      width:315,
      height:370,
      borderRadius:20

  },
 
  inputStyle:{
    marginTop:10,
    marginLeft:20,
    backgroundColor:"#E8F0FE",
    width:275,
    height:33,
    borderRadius:50,
    paddingLeft:10


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
    width: 160,
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

  },
  Text:{
    fontSize: 12,
    fontFamily:"Cochin",
    marginTop:42,
    color: "#4A5A77",
    textAlign:"center"


  },
  




});

export default SecurityScreen;