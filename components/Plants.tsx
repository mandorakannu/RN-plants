import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import plants from "../assets/jsons/plants.json";
import { colors } from "../libs/colors";
import Plant1 from "../assets/images/plants/plant-1.png";
import Plant2 from "../assets/images/plants/plant-2.png";
import Plant3 from "../assets/images/plants/plant-3.png";
import Plant4 from "../assets/images/plants/plant-4.png";
import Plant5 from "../assets/images/plants/plant-5.png";
import Plant6 from "../assets/images/plants/plant-6.png";
import Plant7 from "../assets/images/plants/plant-7.png";
import Plant8 from "../assets/images/plants/plant-8.png";
import Plant9 from "../assets/images/plants/plant-9.png";
import Plant10 from "../assets/images/plants/plant-10.png";
import { ImageSourcePropType } from "react-native";
export default function Plants(): JSX.Element {
  const images: ImageSourcePropType[] = [
    Plant1,
    Plant2,
    Plant3,
    Plant4,
    Plant5,
    Plant6,
    Plant7,
    Plant8,
    Plant9,
    Plant10,
  ];
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {plants.map(({ name, price, image }) => (
          <View key={name} style={styles.content}>
            <Text style={styles.plantName}>{name}</Text>
            <Text style={styles.plantPrice}>{"$" + price}</Text>
            <Image style={styles.image} source={images[image]} />
            <View style={styles.btnCard}>
              <Text style={styles.addToCardBtn}>Add To Cart</Text>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: 10,
  },
  content: {
    flexDirection: "column",
    width: 200,
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
    width: "50%",
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
    position: "relative",
    top: 120,
    left: -80,
    transform: [{ rotate: "-90deg" }],
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
