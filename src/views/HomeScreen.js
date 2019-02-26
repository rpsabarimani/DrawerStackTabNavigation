import React, { Component } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Home </Text>
        <Button
          onPress={() => {
            this.props.navigation.navigate("AboutUs");
          }}
          title="About Us"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" }
});
