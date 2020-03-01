import React from "react";
import { Text, View, TouchableOpacity, Alert, StyleSheet } from "react-native";
import styles from "../util/styles";

const SelectScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={screenStyles.buttonBlock}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Quick Log")}
        >
          <Text style={styles.text}> Quick Update </Text>
        </TouchableOpacity>
      </View>
      <View style={screenStyles.buttonBlock}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Detailed Log")}
        >
          <Text style={styles.text}> Detailed Update </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectScreen;

const screenStyles = StyleSheet.create({
  buttonBlock: {
    height: "40%",
    width: "80%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  }
});
