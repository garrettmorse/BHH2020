import React from "react";
import { Text, View, StyleSheet, ScrollView, Alert } from "react-native";
import Slider from "react-native-slider";
import styles from "../util/styles";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import buttonGrid from "../components/buttonGrid";

class QuickLog extends React.Component<{}, { value: number }> {
  sliderTimeoutId: NodeJS.Timeout;
  constructor(props) {
    super(props);
    this.state = { value: 1 };
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
              onValueChange={value => this.setState({ value })}
            ></Slider>
            <Text style={styles.text}>{this.state.value}</Text>
          </View>
          <View style={styles.questionContainer}>
            <Text style={styles.text}>What symptoms did you experience?</Text>
            {buttonGrid(
              "Aggression",
              "Extreme Irritation",
              "Difficulty Breathing"
            )}
            {buttonGrid("Dizziness", "Shaking", "Insomnia")}
            {buttonGrid("Flashbacks", "Suicidal Thoughts", "Other")}
          </View>
          <View style={styles.questionContainer}>
            <Text style={styles.text}>
              What may have triggered your attack?
            </Text>
            {buttonGrid("Loud Noise", "Large Crowd", "Nightmare")}
            {buttonGrid("Smell", "Induced Pain", "Loneliness")}
            {buttonGrid("Feeling Vulnerable", "Fear or Anxiety", "Other")}
          </View>
          <View style={styles.questionContainer}>
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