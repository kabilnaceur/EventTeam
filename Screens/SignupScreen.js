import React,{useState,useContext,useEffect} from 'react';
import logo from "../assets/images/logo.png"


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
  AsyncStorage

} from 'react-native';



const SignupScreen = (props) => {

    
  const [login, setLogin] = useState("");
  const [language, setLanguage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  
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
        onChangeText={(e) => setLanguage(e)}

        />
                <Text style={styles.usernameText}>
                Password
        </Text>
        <TextInput
        style={styles.input}
        onChangeText={(e) => setLogin(e)}

        />
         <Text style={styles.usernameText} type="password">
        Confirm password
        </Text>
        <TextInput
        style={styles.input}
        onChangeText={(e) => setPassword(e)}
        secureTextEntry={true}


        />
        <TouchableOpacity style={styles.buttonLogin}
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
    fontFamily:"Cochin",
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
    borderRadius:50
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
  fontSize: 18,

},
ForgetPasswordButton : {
  marginTop:10
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

export default SignupScreen;