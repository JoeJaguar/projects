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

  const [value, onChangeText] = React.useState('Name');
  const [value1, onChangeText1] = React.useState('E-mail');
  const [value2, onChangeText2] = React.useState('Phone');
  const [value3, onChangeText3] = React.useState('Password');
  const [value4, onChangeText4] = React.useState('Conferm Password');

  return (
    <View style={{ flex: 1, backgroundColor: '#ecf0f1' }}>
      <View>
        <Text style={{ textAlign: 'center', fontSize: 30 }}>
          Create Accout
        </Text>
        <Text style={{ textAlign: 'center' }}>
          Create a new accout
        </Text>
      </View>

      <View style={{ marginTop: 90 }}>

        <View style={{ flexDirection: 'row',marginLeft: 50 }}>
          <FontAwesomeIcon icon={All.faUserAlt} size = {25} />
          <TextInput
          style = {{marginLeft : 60}}
          onChangeText={text => onChangeText(text)}
          value={value}
        />
        </View>

        <View style={{ flexDirection: 'row',marginLeft: 50 ,marginTop : 40}}>
          <FontAwesomeIcon icon={All.faEnvelopeOpenText} size = {25} />
          <TextInput
          style = {{marginLeft : 60}}
          onChangeText={text => onChangeText1(text)}
          value={value1}
        />
        </View>
        

        <View style={{ flexDirection: 'row',marginLeft: 50 ,marginTop : 40}}>
            <FontAwesomeIcon icon={All.faPhoneSquareAlt} size={25}/>
          <TextInput
          style = {{marginLeft : 60}}
          onChangeText={text => onChangeText2(text)}
          value={value2}
        />
        </View>

        <View style={{ flexDirection: 'row',marginLeft: 50 ,marginTop : 40}}>
          <FontAwesomeIcon icon={All.faKey} size = {25}/>
          <TextInput
          style = {{marginLeft : 60}}
          onChangeText={text => onChangeText3(text)}
          value={value3}
        />
        </View>

        <View style={{ flexDirection: 'row',marginLeft: 50 ,marginTop : 25}}>
          <FontAwesomeIcon icon={All.faUnlockAlt} size = {25}/>
          <TextInput
          style = {{marginLeft : 60}}
          onChangeText={text => onChangeText4(text)}
          value={value4}
        />
        </View>
      </View>

      <View style={styles.containers}>
        <View style={styles.cards}>
          <TouchableOpacity style={{ alignItems: 'center' }} onPress = {()=> navigation.navigate('Login')}>
            <Text style={{ paddingBottom: 25, }}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style = {{flexDirection : 'row' , marginTop : 20}}>
        <Text style={{ textAlign: 'center' ,marginLeft : 100,paddingVertical: 10}}>
          Already have a account?
          </Text>
        <Button
          onPress = {()=> navigation.navigate('Login')}
          title='login'
        />
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
