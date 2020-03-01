import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import Slider from "react-native-slider";
import Title from '../components/Title';
import styles from "../util/styles";
import { Log, LogContext, Question, HealthData } from '../context/Log';
import ButtonGrid from "../components/ButtonGrid";
import partialLog from "../util/partialLog";

function PhysiologicalCondition({ condition, value, measurement }) {
  return (
    <View style={{ marginVertical: 10 }}>
      <Text style={{ marginLeft: 5 }}>{condition}</Text>
      <Text style={{ marginLeft: 5, fontSize: 20, fontWeight: 'bold' }}>{value} {measurement}</Text>
    </View>);
}

const messages = [
  "Moderate",
  "",
  "Mild",
  "",
  "Severe",
];

class QuickLog extends React.Component<
  { navigation; },
  { severity: number; symptoms: String[]; triggers: String[]; }
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
            <Text style={[styles.text, { fontSize: 16 }]}>{this.state.severity}{
              messages[this.state.severity - 1] ? ": " + messages[this.state.severity - 1] : null}</Text>

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
          <View style={{ backgroundColor: 'white', marginBottom: 10, borderRadius: 10, padding: 10 }}>
            <Title text="Physiological Conditions" />
            <PhysiologicalCondition condition="Heart Rate" value={(Math.random() * 25 + 100).toLocaleString(undefined, { maximumFractionDigits: 0 })} measurement="BPM" />
            <PhysiologicalCondition condition="Body Temp." value={(Math.random() * 4 + 99).toLocaleString(undefined, { maximumFractionDigits: 1 })} measurement="deg" />
            <PhysiologicalCondition condition="Hours of Sleep" value={(Math.random() * 3 + 4).toLocaleString(undefined, { maximumFractionDigits: 1 })} measurement="hours" />

          </View>
          <View style={styles.questionContainer}>
            <LogContext.Consumer>
              {context =>
                <TouchableOpacity style={[styles.button, { marginTop: 10, marginBottom: 10 }]} onPress={() => {
                  context.saveLog(this.makeLog());
                  this.props.navigation.navigate('Log Event');
                  alert("Success!");
                }}>
                  <Text style={styles.text}>Submit</Text>
                </TouchableOpacity>
              }
            </LogContext.Consumer>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default QuickLog;
