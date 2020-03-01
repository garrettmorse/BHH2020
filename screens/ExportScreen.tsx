import React, { Component } from 'react';
import { Text, View, SafeAreaView, ScrollView, Button, TouchableOpacity, Share } from 'react-native';
import { LogContext } from '../context/Log';
import style from '../util/styles';
import { Notifications, } from 'expo';
import * as Permissions from 'expo-permissions';

function ExportCard({ displayName, extension }) {
  return (
    <TouchableOpacity
      style={style.button}
      key={displayName}
      onPress={async () => {
        try {
          const result = await Share.share({
            title: 'Export',
            url: `https://samuelstevens.me`
          }, { tintColor: 'green' });

          console.log(result);
        } catch (error) {
          console.log("Error in ExportCard:", error);
        }
      }}
    >
      <Text style={style.text}>{displayName} (.{extension})</Text>
    </TouchableOpacity>
  );
}

function DemoNotificationButton({ }) {
  async function scheduleNotification() {
    const notification = { title: 'are you OKAY!', body: 'We noticed that your physiological conditions are spiking. Can we help?' };

    const scheduling = {
      time: (new Date()).getTime() + 1000 * 5
    };

    try {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);

      if (status !== 'granted') {
        alert("Need alerts for this demo!");
        return;
      }

      await Notifications.scheduleLocalNotificationAsync(notification, scheduling);
    } catch (error) {
      console.log('Error in scheduleNotification():', error);
    }


  }

  return (
    <TouchableOpacity style={style.button} onPress={scheduleNotification}>
      <Text style={[style.text, { textAlign: 'center', }]}>
        Send a Warning Notification
      </Text>
    </TouchableOpacity>
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
        <ScrollView>

          {SupportedExportTypes.map(exportType => ExportCard({ displayName: exportType.displayName, extension: exportType.extension }))}
          <LogContext.Consumer>
            {context =>
              <Button onPress={() => context.saveLog({ time: new Date(), health: { heartRate: 123.4, hoursSleep: 5.6 }, questions: [] })} title="Save Log" />
            }
          </LogContext.Consumer>
          <LogContext.Consumer>
            {context => context.logs.map((log, i) =>
              <View key={i}>
                <Text>{log.time.toDateString()}</Text>
              </View>)}
          </LogContext.Consumer>
          <DemoNotificationButton />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

