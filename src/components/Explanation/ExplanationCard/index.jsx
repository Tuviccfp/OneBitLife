import React from "react";
import { ScrollView, View, Image, StyleSheet, Text } from "react-native";

export default function ExplanationCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Através deste App você vai consolidar {"\n"} 4 hábitos de áreas
        fundamentais:
      </Text>
      <View style={styles.explanationContainer}>
        <Image
          source={require("../../../assets/icons/educationIcon.png")}
          style={styles.icon}
        />
        <Text style={styles.description}>
          <Text style={styles.mind}>Mente:</Text> Hábitos para melhorar sua
          inteligência/sabedoria.
        </Text>

        <View style={styles.explanationContainer}>
          <Image
            source={require("../../../assets/icons/moneyIcon.png")}
            style={styles.icon}
          />
          <Text style={styles.description}>
            <Text style={styles.money}>Finanças:</Text> Hábitos para te ajudar
            com controle financeiro.
          </Text>
        </View>

        <View style={styles.explanationContainer}>
          <Image
            source={require("../../../assets/icons/bodyIcon.png")}
            style={styles.icon}
          />
          <Text style={styles.description}>
            <Text style={styles.body}>Corpo:</Text> Hábitos para te ajudar
            com controle do corpo.
          </Text>
        </View>

        <View style={styles.explanationContainer}>
          <Image
            source={require("../../../assets/icons/funIcon.png")}
            style={styles.icon}
          />
          <Text style={styles.description}>
            <Text style={styles.fun}>Humor:</Text> Hábitos para controlar o stress {'\n'} e aumentar a felicidade
          </Text>
        </View>

      </View>
      <ScrollView></ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#151515",
        width: 350,
        borderRadius: 25,
        padding: 30,
        marginBottom: 15
    },
    title: {
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: "center",
        fontSize: 16
    },
    explanationContainer: {
        flexDirection: 'column',
        marginTop: 30
    },
    icon: {
        width: 40,
        height: 40,
        marginRight: 5,
    },
    description: {
        color: '#ffffff'
    },
    mind: {
        color: '#90b7f3',
        fontWeight: 'bold'
    },
    money: {
        color: '#85bb65',
        fontWeight: 'bold'
    },
    body: {
        color: '#ff0044',
        fontWeight: 'bold'
    },  
    fun: {
        color: '#fe7f23',
        fontWeight: 'bold',
    }
})