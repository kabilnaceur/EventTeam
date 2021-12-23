import React, { createContext, useState } from 'react';
import {axios} from "../helper/axios";
import logo from "../assets/images/logo.png"


import {

  AsyncStorage,View,Text,Image,StyleSheet

} from 'react-native';
export const AppContext = createContext();


const AppContextProvider =  (props) => {
  
  const [groups, setGroups] = useState([]);
  const [trigger, setTrigger] = useState(false);
  const [contacts, setContacts] = useState([])
  const [trigger1, setTrigger1] = useState(false);
  const [contactPage, setContactPage] = useState(false); 
  const [loading, setLoading] = useState(true);
  const [activeContact, setActiveContact] = useState(false); 
  const [activeAgent, setActiveAgent] = useState(false); 
  const [token, setToken] = useState( AsyncStorage.getItem('token'));
  const [user, setUser] = useState(null); 
  React.useEffect(async () => {
    await refreshUser()

}, [])
    const loginUser= (token) => {
    setToken(token);
    


  };
  const refreshUser = async () => {
    setLoading(true)
    if (token)
        axios.get(`/users/userconn`,{
          headers: { Authorization: `Bearer ${token}` },
        })
            .then(response => {
                setUser(response.data.connectedUser)
                setLoading(false)

            }).catch(err => {
                setUser(null)
                setLoading(false)

                console.log(err)
            })
    else
        setLoading(false)


}

  const logoutUser = async () => {

    await AsyncStorage.removeItem('token');
    setUser(null)
      setLoading(false)
  


  };

  return (
    <AppContext.Provider
      value={{
        token,
        user,  
        setUser,
        loginUser,
        logoutUser,
        contactPage,
        setContactPage,
        trigger,
        trigger1,
        setTrigger,
        setTrigger1,
        activeAgent,
        activeContact,
        setActiveAgent,
        setActiveContact,
        contacts,
        setContacts,
        setGroups,
        groups,
        setLoading,
        refreshUser
      }}
    >
      {!loading?(props.children):
      (<View style={styles.backgroud}>
      <Image source={logo} style={styles.logo} />
        </View>
      )}
    </AppContext.Provider>
  );
};

const styles = StyleSheet.create({
  backgroud: {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#F5F7FA" ,

  },
  logo : {
    marginTop:20,
    width:500,
    height:200
  },





});

export default AppContextProvider;
