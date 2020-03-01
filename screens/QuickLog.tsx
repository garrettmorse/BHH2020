import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

const QuickLog = () => {
  return (
    <ScrollView>
      <View style={styles.questionContainer}>
        <Text style={styles.textStyle}> How severe was your attack? </Text>
      </View>
      <View style={styles.questionContainer}>
        <Text style={styles.textStyle}> Question 2 </Text>
      </View>
      <View style={styles.questionContainer}>
        <Text style={styles.textStyle}> Question 3 </Text>
      </View>
      <View style={styles.questionContainer}>
        <Text style={styles.textStyle}> Question 4 </Text>
      </View>
      <View style={styles.questionContainer}>
        <Text style={styles.textStyle}> Question 5 </Text>
      </View>
    </ScrollView>
  );
};

export default QuickLog;

const styles = StyleSheet.create({
  questionContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  textStyle: {
    fontSize: 30,
    padding: 10
  }
});
