import React, { useState } from "react";
import {
  FlatList,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

function App() {
  const [list, setList] = useState(["milk", "coffee", "oranges"]);
  const [finalList, setFinalList] = useState(["milk", "coffee", "oranges"]);
  const [textInput, setTextInput] = useState("");
  const onChangeText = (text) => {
    setTextInput(text);
    const regex = new RegExp("^" + text, "i");
    const matchedSites = finalList.filter((e) => regex.test(e));
    setList(matchedSites);
  };
  const handleAddItem = () => {
    if (textInput) {
      setList((prevState) => [textInput, ...finalList]);
      setFinalList((prevState) => [textInput, ...prevState]);
      setTextInput("");
    }
  };
  return (
    <View style={{ marginTop: 50 }}>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={textInput}
        />
        <TouchableOpacity
          style={{ padding: 5, borderWidth: 2, alignSelf: "center" }}
          onPress={handleAddItem}
        >
          <Text style={{ fontSize: 30 }}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList data={list} renderItem={ListItem} />
    </View>
  );
}
const ListItem = ({ item, index }) => {
  return (
    <View style={{ padding: 30, borderBottomWidth: 2 }}>
      <Text>{item}</Text>
    </View>
  );
};
``;

const styles = StyleSheet.create({
  input: {
    width: "80%",
    height: 43,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default App;
