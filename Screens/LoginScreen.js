import React,{useState,useContext,useEffect} from 'react';
import logo from "../assets/images/logo.png"

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

  const [login , setLogin,] = useState("")
  const [password, setPassword] = useState("")

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
        onChangeText={(e) => setLogin(e)}

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
    fontFamily:"Cochin",
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
    borderRadius:50
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
  fontSize: 18,

},
ForgetPasswordButton : {
  marginTop:20
},
ForgetPasswordText: {
  color:"#D61554",
  fontSize: 11,
  fontFamily:"Cochin",
},
signupText:{
  color:"#D61554",
  fontSize: 15,
  fontFamily:"Cochin",
  fontWeight:"bold"
}




});

export default Login;