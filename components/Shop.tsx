import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { colors } from "../libs/colors";
import plants from "../assets/jsons/plants.json";
import { Link } from "react-router-native";
import { images } from "./PlantExporter";

export default function Shop() {
  return (
    <View style={styles.container}>
      {plants.map(({ name, price, image }) => (
        <View key={name} style={styles.content}>
          <Text style={styles.plantName}>{name}</Text>
          <Text style={styles.plantPrice}>{"$" + price}</Text>
          <Image style={styles.image} source={images[image]} />
          <View style={styles.btnCard}>
            <Link to={name.split(" ").join("-")} underlayColor={"transparent"}>
              <Text style={styles.addToCardBtn}>Buy Now</Text>
            </Link>
            <View style={styles.loveIconView}>
              <Image
                style={styles.loveIcon}
                source={require("../assets/images/love.png")}
              />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flexDirection: "column",
    width: 350,
    height: 300,
    backgroundColor: colors.gray,
    margin: 10,
    borderRadius: 20,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: colors.teal,
  },
  btnCard: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 10,
  },
  addToCardBtn: {
    textAlign: "center",
    backgroundColor: colors.teal,
    color: "#fff",
    padding: 10,
    borderRadius: 10,
    fontSize: 10,
  },
  loveIcon: {
    width: 20,
    height: 20,
  },
  loveIconView: {
    backgroundColor: "#fff",
    borderRadius: 50,
    padding: 10,
  },
  image: {
    width: 160,
    height: 160,
  },
  plantName: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
    padding: 10,
    width: "100%",
    textAlign: "center",
  },
  plantPrice: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: colors.teal,
    padding: 5,
    borderRadius: 10,
    color: "#fff",
  },
});
