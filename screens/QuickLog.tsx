import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Slider,
  Alert
} from "react-native";
import styles from "../util/styles";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import buttonGrid from "../component/buttonGrid";

class QuickLog extends React.Component<{}, { value: Number }> {
  constructor(props) {
    super(props);
    this.state = { value: 5 };
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={screenStyles.questionContainer}>
            <Text style={styles.text}>How severe was your attack?</Text>
            <Slider
              style={styles.slider}
              maximumValue={10}
              minimumValue={1}
              value={5.5}
              step={1}
              onValueChange={value => this.setState({ value })}
            ></Slider>
            <Text style={styles.text}>{this.state.value}</Text>
          </View>
          <View style={screenStyles.questionContainer}>
            <Text style={styles.text}>What symptoms did you experience?</Text>
            {buttonGrid(
              "Agression",
              "Extreme Irritation",
              "Difficulty Breathing"
            )}
            {buttonGrid("Dizziness", "Shaking", "Insomnia")}
            {buttonGrid("Flashbacks", "Suicidal Thoughts", "Other")}
          </View>
          <View style={screenStyles.questionContainer}>
            <Text style={styles.text}>
              What may have triggered your attack?
            </Text>
            {buttonGrid("Loud Noise", "Large Crowd", "Nightmare")}
            {buttonGrid("Smell", "Induced Pain", "Loneliness")}
            {buttonGrid("Feeling Vulnerable", "Fear or Anxiety", "Other")}
          </View>
          <View style={screenStyles.questionContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default QuickLog;

const screenStyles = StyleSheet.create({
  questionContainer: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 10
  }
});
