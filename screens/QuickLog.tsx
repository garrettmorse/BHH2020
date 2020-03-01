import React from "react";
import { Text, View, StyleSheet, ScrollView, Slider } from "react-native";
import styles from "../util/styles";

const QuickLog = () => {
  return (
    <ScrollView>
      <View style={screenStyles.questionContainer}>
        <Text style={styles.text}> How severe was your attack? </Text>
        <Slider
          style={styles.slider}
          maximumValue={10}
          minimumValue={1}
          value={5}
          step={1}
        ></Slider>
      </View>
      <View style={screenStyles.questionContainer}>
        <Text style={styles.text}> Question 2 </Text>
      </View>
      <View style={screenStyles.questionContainer}>
        <Text style={styles.text}> Question 3 </Text>
      </View>
      <View style={screenStyles.questionContainer}>
        <Text style={styles.text}> Question 4 </Text>
      </View>
      <View style={screenStyles.questionContainer}>
        <Text style={styles.text}> Question 5 </Text>
      </View>
    </ScrollView>
  );
};

export default QuickLog;

const screenStyles = StyleSheet.create({
  questionContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
