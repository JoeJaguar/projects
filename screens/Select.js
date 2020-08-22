/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
import DateTimePicker from '@react-native-community/datetimepicker';

const Select: () => React$Node = ({navigation}) => {

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#ecf0f1" }}>

      <View style={{ marginTop: 30 }}>
        <Text style={{ marginLeft: 10, color: "#A79090", fontSize: 20 }}>
          Select time
        </Text>
      </View>

      <View>
        <View>
          <Button onPress={showDatepicker} title="Show date picker!" />
        </View>
        <View>
          <Button onPress={showTimepicker} title="Show time picker!" />
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>

      <View style={styles.containers}>
        <View style={styles.cards}>
          <TouchableOpacity style={{ alignItems: 'center' }} onPress = {() => navigation.navigate('Home')} >
            <Text style={{ paddingBottom: 25, }}>Buy</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
};
// just card at home
const styles = StyleSheet.create({

  header: {
    flexDirection: "row",
  },

  containers: {
    paddingTop: 500,
    justifyContent: 'flex-start',
    backgroundColor: '#ecf0f1',
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
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {width: 0,height: 2,},
    shadowOpacity: 0.30,
    shadowRadius: 1.14,
    elevation: 4,

  },

});
export default Select;
