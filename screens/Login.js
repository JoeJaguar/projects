import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  DatePickerIOS,
  TextInput,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import * as All from '@fortawesome/free-solid-svg-icons';


const Select: () => React$Node = ({navigation}) => {

  const [value, onChangeText] = React.useState(' satit.sr@mail.wu.ac.th');
  const [value1, onChangeText1] = React.useState('  Password');


  return (
    <View style={{ flex: 1, backgroundColor: '#ecf0f1' }}>

      <View style={{ alignItems: 'center'}}>
        <FontAwesomeIcon icon={All.faUserCircle } size = { 80 } />
      </View>

      <View>
        <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 30 }}>
          Welcome Back
        </Text>
        <Text style={{ textAlign: 'center' }}>
          Sign up to continue
        </Text>
      </View>

      <View style={{ marginTop: 90 }}>

        <View style={{ marginLeft: 30, flexDirection: "row" }}>
          <FontAwesomeIcon icon={All.faEnvelopeOpenText} size = { 25 } />
          <Text style={{ marginLeft: 50 }}>
            E-mail
        </Text>
        </View>
        <TextInput
          style={styles.container}
          onChangeText={text => onChangeText(text)}
          value={value}
        />

        <View style={{ flexDirection: "row", marginTop: 40 }}>
          <FontAwesomeIcon style={{ marginLeft: 30 }} icon={All.faLock} size = { 25 }/>
          <TextInput
            style={styles.container}
            style={{ marginLeft: 50 }}
            onChangeText={text => onChangeText1(text)}
            value={value1}
          />
        </View>
      </View>

      <View style={{ alignItems: 'flex-end' ,fontSize: 10, color: 'blue' ,marginTop: 30}}>
        <Button 
        onPress = {()=> navigation.navigate('ForgetPassword')}
        title = 'Forgot password?'
        />
      </View>

      <View style={styles.containers}>
        <View style={styles.cards}>
          <TouchableOpacity onPress = {()=> navigation.navigate('Home')}>
            <Text style={{ paddingBottom: 25, textAlign: 'center' }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flexDirection: "row" }}>
        <Text style={{ marginLeft: 40, paddingVertical: 10 }}>
          Don’t have account?
        </Text>

        <View>
          <Button style={{ fontSize: 2 }}
            onPress = {()=> navigation.navigate('CreateAccout')}
            title='Create a new account'
          />

        </View>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    height: 40,
    borderColor: 'gray',
    width: 200,
    marginLeft: 100,
    borderColor: 'gray'
  },

  containers: {
    paddingTop: 140,
    justifyContent: 'flex-start',
    padding: 20,

  },

  cards: {
    height: 50,
    width: 350,
    marginHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 15,
    elevation: 10,
    padding: 20,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: {width: 0,height: 2,},
    shadowOpacity: 0.30,
    shadowRadius: 1.14,
    elevation: 4,

  },

});

export default Select;
