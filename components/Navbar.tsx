import { StyleSheet, Image, View } from "react-native";
import React from "react";
import { colors } from "../libs/colors";

export default function Navbar() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.images}
        source={require("../assets/images/home.png")}
      />
      <Image
        style={styles.images}
        source={require("../assets/images/love.png")}
      />
      <Image
        style={styles.images}
        source={require("../assets/images/touchid.png")}
      />
      <Image
        style={styles.images}
        source={require("../assets/images/bag.png")}
      />
      <Image
        style={styles.images}
        source={require("../assets/images/person.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.gray,
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: 10,
    borderRadius: 5,
    paddingVertical: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  images: {
    width: 26,
    height: 26,
  },
  main: {},
});
