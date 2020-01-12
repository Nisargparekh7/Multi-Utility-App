import React from 'react';
import { createStackNavigator,createSwitchNavigator,DrawerNavigator } from 'react-navigation';
import LoginScreen from './screen/LoginScreen';
import Dashboard from './screen/Dashboard';
import AuthLoading from './screen/AuthLoading';
// import Contacts from './screen/Contacts';
import ViewContact from './screen/ViewContact';
import Events from './screen/Events';
import FDashboard from './screen/FDashboard';
// import OfflineNotice from './screen/OfflineNotice';
// import SlotObservation from './screen/SlotObservation';
 import Setting from './screen/Setting';
import About from './screen/About';
import cart from './screen/cart';

const StudentStack = createStackNavigator({ 
  //   Dashboard:{
  //     screen:Dashboard,
  //    navigationOptions: ({ navigation }) => ({ header: null })
  //      },
  //  About:About,
  //   Events:Events
   //Settings:Setting 
  cart:cart
})
const AuthStack = createStackNavigator({ LoginScreen:LoginScreen });
const FacultyStack = createStackNavigator({ FDashboard:{
  screen:FDashboard,
 navigationOptions: ({ navigation }) => ({
   header: null,
 }),
 },
 ViewContact:ViewContact,
 About:About
});





export default createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    Student: StudentStack,
    Faculty: FacultyStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
); 