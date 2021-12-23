import React,{useState,useContext,useEffect} from 'react';
import logo from "../assets/images/logo.png"
import { axios } from '../helper/axios';
import { AppContext } from "../context/AppContext";

import {

  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  AsyncStorage,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView

} from 'react-native';



const Login = (props) => {
const {loginUser} = useContext(AppContext)

  const [username , setUsername,] = useState("")
  const [password, setPassword] = useState("")
  console.log(username,password)

  const User = async  () => {
 


    axios.post('/users/login',{username:username , password:password})
    .then( async (res)=> {
      await AsyncStorage.setItem('token',res.data.token);
      console.log('res-auth',res.data.user);
      loginUser(res.data.token);
      props.navigation.navigate("Home");
    }
      )
    .catch((error)=>{console.log(error)})
   
  }
  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
    <KeyboardAvoidingView style={styles.backgroud} behavior={Platform.OS==='ios'?'position':''}>

    <SafeAreaView style={{justifyContent:"center",alignItems:"center"}}
    >
      <Image source={logo} style={styles.logo} />
      <View style={styles.loginView}>
        <Text style={styles.loginText}>
        Enter your username and password to access .
        </Text>
        <Text style={styles.usernameText}>
        Username
        </Text>
        <TextInput
        style={styles.input}
        onChangeText={(e) => setUsername(e)}

        />
         <Text style={styles.usernameText} >
        Password
        </Text>
        <TextInput
        style={styles.input}
        onChangeText={(e) => setPassword(e)}
        secureTextEntry={true}

        />
        <TouchableOpacity style={styles.buttonLogin}
                      onPress={User}

        >
          <Text style={styles.buttonText}>
            Login
          </Text>
        </TouchableOpacity>

      </View>
      <TouchableOpacity style={styles.ForgetPasswordButton}>
        <Text style={styles.ForgetPasswordText}>
        Forgot your password ?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ForgetPasswordButton} onPress={()=>props.navigation.navigate("Sign Up")}
      >
        <Text style={styles.signupText}>
        Sign up

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
  logo : {
    marginTop:20,
    width:300,
    height:100
  },
  loginView:{
    justifyContent:"flex-start",
    alignItems:"center",
    backgroundColor:"white",
    marginTop:28,
    width:280,
    height:350,
    borderRadius:20
  },
  loginText:{
    fontSize: 11,
    marginTop:42,
    color: "#D61554",
    width: 149,
    height: 26,
    textAlign:"center"


  },
  input:{
    backgroundColor:"#E8F0FE",
    marginTop:0,
    width: 223,
    height: 33,
    borderRadius:50,
    paddingLeft:10

  },
usernameText:
{
  width: 223,
  height: 33,
  marginTop:28,
  color: "#4A5A77",
  fontSize: 13,


},
buttonLogin:{
  marginTop:40,
  backgroundColor:"#D61554",
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
ForgetPasswordButton : {
  marginTop:20
},
ForgetPasswordText: {
  color:"#D61554",
  fontSize: 11,
},
signupText:{
  color:"#D61554",
  fontSize: 15,
  fontWeight:"bold"
}




});

export default Login;