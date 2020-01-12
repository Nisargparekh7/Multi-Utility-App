import React from 'react';
import { StyleSheet, Text, View,Button,Image,TouchableNativeFeedback } from 'react-native';
import {createDrawerNavigator} from 'react-navigation';  
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'  
import Contacts from './Contacts'
 import Attendance from './Attendance'
 import Result from './Result'
import Resource from './Resource'
 //import Remainder from './Remainder'
 
 import logout from './Setting'
import Icon from 'react-native-vector-icons/MaterialIcons';


export default createMaterialBottomTabNavigator({
  Contacts: { screen:Contacts ,
    navigationOptions: {
      tabBarLabel:'Counseling',
//   showLabel:false,      
activeColor:"white",
inactiveColor:"#E3F2FD",
tabBarColor:"#651FFF",
tabBarIcon:({tintColor}) => (

 <Icon  name="home" color={tintColor} size={24}/> 
)
}
 },
  
  
    Result:{screen:Result,
      navigationOptions: {
        tabBarLabel:'SlotObservation',
//   showLabel:false,  

activeColor:"white",
inactiveColor:"#F1F8E9",
    tabBarColor:"#D72864",    
 tabBarIcon:({tintColor}) => (

  <Icon  name="assignment" color={tintColor} size={24}/> 
  )
  }
    },
    
    Resource:{screen:Resource,
      navigationOptions: {
        tabBarLabel:'Remainder',
      
        //   showLabel:false, 
        activeColor:"white",
        inactiveColor:"#F1F8E9",    
        tabBarColor:"#3376FF", 
 tabBarIcon:({tintColor}) => (
  <Icon  name="event" color={tintColor} size={24}/> 
  )
  }
    },
    logout:{screen:logout,
      navigationOptions: {
        tabBarLabel:'Settings',
        activeColor:"white",
        inactiveColor:"#F1F8E9",
        tabBarColor:"red",          
 tabBarIcon:({tintColor}) => (

  <Icon  name="widgets" color={tintColor} size={24}/> 
  )
  }
    },

    

}, {
  // initialRouteName: 'Album',
  activeTintColor: '#f0edf6',
  inactiveTintColor: '#3e2465',
  barStyle: { backgroundColor: '#694fad' },
  shifting: true
});


const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },

});
