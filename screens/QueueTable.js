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

const QueueTable: () => React$Node = ({navigation}) => {
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
            <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 20, textAlign: 'center' }}>     Time                                             Queue</Text>
          </View>
          <Text style={styles.onTable}>
            1.     12 : 30                                                11   Queue{"\n"}
          </Text>
          <Text style={styles.onTable}>
            2.     01 : 00                                                You Queue{"\n"}
          </Text>
          <Text style={styles.onTable}>
            2.     01 : 00                                                You Queue{"\n"}
          </Text>
          <Text style={styles.onTable}>
            2.     01 : 00                                                You Queue{"\n"}
          </Text>
          <Text style={styles.onTable}>
            2.     01 : 00                                                You Queue{"\n"}
          </Text>
          <Text style={styles.onTable}>
            2.     01 : 00                                                You Queue{"\n"}
          </Text>
          <Text style={styles.onTable}>
            2.     01 : 00                                                You Queue{"\n"}
          </Text>
          <Text style={styles.onTable}>
            2.     01 : 00                                                You Queue{"\n"}
          </Text>
          <Text style={styles.onTable}>
            2.     01 : 00                                                You Queue{"\n"}
          </Text>
          <Text style={styles.onTable}>
            2.     01 : 00                                                You Queue{"\n"}
          </Text>
          <Text style={styles.onTable}>
            2.     01 : 00                                                You Queue{"\n"}
          </Text>
          <Text style={styles.onTable}>
            2.     01 : 00                                                You Queue{"\n"}
          </Text>
        </View>
      </View>

      <View style={styles.containers}>
        <View style={styles.cards}>
          <TouchableOpacity style={{ alignItems: 'center' }} onPress = { ()=> navigation.navigate('Select')}>
            <Text style={{ paddingBottom: 25, }}>Select Time</Text>
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
    height: 550,
    width: "95%",
    backgroundColor: "white",
    borderRadius: 15,
    elevation: 10,
    marginHorizontal: 10,

  },

  header: {
    flexDirection: "row",
  },

  containers: {
    paddingTop: 40,
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

  onTable: {
    color: "gray",
    marginTop: 6,
    textAlign: 'center'
  },

});
export default QueueTable;
