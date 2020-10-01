import React from "react";
import { View, FlatList, StyleSheet, Text ,TouchableOpacity} from "react-native";

const semester = [
  { id: "1", name: "1st" },
  { id: "2", name: "2nd" },
  { id: "3", name: "3rd" },
 
];



const SemesterScreen=(props)=>{
    return (
      <View style={styles.container}>
        <FlatList
          data={semester}
          renderItem={function ({ item })
           {
            return (
              <TouchableOpacity 
              style={styles.button}
              onPress={ function () {
                props.navigation.navigate("Courses", item);
                }
              }>
                <Text style={styles.textStyle}>{item.name} Semester</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
    textAlign: "center",
    padding: 20,
  },

  button: {
    marginVertical: 10,
    marginHorizontal: 20,
    width: 300,
    alignItems: "center",
    backgroundColor: "#00ffbf",
    padding: 10,
  },
  textStyle: {
    fontSize: 20,
    color: "black",
  },
});


export default SemesterScreen;