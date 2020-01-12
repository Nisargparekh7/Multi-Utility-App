import React from 'react';
import {
  Image,
  AsyncStorage,
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Animated,
  Dimensions,
  Keyboard,
  Platform,
  ActivityIndicator,
  NetInfo
} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';
class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null, 
  };
  constructor() {
    super();
    this.state = {
      Username: '',
      Password: '',
      placeholderText: 'Enter Your ID number',
      isLoading:false, 
      isConnected: true

    };
  }

  
  
  componentDidMount() {
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
  }
  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
  }
  handleConnectivityChange = isConnected => {
    if (isConnected) {
      this.setState({ isConnected });
      
    } else {
      this.setState({ isConnected });
      alert("No Internet");
    }
  };
  componentWillMount() {
    
    this.loginHeight = new Animated.Value(150);
    this.color = 'transparent';
    this.keyboardWillShowListener = Keyboard.addListener(
      'keyboardWillShow',
      this.keyboardWillShow
    );
    this.keyboardWillHideListener = Keyboard.addListener(
      'keyboardWillHide',
      this.keyboardWillHide
    ); 

    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this.keyboardWillShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this.keyboardWillHide
    );
    this.keyboardHeight = new Animated.Value(0);
    this.forwardArrowOpacity = new Animated.Value(0);
    this.borderBottomWidth = new Animated.Value(0);
    this.titleTextOpacity = new Animated.Value(0);
  }
  
  keyboardWillShow = event => {
    if (Platform.OS == 'android') {
      //alert(event.endCoordinates.height)
      this.duration = 100;
    } else {
      this.duration = event.duration;
    }

    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: this.duration + 100,
        toValue: event.endCoordinates.height + 10,
      }),
      Animated.timing(this.forwardArrowOpacity, {
        duration: this.duration,
        toValue: 1,
      }),
      Animated.timing(this.borderBottomWidth, {
        duration: this.duration,
        toValue: 1,
      }),
    ]).start();
  };

  keyboardWillHide = event => {
    if (Platform.OS == 'android') {
      this.duration = 100;
    } else {
      this.duration = this.duration;
    }
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: this.duration + 100,
        toValue: 0,
      }),

      Animated.timing(this.borderBottomWidth, {
        duration: this.duration,
        toValue: 0,
      }),
    ]).start();
  };

  increaseHeightOfLogin = () => {
    this.setState({ placeholderText: '17dit033' });
    Animated.parallel([
      Animated.timing(this.loginHeight, {
        toValue: SCREEN_HEIGHT,
        duration: 500,
      }),
      Animated.timing(this.titleTextOpacity, {
        duration: 1000,
        toValue: 1,
      }),
    ]).start(() => {
       this.refs.textInputMobile.focus()
    });
  };

  decreaseHeightOfLogin = () => {
    this.color = 'transparent';
    this.setState({ placeholderText: 'Enter your Id number' });
    Keyboard.dismiss();
    Animated.parallel([
      Animated.timing(this.loginHeight, {
        toValue: 150,
        duration: 500,
      }),
      Animated.timing(this.forwardArrowOpacity, {
        duration: 100,
        toValue: 0,
      }),
      Animated.timing(this.titleTextOpacity, {
        duration: 1000,
        toValue: 0,
      }),
    ]).start();
  };
  login = () => {
  
    
  if(this.state.isConnected) { 
  this.setState({isLoading:true})
    const { Username } = this.state;
    const { Password } = this.state;
    Keyboard.dismiss();
    if (Username != '' && Password != '') {
        fetch('https://depstar2.000webhostapp.com/user_login.php', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: Username,

          password: Password,
        }),
      })
        .then(response => response.json())
        .then(responseJson => {
          // If server response message same as Data Matched
          if (responseJson === 'ok') {
            AsyncStorage.setItem('user',Username);
            
            //Then open Profile activity and send user email to profile activity.
            this.props.navigation.navigate('Dashboard');
            //alert('Ok');
            this.setState({isLoading:false});
          } else {
            alert('Username or Password do not match');
            //alert(responseJson);
            this.setState({isLoading:false});      
          }
        })
        .catch(error => {
          console.error(error);
        });
      } else {
      alert('Username or Password can not be empty ');
      this.setState({isLoading:false});
      }
  }
  else{alert("No Internet");}
  };

  render() {
    const marginTop = this.loginHeight.interpolate({
      inputRange: [150, SCREEN_HEIGHT],
      outputRange: [25, 50],
    });

    const headerTextkArrowOpacity = this.loginHeight.interpolate({
      inputRange: [150, SCREEN_HEIGHT],
      outputRange: [1, 0],
    });
    const headerBackArrowOpacity = this.loginHeight.interpolate({
      inputRange: [150, SCREEN_HEIGHT],
      outputRange: [0, 1],
    });
    const titleTextLeft = this.loginHeight.interpolate({
      inputRange: [150, SCREEN_HEIGHT],
      outputRange: [100, 25],
    });
    const titleTextBottom = this.loginHeight.interpolate({
      inputRange: [150, 400, SCREEN_HEIGHT],
      outputRange: [0, 0, 125],
    });
    // const titleTextOpacity= this.loginHeight.interpolate({

    //   inputRange:[150,SCREEN_HEIGHT],
    //   outputRange:[0,1]

    // })

    return (
      <View style={{ flex: 1 }}>
        <Animated.View
          style={{
            position: 'absolute',
            height: 60,
            width: 60,
            top: 60,
            left: 25,
            zIndex: 100,
            opacity: headerBackArrowOpacity,
          }}>
          <TouchableOpacity onPress={() => this.decreaseHeightOfLogin()}>
            <Icon name="md-arrow-back" style={{ color: 'black' ,fontSize: 20}} />
          </TouchableOpacity>
        </Animated.View>

        <ImageBackground
          source={require('../assets/background.jpg')}
          style={{ flex: 1 }}>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Animatable.View
              animation="zoomIn"
              iterationCount={1}
              style={{
                height: 125,
                width: 125,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../assets/logo.png')}
                style={{ height: 70, width: 70, paddingBottom: 15 }}
              />
              <Text
                style={{
                  fontWeight: 'bold',
                  paddingTop: 5,
                  fontSize: 18,
                  color: 'rgba(255,255,255,0.8)',
                }}>
                {' '}
                DEPSTAR
              </Text>
            </Animatable.View>
          </View>

          {/*bottom view*/}

          <Animatable.View animation="slideInUp" iterationCount={1}>
            <Animated.View
              style={{
                height: this.loginHeight,
                backgroundColor: '#FFFFFF',
              }}>
              <Animated.View
                style={{
                  opacity: headerTextkArrowOpacity,
                  alignItems: 'flex-start',
                  paddingHorizontal: 25,
                  marginTop: marginTop,
                }}>
                <Text style={{ fontSize: 20, fontWeight: '500' }}>
                  Depstar Login
                </Text>
              </Animated.View>
              <TouchableOpacity onPress={() => this.increaseHeightOfLogin()}>
                <Animated.View
                  style={{
                    marginTop: marginTop, //animated
                    paddingHorizontal: 25,
                    flexDirection: 'row',
                  }}>
                  <Animated.Text
                    style={{
                      fontSize: 15,
                      color: 'black',
                      position: 'absolute',
                      left: titleTextLeft,
                      bottom: titleTextBottom,
                      opacity: this.titleTextOpacity, //titleTextOpacity,
                    }}>
                    Enter Your ID number
                  </Animated.Text>

                  <Animated.View
                    style={{
                      flexDirection: 'column',
                      flex: 1,
                      borderBottomWidth: this.borderBottomWidth,
                    }}>
                    <Animated.View pointerEvents="none">
                      <TextInput
                        ref="textInputMobile"
                        returnKeyType={'next'}
                        style={{ fontSize: 15, padding: 15 }}
                        placeholder={this.state.placeholderText}
                        autoCapitalize="none" 
                        underlineColorAndroid="transparent"
                        onChangeText={Username => this.setState({ Username })}
                        onSubmitEditing={() => {
                          this.textInputPassword.focus();
                        }}
                        blurOnSubmit={false}
                      />
                    </Animated.View>
                    <TextInput
                      ref={input => {
                        this.textInputPassword = input;
                      }}
                      style={{ fontSize: 15, padding: 15, width: 300 }}
                      placeholder="Enter Your Password"
                      secureTextEntry={true}  
                      autoCapitalize="none"        
                                        
                      underlineColorAndroid="transparent"
                      onChangeText={Password => this.setState({ Password })}
                    />
                  </Animated.View>
                </Animated.View>
              </TouchableOpacity>

              <Animated.View
                style={{
                  position: 'absolute',
                  height: 60,
                  width: 60,
                  right: 10,
                  marginBottom: 10,
                  bottom: this.keyboardHeight, //animated
                  opacity: this.forwardArrowOpacity, //animated
                  zIndex: 100,
                  backgroundColor: 'black',
                  alignItems: 'center',
                  elevation: 1000,
                  justifyContent: 'center',
                  borderRadius: 30,
                  shadowOpacity: 1,
                  shadowRadius: 100,
                  // shadowolor: 'black'
                }}>
                <TouchableOpacity onPress={this.login} style={{height: 60,borderRadius: 30,justifyContent:                          'center',alignItems: 'center',width: 60}}> 
                  {
                   this.state.isLoading?<ActivityIndicator size="large" />:<Icon name="md-arrow-forward"
                    style={{ fontSize: 25, color: 'white' }}/>
                  }
                </TouchableOpacity>
              </Animated.View>
            </Animated.View>
          </Animatable.View>
        </ImageBackground>
      </View>
    );
  }
}
export default LoginScreen;
