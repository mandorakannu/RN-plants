import { StyleSheet, Text, ScrollView } from "react-native";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App(): JSX.Element {
  return (
    <>
      <ScrollView>
        <Main />
      </ScrollView>
      <Navbar />
    </>
  );
}

export default App;

