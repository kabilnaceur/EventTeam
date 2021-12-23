import React,{useState,useContext,useEffect} from 'react';
import logo from "../assets/images/logo.png"
import { axios } from '../helper/axios';


import {

  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  AsyncStorage,
  Platform,


} from 'react-native';



const SignupScreen = (props) => {

    
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const signUp = () => {
    axios.post(
        '/users/',
        { name: name,
          email: email,
          username: username,
          password:password,
        }
      )
      .then((response) => {
        props.navigation.replace("Login") 
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  
  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
    <KeyboardAvoidingView style={styles.backgroud} behavior={Platform.OS==='ios'?'position':''}>

    <SafeAreaView style={styles.backgroud}
    >
      <Image source={logo} style={styles.logo} />
      <View style={styles.loginView}>
        <Text style={styles.loginText}>
        Sign up to access .
        </Text>
        <Text style={styles.usernameText}>
        Name
        </Text>
        <TextInput
        style={styles.input}
        onChangeText={(e) => setName(e)}

        />
        <Text style={styles.usernameText}>
        E-mail
        </Text>
        <TextInput
        style={styles.input}
        onChangeText={(e) => setEmail(e)}

        />
                <Text style={styles.usernameText}>
                Username
        </Text>
        <TextInput
        style={styles.input}
        onChangeText={(e) => setUsername(e)}

        />
                <Text style={styles.usernameText}>
                Password
        </Text>
        <TextInput
        style={styles.input}
        onChangeText={(e) => setPassword(e)}

        />
         <Text style={styles.usernameText} type="password">
        Confirm password
        </Text>
        <TextInput
        style={styles.input}
        onChangeText={(e) => setConfirmPassword(e)}
        secureTextEntry={true}


        />
        <TouchableOpacity style={styles.buttonLogin}              
         onPress={signUp}

        >
          <Text style={styles.buttonText}>
            Sign up
          </Text>
        </TouchableOpacity>

      </View>

      <TouchableOpacity style={styles.ForgetPasswordButton} onPress={()=>props.navigation.navigate("Login")}
      >
        <Text style={styles.signupText}>
        Login
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
    justifyContent:"flex-start",
    alignItems:"center",
    backgroundColor:"#F5F7FA" ,

  },
  logo : {
    marginTop:10,
    width:200,
    height:100
  },
  loginView:{
    justifyContent:"flex-start",
    alignItems:"center",
    backgroundColor:"white",
    width:280,
    height:490,
    borderRadius:20
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
buttonLogin:{
  marginTop:18,
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
  marginTop:10
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

export default SignupScreen;