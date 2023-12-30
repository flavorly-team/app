import React, { useEffect } from "react";
import * as Localization from "expo-localization";
import { i18n, Language } from "@/Localization";
import { NativeBaseProvider, extendTheme } from "native-base";
import { store, persistor } from "@/Store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ApplicationNavigator } from "./Navigation";
import {
  Raleway_400Regular,
  Raleway_700Bold,
  useFonts,
} from "@expo-google-fonts/raleway";

import { CormorantSC_400Regular } from "@expo-google-fonts/cormorant-sc";

import * as SplashScreen from "expo-splash-screen";

i18n.locale = Localization.locale;
i18n.enableFallback = true;
i18n.defaultLocale = Language.VIETNAMESE;

export default function App() {
  const theme = extendTheme({
    colors: {
      // Add new color
      brand_green: {
        500: "#94B49F",
      },
      brand_red: {
        500: "#DF7861",
      },
    },
  });

  const [fontsLoaded] = useFonts({
    Regular: Raleway_400Regular,
    Bold: Raleway_700Bold,
    CormorantSC_400Regular,
  });

  // useEffect(() => {
  //   async function prepare() {
  //     await SplashScreen.preventAutoHideAsync();
  //   }

  //   prepare();
  // }, []);

  if (!fontsLoaded) {
    return null;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <NativeBaseProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ApplicationNavigator />
        </PersistGate>
      </Provider>
    </NativeBaseProvider>
  );
}
