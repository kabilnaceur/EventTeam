import React, { createContext, useState } from 'react';
import {axios} from "../helper/axios";

import {

  AsyncStorage

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
  React.useEffect( () => {
    if (token) {
      axios
        .get('/users/me', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(async(response) => {
          setUser(response.data.user);
          setLoading(false)
        });
    }else 
    setLoading(false)
  }, [token]);
    const loginUser= (token) => {
    setToken(token);
    


  };

  const logoutUser = async () => {

   await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('userPermissions');
    setUser(null);
    setToken('');

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
        setLoading
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
