import React from "react";
import { Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
import Slider from "react-native-slider";
import Title from '../components/Title';
import styles from "../util/styles";
import { Log, LogContext, Question } from '../context/Log';
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
  { severity: number; symptoms: String[]; triggers: String[]; hoursSleep: number; heartRate: number; bodyTemp: number; }
  > {
  sliderTimeoutId: NodeJS.Timeout;
  constructor(props) {
    super(props);
    this.state = {
      symptoms: [],
      triggers: [],
      severity: 1,
      hoursSleep: 0,
      heartRate: 0,
      bodyTemp: 0,
    };
  }

  componentDidMount() {
    const bodyTemp = Math.random() * 4 + 99;
    const heartRate = Math.random() * 25 + 100;
    const hoursSleep = Math.random() * 4 + 3;

    this.setState({ bodyTemp, heartRate, hoursSleep });
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
            <Text style={[styles.text, { color: "black" }]}>How severe was your attack?</Text>
            <Slider
              style={styles.slider}
              maximumValue={5}
              minimumValue={1}
              value={1}
              step={1}
              onValueChange={severity => this.setState({ severity })}
            ></Slider>
            <Text>{this.state.severity}{
              messages[this.state.severity - 1] ? ": " + messages[this.state.severity - 1] : null}</Text>

          </View>
          <View style={styles.questionContainer}>
            <Text style={[styles.text, { color: "black" }]}>What symptoms did you experience?</Text>
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
            <Text style={[styles.text, { color: "black" }]}>
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
            <PhysiologicalCondition condition="Heart Rate" value={this.state.heartRate.toLocaleString(undefined, { maximumFractionDigits: 0 })} measurement="BPM" />
            <PhysiologicalCondition condition="Body Temp." value={this.state.bodyTemp.toLocaleString(undefined, { maximumFractionDigits: 1 })} measurement="deg" />
            <PhysiologicalCondition condition="Hours of Sleep" value={this.state.hoursSleep.toLocaleString(undefined, { maximumFractionDigits: 1 })} measurement="hours" />

          </View>
          <LogContext.Consumer>
            {context =>
              <TouchableOpacity style={[styles.button, { marginTop: 10, marginBottom: 20, alignSelf: 'center' }]} onPress={() => {
                context.saveLog(this.makeLog());
                this.props.navigation.navigate('Log Event');
                alert("Success!");
              }}>
                <Text style={styles.text}>Submit</Text>
              </TouchableOpacity>
            }
          </LogContext.Consumer>
        </View>
        <Image
          style={[{ height: "20%", width: "100%" }]}
          source={require("../assets/images/sorting_thoughts.png")}
        />
      </ScrollView>
    );
  }
}

export default QuickLog;
