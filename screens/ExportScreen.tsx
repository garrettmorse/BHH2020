import React, { Component } from 'react';
import { Text, View, SafeAreaView, ScrollView, Button, Image } from 'react-native';
import { LogContext, Log } from '../context/Log';
import Title from '../components/Title';
import styles from '../util/styles';
import { Notifications, } from 'expo';
import * as Permissions from 'expo-permissions';
import moment from 'moment';
import { ExportCard, SupportedExportTypes } from '../components/ExportCard';
import { Calendar, LocaleConfig } from 'react-native-calendars';

function DemoNotificationButton({ }) {
  async function scheduleNotification() {
    const notification = { title: 'Are You Okay?', body: 'We noticed that your physiological conditions are spiking. Let us help you.' };

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
        <ScrollView style={{ padding: 10 }}>
          <Title text="Looking Back" />
          <LogContext.Consumer>
            {context => {
              const markedDates = {};
              const data = {};
              context.logs.forEach(log => {
                data[this.formatDateString(log.time)] = { data: log }
                markedDates[this.formatDateString(log.time)] = { selected: true, selectedColor: this.formatSelectColor(log) };
              });

              return <Calendar
                style={{
                  marginVertical: 10, borderRadius: 10,
                }}
                // Initially visible month. Default = Date()
                current={'2020-02-02'}
                maxDate={Date()}
                onDayPress={(day) => {
                  let months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                  if (data[day.dateString]) {
                    var count = 0;
                    count++; // for later
                    let output = months[day.month] + " " + day.day + " Entry " + count + "\nSeverity: " + data[day.dateString].data.questions[0].response;
                    alert(output);
                  }

                }}
                // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                monthFormat={'MM/yyyy'}
                markedDates={markedDates}
              />;
            }}
          </LogContext.Consumer>
          <Title text="Common Triggers" />
          <View style={{ backgroundColor: 'white', marginVertical: 10, borderRadius: 10 }}>

            <LogContext.Consumer>
              {context => {
                const causes = {};

                context.logs.forEach(log => {
                  log.questions.filter(q => q.question === 'What may have triggered your attack?').forEach(q => {
                    q.response.split(',').forEach(a => {
                      if (a in causes) {
                        causes[a] += 1;
                      } else {
                        causes[a] = 1;
                      }
                    });
                  });
                });

                return Object.keys(causes).map(key => {
                  return [key, causes[key]];
                }).sort((a, b) => b[1] - a[1]).filter(pair => pair[0] !== "").slice(0, 3).map((pair, i) =>
                  <Text style={{ fontSize: 18, marginLeft: 15, marginTop: 12, }}>{i + 1}. {pair[0]}</Text>
                );
              }}

            </LogContext.Consumer>
            <View style={{ height: 15 }} />
          </View>
          <Title text="Export" />
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

          <Title text="Demo Stuff" />
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
          <View>
            <Image
              style={[{ height: "30%", width: "100%" }]}
              source={require("../assets/images/data.png")}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
;;
