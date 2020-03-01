import React, { Component } from 'react';
import { Text, View, SafeAreaView, ScrollView, Button } from 'react-native';
import { getAllLogs, saveLog } from '../functions/data';
import { LogContext } from '../context/Log';



function ExportCard() {
  return null;
}

export default class ExportScreen extends Component<{ navigation, screenProps; }, {}> {
  constructor(props) {
    super(props);

    this.state = {};
  }


  render() {
    return (
      <SafeAreaView>
        <Text>Export</Text>
        <ScrollView>
          <LogContext.Consumer>
            {context => context.logs.map((log, i) =>
              <View key={i}>
                <Text>{log.time.toDateString()}</Text>
              </View>)}
          </LogContext.Consumer>
        </ScrollView>
        <LogContext.Consumer>
          {context =>
            <Button onPress={() => context.saveLog({ time: new Date(), health: { heartRate: 123.4, hoursSleep: 5.6 }, questions: [] })} title="Save Log" />
          }
        </LogContext.Consumer>
      </SafeAreaView>
    );
  }
}



