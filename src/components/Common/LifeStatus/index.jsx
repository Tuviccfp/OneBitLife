import React from "react";
import { View, StyleSheet } from "react-native";
import Lottie from "lottie-react-native";

export default function LifeStatus() {
  /*
   * 100-maximo
   * 50-medio
   * 25-baixo
   * 00-acabou o game
   * No robo, nós temos primeiro felicidade e depois a saúde
   */

  return (
    <View style={styles.container}>
      <Lottie
        source={require("../../../assets/education/education-100.json")}
        autoPlay
        loop
        style={styles.educationAnimation}
      />
      <Lottie
      source={require("../../../assets/money/money-100.json")}
      autoPlay
      loop
      style={styles.financesAnimation}
      />
      <Lottie source={require("../../../assets/robot/robot-100-100.json")}
      autoPlay
      loop
      style={styles.robotAnimation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
  },
  educationAnimation: {
    width: 100,
    marginTop: 30,
    marginLeft: 5,
    position: 'absolute',
  },
  financesAnimation: {
    width: 100,
    marginTop: 30,
    marginLeft: 95,
    position: 'absolute'
  },
  robotAnimation: {
    width: 190,
    marginTop: 30,
    marginLeft: 25,
  },

});
