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


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home'
import History from './screens/History'
import MyQueue from './screens/MyQueue'
import QueueTable from './screens/QueueTable'
import Select from './screens/Select'
import ForgetPassword from './screens/ForgetPassword'
import Login from './screens/Login'
import CreateAccout from './screens/CreateAccout';
import ContactUs from './screens/ContactUs';
import Chart from "./screens/Chart";


const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home', //Set Header Title
            headerStyle: {
              backgroundColor: '#009688', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />

        <Stack.Screen
          name="History"
          component={History}
          options={{
            title: 'History', //Set Header Title
            headerStyle: {
              backgroundColor: '#009688', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />

        <Stack.Screen
          name="MyQueue"
          component={MyQueue}
          options={{
            title: 'MyQueue', //Set Header Title
            headerStyle: {
              backgroundColor: '#009688', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />

        <Stack.Screen
          name="QueueTable"
          component={QueueTable}
          options={{
            title: 'QueueTable', //Set Header Title
            headerStyle: {
              backgroundColor: '#009688', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />

        <Stack.Screen
          name="Select"
          component={Select}
          options={{
            title: 'Select', //Set Header Title
            headerStyle: {
              backgroundColor: '#009688', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />

        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{
            title: '', //Set Header Title
            headerStyle: {
              backgroundColor: '#ecf0f1', //Set Header color
            },
          }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerStyle: {
              backgroundColor: '#ecf0f1', //Set Header color
            },
            title: '', //Set Header Title
          }}
        />

        <Stack.Screen
          name="CreateAccout"
          component={CreateAccout}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#ecf0f1', //Set Header color
            },
          }}
        />

        <Stack.Screen
          name="ContactUs"
          component={ContactUs}
          options={{
            title: '', //Set Header Title
            headerStyle: {
              backgroundColor: '#ecf0f1', //Set Header color
            },
          }}
        />

        <Stack.Screen
          name="Chart"
          component={Chart}
          options={{
            title: 'Statistic', //Set Header Title
            headerStyle: {
              backgroundColor: '#009688', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;