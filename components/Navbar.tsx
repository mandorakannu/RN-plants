import { StyleSheet, Image, View } from "react-native";
import React from "react";
import { colors } from "../libs/colors";
import { Link } from "react-router-native";

export default function Navbar() {
  return (
    <View style={styles.container}>
      <Link to="/" underlayColor={"transparent"}>
        <Image
          style={styles.images}
          source={require("../assets/images/home.png")}
        />
      </Link>
      <Link to="/cart" underlayColor={"transparent"}>
        <Image
          style={styles.images}
          source={require("../assets/images/love.png")}
        />
      </Link>
      <View
        style={{
          borderColor: colors.teal,
          borderWidth: 2,
          backgroundColor: colors.teal,
          padding: 10,
          borderRadius: 50,
        }}
      >
        <Link to="/mandorakannu" underlayColor={"transparent"}>
          <Image
            style={styles.images}
            source={require("../assets/images/touchid.png")}
          />
        </Link>
      </View>
      <Link to="/shoping" underlayColor={"transparent"}>
        <Image
          style={styles.images}
          source={require("../assets/images/bag.png")}
        />
      </Link>
      <Link to="/profile" underlayColor={"transparent"}>
        <Image
          style={styles.images}
          source={require("../assets/images/person.png")}
        />
      </Link>
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
