import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import DefaultButton from "../../components/Common/DefaultButton";

export default function AppExplanation() {
  function handleSetShowHome() {}

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.title}>
            Antes, deixa {"\n"} eu te explicar...
          </Text>
          <Text style={styles.descriptionCta}>
            Pronto(a) para subir de nivel na vida?
          </Text>
          <Text style={styles.description}>
            Na próxima tela você vai poder escolher {"\n"}
            seus 4 hábitos de forma individual.
          </Text>
          <DefaultButton
            buttonText={"Continuar"}
            handlePress={handleSetShowHome}
            width={250}
            height={50}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21, 21, 21, 0.98)",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    marginVertical: 40,
  },
  descriptionCta: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  description: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 20,
    marginBottom: 30,
  },
});
