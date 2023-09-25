import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import { colors } from "../libs/colors";
import ProfileImage from "../assets/images/profile_pic.jpg";
import Github from "../assets/images/github.png";
import LinkedIn from "../assets/images/linkedin.png";
import Instagram from "../assets/images/instagram.png";

export default function Mandorakannu() {
  const goToLinks = (links: string): void => {
    Linking.openURL(links);
  };
  return (
    <View style={styles.container}>
      <Image style={styles.myImage} source={ProfileImage} />
      <Text style={styles.name}>Kannu Mandora</Text>
      <Text style={styles.description}>
        Hi, it's me Kannu Mandora. I want to be a Full Stack Developer. I am
        currently focused on my skills in React, Node, and Express.
      </Text>
      <View style={styles.icons}>
        <TouchableOpacity
          onPress={() => goToLinks("https://github.com/mandorakannu")}
        >
          <Image style={styles.socialMediaIcon} source={Github} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToLinks("https://instagram.com/mandorakannu")}
        >
          <Image style={styles.socialMediaIcon} source={Instagram} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToLinks("https://linkedin.com/in/mandorakannu")}
        >
          <Image style={styles.socialMediaIcon} source={LinkedIn} />
        </TouchableOpacity>
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
  myImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  description: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 100,
    marginTop: 20,
    gap: 10,
  },
  socialMediaIcon: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },
});
