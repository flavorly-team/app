import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  NavigationContainer,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { MainNavigator, RootTabParamList } from "./Main";
import { RootScreens } from "@/Screens";
import { OnboardingContainer } from "../Screens/Onboarding/OnboardingContainer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PinScreen from "@/Screens/Pin/PinScreen";
import { ResultContainer } from "@/Screens/Result";
import QuickView from "@/Screens/QuickView/QuickView";
import { DefaultSettingsContainer } from "../Screens/DefaultSettings";
import { FavoriteContainer } from "../Screens/Favorite";

// https://stackoverflow.com/questions/68779417/navigation-navigatehome-showing-some-error-in-typescript
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  [RootScreens.ONBOARDING]: undefined;
  [RootScreens.MAIN]: NavigatorScreenParams<RootTabParamList> | undefined;
  [RootScreens.PIN]: { id: string };
  [RootScreens.RESULT]: { items: string[] | undefined };
  [RootScreens.QUICKVIEW]: { items: string[] | undefined };
  [RootScreens.FAVORITE]: undefined;
  [RootScreens.DEFAULT_SETTINGS]: undefined;
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

  if (viewedOnboarding === null) return null;

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {
          <RootStack.Screen
            name={RootScreens.ONBOARDING}
            component={OnboardingContainer}
          />
        }
        <RootStack.Screen
          name={RootScreens.MAIN}
          component={MainNavigator}
          options={{ gestureEnabled: false }}
        />
        <RootStack.Screen
          name={RootScreens.PIN}
          component={PinScreen}
          options={{}}
        />
        <RootStack.Screen
          name={RootScreens.RESULT}
          component={ResultContainer}
          options={{}}
        />
        <RootStack.Screen
          name={RootScreens.QUICKVIEW}
          component={QuickView}
          options={{}}
        />
        <RootStack.Screen
          name={RootScreens.FAVORITE}
          component={FavoriteContainer}
        />
        <RootStack.Screen
          name={RootScreens.DEFAULT_SETTINGS}
          component={DefaultSettingsContainer}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export { ApplicationNavigator };
