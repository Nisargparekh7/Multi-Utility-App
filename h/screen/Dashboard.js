import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
// import {createMaterialTopTabNavigator} from 'react-navigation';  
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'  
import HomeScreen from './HomeScreen'

import Settings from './Settings'
 import Events from './Events'
 import Attendance from './Attendance'
 import Result from './Result'
 import Resource from './Resource'
import Icon from 'react-native-vector-icons/MaterialIcons';

class  Dashboard extends React.Component {

  render() {
    
    return (
<View style={styles.container}>


</View>

    );
  }
}



export default createMaterialBottomTabNavigator({
  HomeScreen: { screen: HomeScreen ,
    navigationOptions: {
      tabBarLabel:'Home',
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
        tabBarLabel:'Result',
//   showLabel:false,  

activeColor:"white",
inactiveColor:"#F1F8E9",
    tabBarColor:"#D72864",    
 tabBarIcon:({tintColor}) => (

  <Icon  name="assignment" color={tintColor} size={24}/> 
  )
  }
    },
    Attendance:{screen:Attendance,
      navigationOptions: {
        tabBarLabel:'Attendane',
      
        //   showLabel:false, 
        activeColor:"white",
        inactiveColor:"#F1F8E9",    
        tabBarColor:"#3376FF", 
 tabBarIcon:({tintColor}) => (

//   <Icon  name="pan-tool" color={tintColor} size={24}/> 
//   )
//   }
    
//     },
//     Events:{screen:Events,
//       navigationOptions: {
//         tabBarLabel:'Events',
//         //   showLabel:false,      
//  tabBarIcon:({tintColor}) => (

  <Icon  name="event" color={tintColor} size={24}/> 
  )
  }
    },
     Resource:{screen:Resource,
      navigationOptions: {
        tabBarLabel:'Resource',
        activeColor:"white",
        inactiveColor:"#F1F8E9",
        tabBarColor:"#00695C",          
 tabBarIcon:({tintColor}) => (

  <Icon  name="library-books" color={tintColor} size={24}/> 
  )
  }
    },
    
     
  // History: { screen: History },
  // Cart: { screen: Cart },
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
