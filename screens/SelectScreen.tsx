import React from "react";
import { Text, View, TouchableOpacity, Alert, StyleSheet } from "react-native";

const SelectScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={styles.buttonBlock}>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.navigate("Quick Log")}
        >
          <Text style={styles.buttonText}> Quick Update </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonBlock}>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.navigate("Detailed Log")}
        >
          <Text style={styles.buttonText}> Detailed Update </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectScreen;

const styles = StyleSheet.create({
  buttonBlock: {
    height: "40%",
    width: "80%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  buttons: {
    padding: 20,
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
  },
  buttonText: {
    fontSize: 35
  }
});
