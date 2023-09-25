import { ScrollView, StatusBar } from "react-native";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { NativeRouter, Routes, Route } from "react-router-native";
import UniquePlant from "./components/UniquePlant";
import Cart from "./components/Cart";
import Mandorakannu from "./components/Mandorakannu";
import { colors } from "./libs/colors";

function App(): JSX.Element {
  return (
    <>
      <NativeRouter>
        <ScrollView>
          <StatusBar backgroundColor={colors.teal}/>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/mandorakannu" element={<Mandorakannu />} />
            <Route path="/:name" element={<UniquePlant />} />
          </Routes>
        </ScrollView>
        <Navbar />
      </NativeRouter>
    </>
  );
}

export default App;
