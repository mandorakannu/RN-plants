import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useState, useLayoutEffect } from "react";
import { useLocation } from "react-router-native";
import { colors } from "../libs/colors";
import PlantsArr from "../assets/jsons/plants.json";
import { images } from "./PlantExporter";

type PlantType = (typeof PlantsArr)[number];
type PlantDataType = {
  size: string;
  plantName: string;
  height: string;
  humidity: string;
};
const PlantsData = ({ size, plantName, height, humidity }: PlantDataType) => {
  return (
    <View style={styles.plantView}>
      <View>
        <Text style={styles.plantDataHeading}>Size</Text>
        <Text style={styles.plantData}>{size}</Text>
      </View>
      <View>
        <Text style={styles.plantDataHeading}>Plant</Text>
        <Text style={styles.plantData}>{plantName}</Text>
      </View>
      <View>
        <Text style={styles.plantDataHeading}>Height</Text>
        <Text style={styles.plantData}>{height}</Text>
      </View>
      <View>
        <Text style={styles.plantDataHeading}>Humidity</Text>
        <Text style={styles.plantData}>{humidity}</Text>
      </View>
    </View>
  );
};
export default function UniquePlant() {
  const pathname = useLocation().pathname;
  const location = pathname.split("-").join(" ").split("/")[1];

  const [plant, setPlant] = useState<PlantType>();

  useLayoutEffect(() => {
    const uniquePlant = PlantsArr.find((plant) => plant.name === location);
    setPlant(uniquePlant);
  }, [pathname]);
  const review = Math.floor(Math.random() * 5) + 1;
  const randomReview = Math.floor(Math.random() * 100) + 1;
  if (!plant) {
    return null;
  }
  const {
    name,
    price,
    image: imageUrl,
    size,
    height,
    humidity,
    description,
  } = plant!;
  return (
    <>
      <View style={styles.container}>
        <View style={styles.imageView}>
          <Image style={styles.plantImage} source={images[imageUrl]} />
        </View>
        <View style={styles.headerContent}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.review}>
            🌟 {review} {"(" + randomReview + " Reviews)"}
          </Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.description}>{description}</Text>
          <PlantsData
            size={size}
            plantName={name}
            height={height}
            humidity={humidity}
          />
        </View>
        <View style={styles.addToCartArea}>
          <Text style={{ fontSize: 16 }}>
            Price: <Text style={{ fontWeight: "bold" }}>{price}</Text>
          </Text>
          <TouchableOpacity>
            <Text style={[styles.description, styles.addToCart]}>
              Add to Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageView: {
    borderRadius: 10,
    padding: 50,
    backgroundColor: colors.gray100,
  },
  plantImage: {
    width: 300,
    height: 300,
  },
  headerContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  review: {
    fontSize: 16,
    fontWeight: "300",
  },
  description: {
    fontSize: 16,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  plantView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  plantDataHeading: {
    fontWeight: "500",
    color: colors.teal,
  },
  plantData: {
    fontWeight: "bold",
    color: colors.gray200,
  },
  addToCartArea: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  addToCart: {
    backgroundColor: colors.teal,
    color: colors.white,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 50,
  },
});
