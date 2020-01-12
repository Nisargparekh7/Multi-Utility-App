import React from 'react';
import { createStackNavigator,createSwitchNavigator } from 'react-navigation';
import LoginScreen from './screen/LoginScreen';
import Dashboard from './screen/Dashboard';
import AuthLoading from './screen/AuthLoading';
import Contacts from './screen/Contacts';
import ViewContact from './screen/ViewContact';

const AppStackNavigator = createStackNavigator({
   
   
     
   Dashboard:Dashboard,
  Contacts:Contacts,
  ViewContact:ViewContact,
},{
  mode: 'modal',
  headerMode: 'none',
})
const AuthStack = createStackNavigator({ LoginScreen:LoginScreen });

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    App: AppStackNavigator,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
); 