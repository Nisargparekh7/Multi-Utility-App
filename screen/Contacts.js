import React from 'react';
import { FlatList,TouchableOpacity,ActivityIndicator, Text, View,StyleSheet,StatusBar,RefreshControl,Dimensions,NetInfo } from "react-native";
import { Toolbar } from 'react-native-material-ui';
//import Icon from 'native-base';  
import{List ,Overlay,ListItem} from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons'; 
import Details from './Details';
import {Constants} from 'expo';
import OfflineNotice from './OfflineNotice';
 export default class Contacts extends React.Component {
  
  
   static navigationOptions = {
 header: null, 
  

}; 
constructor(props) {
  super(props);
  this.arrayholder = [];
}
 state = {
   data: [], 
   search:"RollId",
   isLoding:true, 
   isConnected: true,
   refreshing:false,
   
 };
 searchFilterFunction = text => {
  console.log(this.arrayholder);
  const newData = this.arrayholder.filter(item => {
    const itemData = `${item.RollId.toUpperCase()} ${item.StudentName.toUpperCase()}`;
    const textData = text.toUpperCase();
    return itemData.indexOf(textData) > -1;
  });
  this.setState({
    data: newData,
  });
};
componentDidMount() {
  NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
}
componentWillMount()
{
  this.fetchData();
  NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
}
fetchData = async ()=>{
        
       const response = await fetch('https://depstar2.000webhostapp.com/student_details.php');
 const json = await response.json();
 this.arrayholder = json;

 this.setState({ data: json });
this.setState({isLoading:false})
}
  _onRefresh(){
    if (this.state.isConnected){
    this.setState({refreshing: true});
    this.fetchData().then(()=>{
      this.setState({refreshing: false});
    })
  }else{
    this.setState({refreshing: false});
   }
  }



  handleConnectivityChange = isConnected => {
    if (isConnected) {
      this.setState({ isConnected });
      this.fetchData();     
    } else {
      this.setState({ isConnected });
    }
  };

  render() {
    
   
    const {navigate}= this.props.navigation;
        if (this.state.isLoading) {
      return (
        <View style={styles.container}>
        <Toolbar
      style={{backgroundcolor:'white'}}  
        centerElement="Student Details"
        searchable={{
          autoFocus: true,
          placeholder: 'Search...',
          onChangeText:searchTerm => this.setState({ searchTerm }) 
        }}
             

      />

        <View style={{flex: 1,alignItems:'center',justifyContent:'center', paddingTop: 20}}>
          <ActivityIndicator size="large" color="#0000ff"/>
        </View>
        </View>
      );
    }
 
    
 
    return (
      
<View style={styles.container}>
<Toolbar
      style={{backgroundcolor:'white'}}  
        centerElement="Student Details"
        searchable={{
          autoFocus: true,
          placeholder: 'Search...',
          onChangeText:text => this.searchFilterFunction(text)
        }}
             
        
      />

<Text>{this.state.isConnected}</Text>
<OfflineNotice />

<List style={{backgroundcolor:'white'}}>


<FlatList
style={{marginBottom:50}}
data={this.state.data}
keyExtractor={(x,i)=> i}
renderItem={({item}) =>

<ListItem 
onPress={()=>this.props.navigation.navigate('ViewContact',{data:item})} 

title={`${item.StudentName}`}
subtitle={`${item.RollId}`}
leftAvatar={{ rounded: true }}
leftIcon={{ name:'account-circle',size:60 }}
  chevronColor="white"
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





</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,    
      paddingTop:Constants.statusBarHeight,
      backgroundColor:'white',  
  },
  
});
