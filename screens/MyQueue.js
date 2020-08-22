/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import * as All from '@fortawesome/free-solid-svg-icons';

const MyQueue: () => React$Node = ({navigation}) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#ecf0f1" }}>
      
      <View style={{ marginTop: 30 }}>
        <Text style={{ marginLeft: 10, color: "#A79090", fontSize: 20 }}>
          Queue Table
        </Text>
      </View>

      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={{ fontWeight: "bold", fontSize: 18 ,marginTop: 20 , textAlign: 'center'}}>     Time                                             Queue</Text>
          </View>
          <Text style={{ color: "gray", marginTop: 15 ,textAlign: 'center'}}>
            1.     12 : 30                                                11   Queue{"\n"}
          </Text>
          <Text style={{ color: "gray", marginTop: 4 ,textAlign: 'center'}}>
            2.     01 : 00                                                You Queue{"\n"}
          </Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.card2}>
            <Text style={styles.textCard2}>Driver : Sathit Srisawat</Text>
            <Text style={styles.textCard2}>E-mail : Satit.sr@mail.wu.ac.th</Text>
          </View>
          <Text style = {styles.textCard3}>
            0801455967
          </Text>
          <Text style = {styles.textCard3}>
            4 กธ 415 นครศรีธรรมราช
          </Text>
        </View>
      </View>

      <View style={styles.containers}>
        <View style={styles.cards}>
          <TouchableOpacity style={{ alignItems: 'center' }} onPress = { () => navigation.navigate('QueueTable')}>
            <Text style={{ paddingBottom: 25, }}>Queue Table</Text>
          </TouchableOpacity>
        </View>
      </View>


    </View>
  );
};
// just card at home
const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    justifyContent: 'flex-start',
    backgroundColor: '#ecf0f1',
    padding: 8,
    marginTop: 20,

  },
  card: {
    height: 200,
    width: "95%",
    backgroundColor: "white",
    borderRadius: 15,
    elevation: 10,
    marginHorizontal: 10,

  },
  card2: {
    marginTop: 10,
    marginLeft: 10,
    height: 80,
    width: "95%",
    backgroundColor: "#009688",
    borderRadius: 15,
    

  },

  header: {
    flexDirection: "row",
  },

  textCard2: {
    marginLeft: 80,
    marginTop: 15,
    color: "#FFFFFF",
  },

  textCard3: {
    marginLeft: 80,
    marginTop: 25,
    color: "#A79090",
  },

  containers: {
    paddingTop: 100,
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
export default MyQueue;
