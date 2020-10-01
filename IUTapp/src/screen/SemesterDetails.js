import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

const semesterOne = [
  { id: "1", code: "SWE 4101" },
  { id: "2", code: "SWE 4124" },
  { id: "3", code: "SWE 4131" },
];

const semesterTwo = [
  { id: "1", code: "SWE 4201" },
  { id: "2", code: "SWE 4241" },
];

const semesterThree=[
    {id:'1',code:'SWE 4301'}
];

const SemesterDetailsScreen = (props) => {
    
    const semester= props.route.params;
    if (semester.id=='1') {
        return (
          <View style={styles.container}>
            <FlatList
              data={semesterOne}
              renderItem={function ({ item }) {
                return <Text style={styles.textStyle}> {item.code} </Text>;
              }}
            ></FlatList>
          </View>
        );
    }
    else if (semester.id=='2') {
        return (
          <View style={styles.container}>
            <FlatList
              data={semesterTwo}
              renderItem={function ({ item }) {
                return <Text style={styles.textStyle}> {item.code} </Text>;
              }}
            ></FlatList>
          </View>
        );
    } 
    else if(semester.id=='3'){
        return (
          <View style={styles.container}>
            <FlatList
              data={semesterThree}
              renderItem={function ({ item }) {
                return <Text style={styles.textStyle}> {item.code} </Text>;
              }}
            ></FlatList>
          </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: "100%",
        textAlign: "center",
    },
    textStyle: {
        width: 350,
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        fontSize: 15,
        color: "black",
    },
});

export default SemesterDetailsScreen;