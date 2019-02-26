import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SideMenu from "./src/SideMenu";
import HomeScreen from "./src/views/HomeScreen";
import Booking from "./src/views/BookingScreen";
import Orders from "./src/views/OrdersScreen";
import AboutUs from "./src/views/AboutScreen";
import Profile from "./src/views/ProfileScreen";

const tabNavigation = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: ({ tintColor }) => <Icon name="home" size={20} />
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: "Profile",
      tabBarIcon: ({ tintColor }) => <Icon name="account" size={20} />
    }
  }
});

const StackScreens = createStackNavigator(
  {
    Home: {
      screen: tabNavigation,
      navigationOptions: () => ({
        title: "Home"
      })
    },
    Booking: {
      screen: Booking,
      navigationOptions: () => ({
        title: "Bookings"
      })
    },
    Orders: {
      screen: Orders,
      navigationOptions: () => ({
        title: "Orders"
      })
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#ffaf00"
      },
      headerTintColor: "#fff",
      headerLeft: (
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <Icon name="menu" style={{ padding: 10 }} size={30} color="#fff" />
        </TouchableOpacity>
      )
    })
  }
);

const drawerNavigator = createDrawerNavigator(
  {
    StackScreens: { screen: StackScreens }
  },
  { contentComponent: SideMenu }
);

const stackNavigator = createStackNavigator(
  {
    Home: {
      screen: drawerNavigator,
      navigationOptions: () => ({
        header: null
      })
    },
    AboutUs: {
      screen: AboutUs,
      navigationOptions: () => ({
        title: "About Us"
      })
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#ffaf00"
      },
      headerTintColor: "#fff"
    })
  }
);

const RootNavigator = createAppContainer(stackNavigator);

export default class App extends Component {
  render() {
    return <RootNavigator />;
  }
}
