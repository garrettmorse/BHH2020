import React from "react";
import { Text, View, TouchableOpacity, Alert, StyleSheet, StatusBar, Image } from "react-native";
import styles from "../util/styles";
import { ScrollView } from "react-native-gesture-handler";

const SelectScreen = ({ navigation }) => {
  return (
    <View style={[{ width: "100%", flex: 1, justifyContent: 'center' }]}>
      <StatusBar barStyle={"dark-content"} />
      <ScrollView contentContainerStyle={{ alignItems: 'center' }} overScrollMode={'never'} showsVerticalScrollIndicator={false} scrollEnabled={true} style={{ flex: 1, height: "100%", width: "100%" }}>
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
          style={[{ height: "75%", width: "100%" }]}
          source={require("../assets/images/undraw_healthy_lifestyle_6tyl.png")}
        />
      </ScrollView>


    </View >
  );
};

export default SelectScreen;
