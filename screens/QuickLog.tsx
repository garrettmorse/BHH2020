import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Slider from 'react-native-slider';
import styles from "../util/styles";

class QuickLog extends React.Component<{}, { value: number }> {
  sliderTimeoutId: NodeJS.Timeout;
  constructor(props) {
    super(props);
    this.state = { value: 1 };
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.questionContainer}>
          <Text style={styles.text}> How severe was your attack? </Text>
          <Slider
            style={styles.slider}
            maximumValue={5}
            minimumValue={1}
            value={1}
            step={1}
            onValueChange={value => {
              this.setState({ value })
            }}
          ></Slider>
          <Text style={styles.text}>{this.state.value}</Text>
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.text}> Question 2 </Text>
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.text}> Question 3 </Text>
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.text}> Question 4 </Text>
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.text}> Question 5 </Text>
        </View>
      </ScrollView>
    );
  }
}

export default QuickLog;