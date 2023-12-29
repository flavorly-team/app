import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from "./Main";
import { WelcomeContainer } from "@/Screens/Welcome";
import { RootScreens } from "@/Screens";
import { OnboardingContainer } from "../Screens/Onboarding/OnboardingContainer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ResultContainer } from "@/Screens/Result";
import { FavoriteContainer } from "@/Screens/Favorite";
// import { StartContainer } from "@/Screens/Start";
// import { Onboarding1Container } from "@/Screens/Onboarding1";
// import { Onboarding2Container } from "@/Screens/Onboarding2";
// import { Onboarding3Container } from "@/Screens/Onboarding3";

export type RootStackParamList = {
  [RootScreens.ONBOARDING]: undefined;
  [RootScreens.MAIN]: undefined;
  [RootScreens.WELCOME]: undefined;
  [RootScreens.START]: undefined;
  [RootScreens.ONBOARDING1]: undefined;
  [RootScreens.ONBOARDING2]: undefined;
  [RootScreens.ONBOARDING3]: undefined;
  [RootScreens.RESULT]: undefined;
  [RootScreens.FAVORITE]: undefined;
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
    <NavigationContainer>
      {/* <StatusBar /> */}
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {!viewedOnboarding && (
          <RootStack.Screen
            name={RootScreens.ONBOARDING}
            component={OnboardingContainer}
          />
        )}
        {/* <RootStack.Screen name={RootScreens.START} component={StartContainer} />
        <RootStack.Screen
          name={RootScreens.ONBOARDING1}
          component={Onboarding1Container}
        />
        <RootStack.Screen
          name={RootScreens.ONBOARDING2}
          component={Onboarding2Container}
        />
        <RootStack.Screen
          name={RootScreens.ONBOARDING3}
          component={Onboarding3Container}
        /> */}
        {/* <RootStack.Screen
          name={RootScreens.WELCOME}
          component={WelcomeContainer}
        /> */}
        <RootStack.Screen
          name={RootScreens.MAIN}
          component={MainNavigator}
          options={{}}
        />
        <RootStack.Screen name={RootScreens.RESULT} component={ResultContainer}/>
        <RootStack.Screen name={RootScreens.FAVORITE} component={FavoriteContainer} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export { ApplicationNavigator };
