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
  Dimensions,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

const App: () => React$Node = () => {
  return (
    <ScrollView>
      <View >
        <Text style={{ textAlign: 'right', fontSize: 15, marginRight: 15, fontWeight: 'bold', color: "#A79090", marginTop: 25 }}>
          Name Sathit Srisawat
        </Text>
        <Text style={{ textAlign: 'left', fontSize: 15, marginLeft: 15, fontWeight: 'bold', color: "#A79090", marginTop: 25 }}>
          20 August 2020
        </Text>
        <Text style={{ fontSize: 25, textAlign: 'center', marginTop: 10, fontWeight: 'bold', color: "#A79090", marginTop: 25 }}>
          Statistic This Year
          </Text>
        <LineChart
          data={{
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100
                ]
              }
            ]
          }}
          width={Dimensions.get("window").width} // from react-native
          height={220}
          yAxisSuffix="10"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />

        


        <View>
          <Text style={{ fontSize: 25, textAlign: 'center', marginTop: 10, fontWeight: 'bold', color: "#A79090", marginTop: 30 }}>
            Statistic Time
        </Text>
        </View>

        <ProgressChart
          data={data}
          width={Dimensions.get("window").width}
          height={220}
          strokeWidth={16}
          radius={32}
          chartConfig={chartConfig}
          hideLegend={false}
        />
      </View>
    </ScrollView>
  );
};
const data = {
  labels: ["morning", "Afternoon", "evening"], // optional
  data: [0.6, 0.3, 0.1]
};

const chartConfig = {

  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  style: {
    borderRadius: 16
  },
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};
export default App;