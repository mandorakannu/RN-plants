import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { colors } from "../libs/colors";
import Filter from "./Filter";

export default function Main() {
  return (
    <>
      <View style={styles.heading}>
        <Text style={styles.headingText}>Find your favorite plants</Text>
        <View style={styles.searchIconView}>
          <Image
            source={require("../assets/images/search.png")}
            style={styles.searchIcon}
          />
        </View>
      </View>
      <View style={styles.headerOffer}>
        <View>
          <Text style={styles.headerOfferText}>30% OFF</Text>
          <Text style={styles.headerOfferTextDescription}>24 - 30 Sept</Text>
        </View>
        <View style={styles.plantHeaderImage}>
          <Image
            style={styles.plantImage}
            source={require("../assets/images/plants/plant-1.png")}
          />
        </View>
      </View>
      <Filter />
    </>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
    borderRadius: 5,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  headingText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    width: "70%",
  },
  searchIconView: {
    borderColor: colors.teal,
    borderWidth: 2,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomleftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopStartRadius: 30,
    padding: 10,
  },
  searchIcon: {
    width: 26,
    height: 26,
  },
  headerOffer: {
    marginHorizontal: 25,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: colors.lime,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  plantHeaderImage: {},
  plantImage: {
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
  headerOfferText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
  },
  headerOfferTextDescription: {
    fontSize: 15,
    fontWeight: "bold",
    opacity: 0.5,
  },
});
