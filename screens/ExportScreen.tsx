import React, { Component } from 'react';
import { Text, View, SafeAreaView, ScrollView, Button } from 'react-native';
import { getAllLogs, saveLog } from '../functions/data';
import { LogContext } from '../context/Log';



function ExportCard({ displayName, extension }) {
  return (
    <View style={{
      flex: 1, margin: 15,
      padding: 30,
      alignItems: 'center',
      backgroundColor: 'skyblue',
      shadowColor: "black",
      shadowOffset: { width: -2, height: 2 },
      shadowOpacity: 0.7
    }} key={displayName} >
      <Text style={{ color: 'darkblue', fontSize: 26 }}>{displayName} (.{extension})</Text>
    </View>
  );
}



interface ExportType {
  extension: string,
  displayName: string,
}

const SupportedExportTypes: ExportType[] = [
  { extension: 'xlsx', displayName: 'Excel' },
  { extension: 'csv', displayName: 'CSV' },
  { extension: 'json', displayName: 'JSON' },
  { extension: 'txt', displayName: 'Text' }
];

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
          {SupportedExportTypes.map(exportType => ExportCard({ displayName: exportType.displayName, extension: exportType.extension }))}
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



