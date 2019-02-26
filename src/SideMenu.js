import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
const userImg = require("../assets/images/default-user.jpg");

export default class SideMenu extends Component {
  constructor(props) {
    super(props);
  }

  navigate(routeName) {
    this.props.navigation.closeDrawer();
    this.props.navigation.navigate(routeName);
  }

  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: 180,
            backgroundColor: "#fcbf19"
          }}
        >
          <Image
            source={userImg}
            style={{ width: 100, height: 100, margin: 10, borderRadius: 100 }}
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 21,
              color: "#fff",
              textAlign: "center"
            }}
          >
            Welcome!
          </Text>
        </View>
        <TouchableOpacity
          style={styles.listItem}
          onPress={() => {
            this.navigate("Home");
          }}
        >
          <Text style={styles.menuText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.listItem}
          onPress={() => {
            this.navigate("Booking");
          }}
        >
          <Text style={styles.menuText}>Booking</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.listItem}
          onPress={() => {
            this.navigate("Orders");
          }}
        >
          <Text style={styles.menuText}>Orders</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  listItem: { padding: 15, borderBottomWidth: 1, borderBottomColor: "#efefef" },
  menuText: { fontSize: 16 }
});
