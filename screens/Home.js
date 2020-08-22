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


const Home: () => React$Node = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#ecf0f1" }}>
      <View style={{ marginTop: 30 }}>
        <Text style={{ marginLeft: 30, color: "#A79090", fontSize: 20 }}>
          Your Queue
        </Text>
      </View>

      {/* ex https://reactnativemaster.com/react-native-box-shadow-example/ card */}
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 20 }}>{"          "}Time                                             Queue</Text>
          </View>
          <Text style={{ color: "gray", marginTop: 15 }}>{"  "}  1.     12 : 30                                                You Queue{"\n"}</Text>
          <Text style={{ color: "gray", marginTop: 2 }}>{"  "}  2.     01 : 00                                                You Queue{"\n"}</Text>
          <Text style={{ color: "gray", marginTop: 2 }}>{"  "}  3.     01 : 30                                                You Queue{"\n"}</Text>
          <Text style={{ color: "gray", marginTop: 2 }}>{"  "}  4.     02 : 00                                                You Queue{"\n"}</Text>
        </View>
      </View>
      {/* ex https://reactnativemaster.com/react-native-box-shadow-example/ card */}

      <View style={{ marginTop: 30 ,flexDirection :'row'}}>
        <Text style={{ marginLeft: 30, color: "#A79090", fontSize: 20 }}>
          MENU
        </Text>

        <View style={styles.containers} style ={{marginLeft : 185}}>
          <View style={styles.cardButtons}>
            <TouchableOpacity style = {styles.contain} onPress={() => navigation.navigate('Chart')}>
            <FontAwesomeIcon icon={All.faChartBar} size = {20} />
              <Text>Statistics</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>

      <View style={{
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: "row",
        flexWrap: 'wrap',
        paddingHorizontal: 50,
        marginTop : 30
        
      }}>

        <View style={styles.container}>
          <View style={styles.cardButton}>
            <TouchableOpacity style = {styles.contain} onPress={() => navigation.navigate('MyQueue')}>
            <FontAwesomeIcon icon={All.faUserClock} size = {40} />
              <Text style = {{marginTop : 10}}>MyQueue</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.cardButton}>
            <TouchableOpacity  style = {styles.contain} onPress={() => navigation.navigate('QueueTable')} >
            <FontAwesomeIcon icon={All.faTable} size = {40} />
              <Text style = {{marginTop : 10}}>QueueTable</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.cardButton}>
            <TouchableOpacity style = {styles.contain} style = {{marginLeft : 10}} onPress={() => navigation.navigate('History')}>
            <FontAwesomeIcon icon={All.faHistory} size = {40} />
              <Text style = {{marginTop : 10}}>History</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.cardButton}>
            <TouchableOpacity style = {styles.contain} onPress = {()=> navigation.navigate('ContactUs')} >
            <FontAwesomeIcon icon={All.faUsers} size = {40} />
              <Text style = {{marginTop:10}}>Contect Us</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>

      <View style={styles.containers}>
        <View style={styles.cards}>
          <TouchableOpacity style={{alignItems : 'center' }} onPress={() => navigation.navigate('Select')}>
            <Text style={{ paddingBottom: 25, }}>Buy Queue</Text>
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
    

  },
  card: {
    height: 200,
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
    flexDirection : 'row' ,
    paddingTop: 50,
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
    shadowColor: "#000",
    shadowOffset: {width: 0,height: 2,},
    shadowOpacity: 0.30,
    shadowRadius: 1.14,
    elevation: 4,

  },

  cardButton: {
    height: 120,
    width: 120,
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

  cardButtons: {
    height: 60,
    width: 120,
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

  containers: {
    paddingTop: 10,
    justifyContent: 'flex-end',
    backgroundColor: '#ecf0f1',
    padding: 8,

  },

  contain: {
    alignItems: 'center'
  }

});
export default Home;
