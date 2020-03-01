import React from "react";
import { Text, View, StyleSheet, ScrollView, Alert } from "react-native";
import Slider from "react-native-slider";
import styles from "../util/styles";
import { Log, LogContext, Question, HealthData } from "../context/Log";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import ButtonGrid from "../components/ButtonGrid";
import partialLog from "../util/partialLog";

class QuickLog extends React.Component<
  { navigation },
  { severity: number; symptoms: String[]; triggers: String[] }
> {
  sliderTimeoutId: NodeJS.Timeout;
  constructor(props) {
    super(props);
    this.state = {
      symptoms: [],
      triggers: [],
      severity: 1
    };
  }

  toggleValueFromList<T>(value: T, list: T[]): T[] {
    const index = list.indexOf(value);

    if (index > -1) {
      return [...list.slice(0, index), ...list.slice(index + 1)];
    } else {
      return [...list, value];
    }
  }

  updateSymptoms(value: string) {
    this.setState((prevState, _) => ({
      symptoms: this.toggleValueFromList(value, prevState.symptoms)
    }));
  }

  updateTriggers(value: string) {
    this.setState((prevState, _) => ({
      triggers: this.toggleValueFromList(value, prevState.triggers)
    }));
  }

  makeLog(): Log {
    const questions: Question[] = [
      {
        question: "Severity of the attack",
        response: String(this.state.severity)
      },
      {
        question: "What symptoms did you experience?",
        response: this.state.symptoms.join(",")
      },
      {
        question: "What may have triggered your attack?",
        response: this.state.triggers.join(",")
      }
    ];

    return partialLog(questions);
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.questionContainer}>
            <Text style={styles.text}>How severe was your attack?</Text>
            <Slider
              style={styles.slider}
              maximumValue={5}
              minimumValue={1}
              value={1}
              step={1}
              onValueChange={severity => this.setState({ severity })}
            ></Slider>
            <Text style={styles.text}>{this.state.severity}</Text>
          </View>
          <View style={styles.questionContainer}>
            <Text style={styles.text}>What symptoms did you experience?</Text>
            <ButtonGrid
              labels={[
                "Aggression",
                "Extreme Irritation",
                "Difficulty Breathing"
              ]}
              toggleValue={value => this.updateSymptoms(value)}
              selected={this.state.symptoms}
            />
            <ButtonGrid
              labels={["Dizziness", "Shaking", "Insomnia"]}
              toggleValue={value => this.updateSymptoms(value)}
              selected={this.state.symptoms}
            />
            <ButtonGrid
              labels={["Flashbacks", "Suicidal Thoughts", "Other"]}
              toggleValue={value => this.updateSymptoms(value)}
              selected={this.state.symptoms}
            />
          </View>
          <View style={styles.questionContainer}>
            <Text style={styles.text}>
              What may have triggered your attack?
            </Text>
            <ButtonGrid
              labels={["Loud Noise", "Large Crowd", "Nightmare"]}
              toggleValue={value => this.updateTriggers(value)}
              selected={this.state.triggers}
            />
            <ButtonGrid
              labels={["Smell", "Induced Pain", "Loneliness"]}
              toggleValue={value => this.updateTriggers(value)}
              selected={this.state.triggers}
            />
            <ButtonGrid
              labels={["Feeling Vulnerable", "Fear or Anxiety", "Other"]}
              toggleValue={value => this.updateTriggers(value)}
              selected={this.state.triggers}
            />
          </View>
          <View style={styles.questionContainer}>
            <LogContext.Consumer>
              {context => (
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    context.saveLog(this.makeLog());
                    this.props.navigation.navigate("Log Event");
                  }}
                >
                  <Text style={styles.text}>Submit</Text>
                </TouchableOpacity>
              )}
            </LogContext.Consumer>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default QuickLog;
