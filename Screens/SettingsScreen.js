import React,{useContext,useEffect} from 'react';
import { AppContext } from "../context/AppContext";
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import logo from "../assets/images/logo.png"

import {

    StyleSheet,
    Text,
    Image,
    View,

SafeAreaView,
TouchableOpacity,
ScrollView

  } from 'react-native';

const SettingsScreen = (props) => {

  useEffect(() => {
    if(!token)
    {  props.navigation.replace("Login") }

    }, [])
  const logout = () =>{
    props.navigation.replace("Login")
    logoutUser() 
  }
  const {user,logoutUser,setLoading,token} = useContext(AppContext)
  return (
    <SafeAreaView style={styles.backgroud}
    >      

<ScrollView style={styles.detailsView}>
<TouchableOpacity style={{margin:15}} onPress={()=>props.navigation.navigate("Notification")}>
    <View style={{flexDirection:"row"}}>
      <View style={{flex:1}}>
      <Icon name="notifications-circle-outline" color={"#4A5A77"} size={35} style={styles.notification}/>

      </View>
      <View style={{flex:4}}>
        <Text style={styles.settingsText}>
          Notification
        </Text>

      </View>
      <View style={{flex:1}}>
      <MaterialCommunityIcons name="chevron-right" color={"#4A5A77"} size={35} style={styles.notification}/>

      </View>

    </View>


  </TouchableOpacity>
  <TouchableOpacity style={{margin:15}} onPress={()=>props.navigation.navigate("Security")} >
    <View style={{flexDirection:"row"}}>
      <View style={{flex:1}}>
      <MaterialCommunityIcons name="security" color={"#4A5A77"} size={35} style={styles.notification}/>

      </View>
      <View style={{flex:4}}>
        <Text style={styles.settingsText}>
          Security
        </Text>

      </View>
      <View style={{flex:1}}>
      <MaterialCommunityIcons name="chevron-right" color={"#4A5A77"} size={35} style={styles.notification}/>

      </View>

    </View>


  </TouchableOpacity>
  <TouchableOpacity style={{margin:15}} onPress={()=>props.navigation.navigate("Trash")} >
    <View style={{flexDirection:"row"}}>
      <View style={{flex:1}}>
      <Icon name="trash-outline" color={"#4A5A77"} size={35} style={styles.notification}/>

      </View>
      <View style={{flex:4}}>
        <Text style={styles.settingsText}>
          Trash
        </Text>

      </View>
      <View style={{flex:1}}>
      <MaterialCommunityIcons name="chevron-right" color={"#4A5A77"} size={35} style={styles.notification}/>

      </View>

    </View>


  </TouchableOpacity>
<TouchableOpacity style={{margin:15}} onPress={()=>props.navigation.navigate("History")} >
    <View style={{flexDirection:"row"}}>
      <View style={{flex:1}}>
      <MaterialCommunityIcons name="history" color={"#4A5A77"} size={35} style={styles.notification}/>

      </View>
      <View style={{flex:4}}>
        <Text style={styles.settingsText}>
          History
        </Text>

      </View>
      <View style={{flex:1}}>
      <MaterialCommunityIcons name="chevron-right" color={"#4A5A77"} size={35} style={styles.notification}/>

      </View>

    </View>


  </TouchableOpacity>
<TouchableOpacity style={{margin:15}} onPress={()=>props.navigation.navigate("Account")}>
    <View style={{flexDirection:"row"}}>
      <View style={{flex:1}}>
      <MaterialCommunityIcons name="account-circle-outline" color={"#4A5A77"} size={35} style={styles.notification}/>

      </View>
      <View style={{flex:4}}>
        <Text style={styles.settingsText}>
          Account
        </Text>

      </View>
      <View style={{flex:1}}>
      <MaterialCommunityIcons name="chevron-right" color={"#4A5A77"} size={35} style={styles.notification}/>

      </View>

    </View>

  </TouchableOpacity>
  <TouchableOpacity style={{margin:15}}>
    <View style={{flexDirection:"row"}}>
      <View style={{flex:1}}>
      <Icon name="information-circle-outline" color={"#4A5A77"} size={35} style={styles.notification}/>

      </View>
      <View style={{flex:4}}>
        <Text style={styles.settingsText}>
          About
        </Text>

      </View>
      <View style={{flex:1}}>
      <MaterialCommunityIcons name="chevron-right" color={"#4A5A77"} size={35} style={styles.notification}/>

      </View>

    </View>


  </TouchableOpacity>
  <TouchableOpacity style={{margin:15}}>
    <View style={{flexDirection:"row"}}>
      <View style={{flex:1}}>
      <Icon name="help-circle-outline" color={"#4A5A77"} size={35} style={styles.notification}/>

      </View>
      <View style={{flex:4}}>
        <Text style={styles.settingsText}>
          Help
        </Text>

      </View>
      <View style={{flex:1}}>
      <MaterialCommunityIcons name="chevron-right" color={"#4A5A77"} size={35} style={styles.notification}/>

      </View>

    </View>

  </TouchableOpacity>

  <Image style={styles.logo} source={logo} />
 
        <TouchableOpacity style={{margin:15}} onPress={logout}>
    <View style={{flexDirection:"row"}}>
      <View style={{flex:1}}>
      <Icon name="log-out-outline" color={"#b25775"} size={35} style={styles.notification}/>

      </View>
      <View style={{flex:4}}>
        <Text style={styles.LogoutText}>
          Logout
        </Text>

      </View>


    </View>


  </TouchableOpacity>

  </ScrollView>
 
  
    </SafeAreaView>
  );
}

 
const styles = StyleSheet.create({
  backgroud: {
    flex:1,
    justifyContent:"flex-start",
    alignItems:"center",
    backgroundColor:"#F5F7FA" ,

  },

  logo: {
    marginLeft: 15,
    width: 100,
    height: 100
  },
  profileView:{
    marginTop:25,
    backgroundColor:"white",
    width:"85%",
    height:150,
},
profilPicView:{
  backgroundColor:"#F5F7FA",
  alignItems:"center",
  height:30,
},
dropDownPhoto: {
  borderRadius: 100,
  width: 75,
  height: 75
},
nameText:{
  fontSize:22,
  fontWeight:"600",
  color:"#4A5A77"
},
emailText:{
  fontSize:20,
  color:"#4A5A77"
},
detailsView:{
  backgroundColor:"white",
  width:"85%",
marginTop:20,
marginBottom:20,
},
settingsText :{
  fontSize:20,
  fontWeight:"500",
  color:"#4A5A77",
  marginTop:5
},
LogoutText :{
  fontSize:20,
  fontWeight:"500",
  color:"#b25775",
  marginTop:5
},
logText:{
  fontSize:20,
  marginTop:10,
  fontWeight:"bold",
  marginLeft:15,
  color:"#4A5A77",

}





});

export default SettingsScreen;