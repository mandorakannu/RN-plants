import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useState } from "react";
import { colors } from "../libs/colors";

export default function Filter() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const set = (filter: string) => {
    setSelectedFilter(filter);
  };
  const filters = [
    "All",
    "Outdoor",
    "Indoor",
    "Office",
    "Home",
    "Garden",
    "Bathroom",
    "Popular",
    "Bedroom",
    "Living Room",
  ];
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {filters.map((filter, index) => (
          <Text
            onPress={() => set(filter)}
            style={[
              styles.filterText,
              selectedFilter === filter && styles.selectedFilter,
            ]}
            key={index}
          >
            {filter}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  filterText: {
    textAlign: "center",
    borderColor: colors.gray100,
    color: colors.gray200,
    fontWeight: "bold",
    fontSize: 18,
    marginHorizontal: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 20,
  },
  selectedFilter: {
    color: "#000",
    borderColor: colors.teal,
  },
});
