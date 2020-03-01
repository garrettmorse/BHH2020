import React from "react";
import { Text, View, TouchableOpacity, Alert, StyleSheet, StatusBar, Image } from "react-native";
import styles from "../util/styles";
import { ScrollView } from "react-native-gesture-handler";

const SelectScreen = ({ navigation }) => {
  return (
    <View style={[{ alignItems: 'center' }]}>
      <StatusBar barStyle="dark-content" />
      <TouchableOpacity
        style={[styles.button]}
        onPress={() => navigation.navigate("Quick Log")}
      >
        <Text style={styles.text}> Quick Update </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Detailed Log")}
      >
        <Text style={styles.text}> Detailed Update </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert("Video Now Recording!")}
      >
        <Text style={styles.text}> Video Update </Text>
      </TouchableOpacity>
      <Image
        style={[styles.button]}
        source={require("../assets/images/undraw_healthy_lifestyle_6tyl.png")}
      />
    </View>
  );
};

export default SelectScreen;
