import React, { Component } from 'react';
import { View, Text, Image,TouchableOpacity,AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Permissions, Notifications } from 'expo';
// import Snackbar from 'react-native-snackbar';
import {Constants} from 'expo';
export default class HomeScreen extends Component {

  static navigationOptions = {
    headerMode:'none', 
  };
  constructor(props) { 
    super(props);    
    this.state = {
    };
  }
  _token = async () => { 
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
      
      fetch('https://depstar2.000webhostapp.com/token.php', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          rollid:'17DCE001', //user,
          token: token
        }),
      })
      .catch(error => {
          console.error(error);
        });
     
    }
  componentDidMount(){
  this._token();
  }
  render() {
    const {navigate} =this.props.navigation
    return (
      
<View style={{flex:1,paddingLeft:10, paddingTop:Constants.statusBarHeight+30}}>
<Image
                source={require('../assets/logo.png')}
                style={{ height: 70, width: 70 }}
              />
        <Text style={{ paddingVertical:10}}> Welcome!!  to the HomeScreen of DEPSTAR app</Text>
    

<View style={{flex:1,paddingTop:50}}>    

    <View style={{flexDirection:'row', paddingBottom:10, margin:0}} >      
    
      <TouchableOpacity>
      <View style={{ paddingTop:50,paddingBottom:0  , margin:0}}>
      <View style={{ backgroundColor: 'white',height:150,width:120,justifyContent:'center',justifyContent:'center',alignItems:'center'}}>
      <Icon style={{fontSize:50}} name="assignment"/>
      <Text  style={{ fontWeight:'bold', fontSize:10,padding:10}}>Result  </Text> 
      </View>
      </View>
      </TouchableOpacity>


  <TouchableOpacity>
  <View style={{ paddingTop:50,paddingLeft:35,paddingBottom:0}}>
    <View style={{ backgroundColor: 'white',height:150,width:120,justifyContent:'center',alignItems:'center',}}>
      <Icon style={{fontSize:50,}} name="pan-tool"/>    
      <Text  style={{ fontWeight:'bold', fontSize:10,padding:10}}>Attendance     </Text> 
    </View>
  </View>
  </TouchableOpacity>
</View>

<View style={{flex:1,flexDirection:'row',paddingBottom:25,paddingTop:25,padding:0,paddingVertical:0,margin:0}}>
  <TouchableOpacity>
  <View style={{ paddingTop:0}}>
    <View style={{ backgroundColor: 'white',height:150,width:120,justifyContent:'center',alignItems:'center',}}>
     <Icon style={{fontSize:50}} name="event"/>
      <Text  style={{ fontWeight:'bold', fontSize:10,}}>Events  </Text> 
    </View>
  </View>
  </TouchableOpacity>

  <TouchableOpacity>
  <View style={{ paddingTop:0,paddingLeft:35}}>
    <View style={{ backgroundColor: 'white',height:150,width:120,justifyContent:'center',alignItems:'center',}}>
     <Icon style={{fontSize:50}} name="library-books"/>
      <Text  style={{ fontWeight:'bold', fontSize:10,padding:10}}>Resouces       </Text> 
    </View>
    </View>
    </TouchableOpacity>

      </View>

      </View>  

</View>
//end of main view
    );
  }
}