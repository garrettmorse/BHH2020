import React, { Component } from 'react';
import { Text, View, SafeAreaView, ScrollView, Button, TouchableOpacity, Share } from 'react-native';
import { LogContext, Log } from '../context/Log';
import styles from '../util/styles';
import { Notifications, } from 'expo';
import * as Permissions from 'expo-permissions';
import moment from 'moment';
import { ExportCard, SupportedExportTypes } from '../components/ExportCard';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

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
    <Button title="Send a Warning Notification" onPress={scheduleNotification} />);
};


export default class ExportScreen extends Component<{ navigation, screenProps; }, {}> {
  constructor(props) {
    super(props);

    this.state = {};
  }

  formatDateString(date: Date): string {
    return moment(date).format('YYYY-MM-DD');
  }

  formatSelectColor(log: Log): string { // valid CSS color string
    const severityQuestions = log.questions.filter(q => q.question == 'Severity of the attack');

    let singleValue = severityQuestions.length > 0 ? parseFloat(severityQuestions[0].response) / 5 + Math.random() * 0.1 : Math.random();

    if (isNaN(singleValue)) {
      singleValue = Math.random();
    }

    const h = (1.0 - singleValue) * 120;
    return "hsl(" + h + ", 70%, 50%)";
  }

  render() {

    return (
      <SafeAreaView>
        <ScrollView>
          <Text style={{ marginTop: 25, marginLeft: 15, fontSize: 26, fontWeight: 'bold' }}>Looking Back</Text>
          <LogContext.Consumer>
            {context => {

              const markedDates = {};

              context.logs.forEach(log => {
                markedDates[this.formatDateString(log.time)] = { selected: true, selectedColor: this.formatSelectColor(log) };
              });

              console.log(markedDates);

              return <Calendar
                style={{
                  margin: 15, borderRadius: 10,
                }}
                // Initially visible month. Default = Date()
                current={'2020-02-01'}
                maxDate={Date()}
                // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                monthFormat={'MM/yyyy'}
                markedDates={markedDates}
              />;
            }}
          </LogContext.Consumer>
          <Text style={{ marginLeft: 15, fontSize: 26, fontWeight: 'bold' }}>Export</Text>
          <LogContext.Consumer>
            {context =>
              SupportedExportTypes.map(exportType => ExportCard({
                filetype: exportType, logs: context.logs
              }))
            }
          </LogContext.Consumer>
          {/* <LogContext.Consumer>
            {context => context.logs.map((log, i) =>
              <View key={i}>
                <Text>{log.time.toDateString()}</Text>
              </View>)}
          </LogContext.Consumer> */}

          <Text style={{ marginTop: 25, marginLeft: 15, fontSize: 26, fontWeight: 'bold' }}>Demo Parts</Text>
          <DemoNotificationButton />
          <LogContext.Consumer>
            {context => <Button onPress={context.resetLogs} title="Reset To Default" />}

          </LogContext.Consumer>
          <LogContext.Consumer>
            {context =>
              <Button onPress={() => context.saveLog({ time: new Date(), health: { heartRate: 123.4, hoursSleep: 5.6 }, questions: [] })} title="Save Log" />
            }
          </LogContext.Consumer>
          <View style={{ height: 40 }} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

