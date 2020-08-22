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

  const [value, onChangeText] = React.useState('satit.sr@mail.wu.ac.th');

  return (
    <View style={{ flex: 1, backgroundColor: '#ecf0f1' }} >
      <View>
        <Text style={{marginTop : 10,marginLeft: 30, color: '#8D7070' }}>
          THE COMPANY
        </Text>
        <Text style={styles.container}>
          Forgot
        </Text>
        <Text style={styles.container}>
          Password?
        </Text>
      </View>

      <View style={{ marginTop: 60 }}>

        <View style ={{ flexDirection:'row' ,marginLeft: 30}}>
          <FontAwesomeIcon icon={All.faEnvelopeOpenText} size = {25}/>
          <Text style={{ marginLeft: 35 }}>
            E-mail
          </Text>
        </View>


        <View style={{ marginBottom: 20, marginTop :10 }}>
          <TextInput
            style={{ height: 40, borderColor: 'gray', width: 200, marginLeft: 90 }}
            onChangeText={text => onChangeText(text)}
            value={value}
          />
        </View>
      </View>

      <View style={styles.containers}>
        <View style={styles.cards}>
          <TouchableOpacity style={{ alignItems: 'center' }} onPress = {()=> navigation.navigate('Login')}>
            <Text style={{ paddingBottom: 25, }}>Sent Password</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
    fontSize: 30,
  },

  containers: {
    paddingTop: 400,
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
