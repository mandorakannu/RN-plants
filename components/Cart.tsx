import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "react-router-native";
import { colors } from "../libs/colors";

export default function Cart() {
  return (
    <View style={styles.container}>
      <Text style={styles.nothingFound}>Nothing Found!</Text>
      <View>
        <Link to="/" underlayColor={"transparent"}>
          <Text style={styles.headingText}>Home</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: 600,
  },
  headingText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    backgroundColor: colors.teal,
    color: colors.white,
    padding: 10,
    borderRadius: 10,
  },
  nothingFound: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
});
