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
    const notification = { title: 'Are You Okay?', body: 'We noticed that your physiological conditions are spiking. Can we help?' };

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
    <View style={{ alignItems: 'center' }}>
      <TouchableOpacity style={styles.button} onPress={scheduleNotification}>
        <Text style={[styles.text, { alignItems: 'center', textAlign: 'center', }]}>
          Send a Warning Notification
      </Text>
      </TouchableOpacity >
    </View>
  );
};

export default class ExportScreen extends Component<{ navigation, screenProps; }, {}> {
  constructor(props) {
    super(props);

    this.state = {};
  }

  formatDateString(date: Date): string {
    console.log(moment(date).format('YYYY-MM-DD'));
    return moment(date).format('YYYY-MM-DD');
  }

  formatSelectColor(log: Log): string { // valid CSS color string
    console.log(log.questions);
    const severityQuestions = log.questions.filter(q => q.question == 'Severity of the attack');
    console.log(severityQuestions);

    let singleValue = severityQuestions.length > 0 ? parseFloat(severityQuestions[0].response) : 0.5;

    if (isNaN(singleValue)) {
      singleValue = 0.5;
    }

    const h = (1.0 - singleValue) * 240;
    return "hsl(" + h + ", 40%, 50%)";
  }

  render() {

    return (
      <SafeAreaView>
        <ScrollView>
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
          <LogContext.Consumer>
            {context =>
              SupportedExportTypes.map(exportType => ExportCard({
                filetype: exportType, logs: context.logs
              }))
            }
          </LogContext.Consumer>
          <LogContext.Consumer>
            {context => context.logs.map((log, i) =>
              <View key={i}>
                <Text>{log.time.toDateString()}</Text>
              </View>)}
          </LogContext.Consumer>
          <LogContext.Consumer>
            {context =>
              <Button onPress={() => context.saveLog({ time: new Date(), health: { heartRate: 123.4, hoursSleep: 5.6 }, questions: [] })} title="Save Log" />
            }
          </LogContext.Consumer>
          <DemoNotificationButton />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

