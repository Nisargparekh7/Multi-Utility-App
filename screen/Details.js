import React from 'react';
import { FlatList,  Text, View,StyleSheet } from "react-native";
//import Icon from 'native-base';
import{List ,ListItem} from "react-native-elements";
 export default class Details extends React.Component {
   static navigationOptions = {
header: null,
}; 
 state = {
   data: []
 };
  
componentWillMount(){this.fetchData();}
fetchData = async ()=>{const response = await fetch('https://randomuser.me/api?results=1');
 const json = await response.json();
 this.setState({ data: json.results });
}
  render() {
    const {navigate}= this.props.navigation;
 
    return (
<View style={styles.container}>
<List>
<FlatList
data={this.state.data}
keyExtractor={(x,i)=> i}
renderItem={({item}) =>

<ListItem
roundAvatar
avatar={{uri: item.picture.thumbnail}}
title={`${item.name.first} ${item.name.last}`}
onPressRightIcon={alert('bhai')}
/>
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
     marginTop: 15,

    
  },
});
