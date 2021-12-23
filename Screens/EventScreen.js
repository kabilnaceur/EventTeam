import React,{useState,useContext,useEffect} from 'react';
import Event from "../assets/images/event.jpeg"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';

import {

  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,

  SafeAreaView

} from 'react-native';



const EventScreen = (props) => {


  return (


    <SafeAreaView style={styles.backgroud}
    >
<View style={styles.evView}>
    <View style={{flex:1}}>
            <Image source={Event} style={styles.eventImage} />
            <Text style={styles.textStyle}>
                Event posted by : Kabil naceur

            </Text>
            <Text style={styles.textStyle}>
                Type : Wedding
            </Text>
            <View style={{flexDirection:"row"}}>
            <View style={{flexDirection:"row",flex:2}}>

            <Icon name="location-sharp" color={"#2697bb"} size={30}/>
            <Text style={styles.textStyle}>
                Sousse</Text>
                </View>
                <View style={{flexDirection:"row",flex:1}}>
                <FontAwesome name="users" color={"#2697bb"} size={30} />
            <Text style={styles.textStyle}>
                0</Text>
                    </View>



            </View>
            <Text style={styles.textStyle}>
                Description :
            </Text>
            <Text style={styles.textStyle}>
            I request the honor of your presence
at their wedding
on the fifth of May, two thousand seventeen
at one o'clock in the afternoon
The Reagan Library
Simi Valley, California
Dinner & dancing to follow
Black tie required            </Text>
            </View>
            <View style={{flexDirection:"row",marginBottom:10}}>
                <TouchableOpacity style={{margin:8}}>
                <FontAwesome name="heart" color={"#D61554"} size={30} />

                </TouchableOpacity>
            <TextInput style={styles.commentInput}/>
            <TouchableOpacity style={styles.commentButton}>
                <Text style={{color:"white",fontWeight:"500"}}>
                    Comment
                </Text>
            </TouchableOpacity>


            </View>



            </View>

  
    </SafeAreaView>


  );
}


const styles = StyleSheet.create({
  backgroud: {
    flex:1,
    alignItems:"center",
    backgroundColor:"#F5F7FA" ,

  },

  evView:{
    
    backgroundColor:"white",
    width:350,
    height:"95%",
    borderRadius:20,
    marginTop:15
},
eventImage:{
    width:350,
    height:150, 
    borderRadius:20

},
textStyle:{
    fontSize:16,
    margin:5,
    color:"#4A5A77",
    fontWeight:"500"
},
commentInput:{
    width:190,
    height:40,
    backgroundColor:"#E8F0FE",
    borderRadius:50,
    padding:10
},
commentButton:{
    width:70,
    height:40,
    backgroundColor:"#2697bb",
    marginLeft:10,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10
}

});

export default EventScreen;