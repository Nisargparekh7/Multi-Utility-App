import React, { Component } from 'react';
import { View,FlatList, Text, Image,TouchableOpacity,AsyncStorage,RefreshControl} from 'react-native';
import { Permissions, Notifications } from 'expo';
import {Constants} from 'expo';
import{List ,ListItem} from "react-native-elements";

export default class HomeScreen extends Component {

  
  constructor(props) { 
    super(props); 
    this.arrayholder = [];   
    this.state = {
      data: [],
      refreshing:false 
    };
  }
  _token = async () => { 
    const token = await AsyncStorage.getItem('token');
    if(token!==''){
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );   
      
    const user = await AsyncStorage.getItem('user');

      let finalStatus = existingStatus;

      if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
      }
    
    
      if (finalStatus !== 'granted') {
        return;
      }
      let token = await Notifications.getExpoPushTokenAsync();
      AsyncStorage.setItem('token',token);
      
      fetch('https://depstar2.000webhostapp.com/token.php', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          rollid:user,
          token: token
        }),
      })
      .catch(error => {
          console.error(error);
        });
      }
    }
    fetchData = async ()=>{
        
      const user = await AsyncStorage.getItem('user');
      const response = await fetch('https://depstar2.000webhostapp.com/notification.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user:user,
      })
    })
     const json = await response.json();
     this.arrayholder = json;
    
     this.setState({ data: json });
    this.setState({isLoading:false})
    }
    onRefresh() {
    
        this.fetchData();
      }
  componentDidMount(){
  this._token();
 
  this.fetchData();
  
};
_onRefresh(){
  this.setState({refreshing: true});
  this.fetchData().then(()=>{
    this.setState({refreshing: false});
  })
}
  
  render() {
    const {navigate} =this.props.navigation
    
    return (
      
<View style={{flex:1, paddingTop:Constants.statusBarHeight}}>
<Text style={{fontSize:30, padding:10,paddingBottom:1,color:'grey'}}> What's New...</Text>

<List style={{backgroundcolor:'white'}}>
<FlatList
data={this.state.data}
keyExtractor={(x,i)=> i}
renderItem={({item}) =>

<ListItem 
onPress={()=>this.props.navigation.navigate('Events',{data:item})} 

title={item.title}
subtitle={`from : ${item.faculty} time: ${item.TIme}`}
leftAvatar={{ rounded: true }}
leftIcon={{ name:'account-circle',size:60 }}
    chevron


/>

}
refreshControl={
  <RefreshControl
  refreshing={this.state.refreshing}
  onRefresh={this._onRefresh.bind(this)}/>
}
/>
</List>

<View>
</View>
</View>
//end of main view
    );
  }
}