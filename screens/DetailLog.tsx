import React from "react";
import { Text, View, ScrollView, TouchableOpacity, TextInput } from "react-native";
import Slider from "react-native-slider";
import styles from "../util/styles";
import buttonGrid from "../components/buttonGrid";

class DetailLog extends React.Component<{}, { value: number }> {
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
            <Text style={styles.text}>Comment on the severity of your episode.</Text>
            <TextInput multiline={true} style={styles.textbox} />
          </View>
          <View style={styles.questionContainer}>
            <Text style={styles.text}>Describe your symptoms to us.</Text>
            <TextInput multiline={true} style={styles.textbox} />
          </View>
          <View style={styles.questionContainer}>
            <Text style={styles.text}>
              Tell us about what happened.
            </Text>
            <TextInput multiline={true} style={styles.textbox} />
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

export default DetailLog;