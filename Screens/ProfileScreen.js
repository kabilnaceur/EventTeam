import React,{useContext,useEffect} from 'react';
import UserPhoto from "../assets/images/userPic.jpg"
import { AppContext } from "../context/AppContext";
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {

    StyleSheet,
    Text,
    Image,
    View,

SafeAreaView,
TouchableOpacity,
ScrollView

  } from 'react-native';
import EventUser from '../components/EventUser';

const ProfileScreen = (props) => {



  const {user} = useContext(AppContext)
  console.log(user)
  return (
    <SafeAreaView style={styles.backgroud}
    >      
    <View style={styles.profileView}>
      <View style={styles.profilPicView}>
      <Image source={UserPhoto} style={styles.dropDownPhoto} />
  </View>
  <View style={{alignItems:"center",justifyContent:"center",height:"100%"}}>
  <Text style={styles.nameText}>
    {user?.name}
  </Text>
  <Text style={styles.emailText}>
    {user?.email}
  </Text>

  </View>



</View>
<ScrollView style={styles.detailsView}>
  {
    user?.events.map(event=>(
      <EventUser navig={props.navigation} event={event}/>


    ))
  }


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
    marginTop:15,
    marginLeft: 15,
    width: 100,
    height: 20
  },
  profileView:{
    marginTop:25,
    backgroundColor:"white",
    width:"85%",
    height:150,
    borderRadius:20
},
profilPicView:{
  backgroundColor:"#F5F7FA",
  alignItems:"center",
  height:30,
},
dropDownPhoto: {
  borderRadius: 100,
  width: 85,
  height: 85
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
  backgroundColor:"#F5F7FA" ,
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

export default ProfileScreen;