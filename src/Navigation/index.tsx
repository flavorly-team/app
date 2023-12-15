import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from "./Main";
import { WelcomeContainer } from "@/Screens/Welcome";
import { RootScreens } from "@/Screens";
import { OnboardingContainer } from "../Screens/Onboarding/OnboardingContainer";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type RootStackParamList = {
  [RootScreens.ONBOARDING]: undefined;
  [RootScreens.MAIN]: undefined;
  [RootScreens.WELCOME]: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

// @refresh reset
const ApplicationNavigator = () => {
  const [viewedOnboarding, setViewedOnboarding] = useState<boolean | null>(
    null
  );

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem("@viewedOnboarding");

      if (value !== null) {
        setViewedOnboarding(true);
      } else {
        setViewedOnboarding(false);
      }
    } catch (err) {
      console.log("Error @checkOnboarding: ", err);
    }
  };

  useEffect(() => {
    checkOnboarding();
  }, []);

  return (
    viewedOnboarding !== null && (
      <NavigationContainer>
        <StatusBar />
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          {!viewedOnboarding && (
            <RootStack.Screen
              name={RootScreens.ONBOARDING}
              component={OnboardingContainer}
            />
          )}
          <RootStack.Screen
            name={RootScreens.WELCOME}
            component={WelcomeContainer}
          />
          <RootStack.Screen
            name={RootScreens.MAIN}
            component={MainNavigator}
            options={{}}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    )
  );
};

export { ApplicationNavigator };
