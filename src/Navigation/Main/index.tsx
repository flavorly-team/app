import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeContainer } from "@/Screens/Home";
import { FavoriteContainer } from "@/Screens/Favorite";
import { Icon } from "@/Components/Icon";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { SettingsContainer } from "../../Screens/Settings";

export type RootTabParamList = {
  Home: undefined;
  Favorite: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

// @refresh reset
export const MainNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let routeName = route.name;
          if (routeName === "Home") {
            return focused ? (
              <Icon name="home" size={size} color={color} />
            ) : (
              <Icon name="home-outline" size={size} color={color} />
            );
          } else if (routeName === "Favorite") {
            return focused ? (
              <Icon name="heart" size={size} color={color} />
            ) : (
              <Icon name="heart-outline" size={size} color={color} />
            );
          } else if (routeName === "Settings") {
            return focused ? (
              <Icon name="settings" size={size} color={color} />
            ) : (
              <Icon name="settings-outline" size={size} color={color} />
            );
          }
        },
        tabBarActiveTintColor: "#94B49F",
        tabBarInactiveTintColor: "#9CA3AF",
        tabBarIconStyle: {},
        tabBarLabelStyle: {
          fontSize: 10,
        },
        tabBarStyle: [
          {
            display: "flex",
            height: 70,
            paddingBottom: 20,
            paddingTop: 7,
          },
          null,
        ],
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeContainer}
        options={{
          tabBarLabelPosition: "below-icon",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteContainer}
        options={{
          tabBarLabelPosition: "below-icon",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsContainer}
        options={{
          tabBarLabelPosition: "below-icon",
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
