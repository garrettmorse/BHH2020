import React from "react";
import { Text, View, ScrollView, TouchableOpacity, TextInput, Image } from "react-native";
import styles from "../util/styles";
import { LogContext, Log, Question } from '../context/Log';
import partialLog from '../util/partialLog';

class DetailLog extends React.Component<
  { navigation; },
  { severity: string; symptoms: string; triggers: string; }
  > {
  sliderTimeoutId: NodeJS.Timeout;
  constructor(props) {
    super(props);
    this.state = { severity: "", symptoms: "", triggers: "" };
  }

  makeLog(): Log {
    const questions: Question[] = [
      {
        question: "Severity of the attack",
        response: this.state.severity
      },
      {
        question: "What symptoms did you experience?",
        response: this.state.symptoms
      },
      {
        question: "What may have triggered your attack?",
        response: this.state.triggers
      }
    ];

    return partialLog(questions);
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={[styles.questionContainer, { alignItems: 'flex-start' }]}>
            <Text style={{ fontSize: 16, paddingVertical: 5 }}>
              Comment on the severity of your episode.
            </Text>
            <TextInput
              multiline={true}
              style={styles.textbox}
              onChangeText={text => this.setState({ severity: text })}
            />
          </View>
          <View style={[styles.questionContainer, { alignItems: 'flex-start' }]}>
            <Text style={{ fontSize: 16, paddingVertical: 5 }}>Describe your symptoms to us.</Text>
            <TextInput
              multiline={true}
              style={styles.textbox}
              onChangeText={text => this.setState({ symptoms: text })}
            />
          </View>
          <View style={[styles.questionContainer, { alignItems: 'flex-start' }]}>
            <Text style={{ fontSize: 16, paddingVertical: 5 }}>Tell us about what happened.</Text>
            <TextInput
              multiline={true}
              style={styles.textbox}
              onChangeText={text => this.setState({ triggers: text })}
            />
          </View>
          <LogContext.Consumer>
            {context => (
              <TouchableOpacity
                style={[styles.button, { alignSelf: 'center' }]}
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
        <Image
          style={[{ height: "40%", width: "100%" }]}
          source={require("../assets/images/sorting_thoughts.png")}
        />
      </ScrollView>
    );
  }
}

export default DetailLog;
