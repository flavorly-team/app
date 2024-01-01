import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import {
  Box,
  VStack,
  ScrollView,
  Text,
  Skeleton,
  Center,
  HStack,
} from "native-base";
import { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";
import { Icon } from "@/Components/Icon";
import TabBar from "@/Components/TabBar";
import ContentBox from "@/Components/ContentBox";
import IngredientBox from "@/Components/IngredientBox";
import { LocalizationKey, i18n } from "@/Localization";
import { getRecipeInformation } from "@/Services";

type PinScreenScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.PIN
>;

const PinSkeleton = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Center w="100%">
        <VStack
          w="90%"
          maxW="400"
          borderWidth="1"
          space={6}
          rounded="md"
          alignItems="center"
          _dark={{
            borderColor: "coolGray.500",
          }}
          _light={{
            borderColor: "coolGray.200",
          }}
        >
          <Skeleton h="40" />
          <Skeleton
            borderWidth={1}
            borderColor="coolGray.200"
            endColor="warmGray.50"
            size="20"
            rounded="full"
            mt="-70"
          />
          <HStack space="2">
            <Skeleton size="5" rounded="full" />
            <Skeleton size="5" rounded="full" />
            <Skeleton size="5" rounded="full" />
            <Skeleton size="5" rounded="full" />
            <Skeleton size="5" rounded="full" />
          </HStack>
          <Skeleton.Text lines={3} alignItems="center" px="12" />
          <Skeleton mb="3" w="40" rounded="20" />
        </VStack>
      </Center>
    </SafeAreaView>
  );
};

const PinScreen = ({ route, navigation }: PinScreenScreenNavigatorProps) => {
  const tabs = [
    { label: i18n.t(LocalizationKey.TAB1) },
    { label: i18n.t(LocalizationKey.TAB2) },
    { label: i18n.t(LocalizationKey.TAB3) },
  ];
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0].label);
  const [data, setData] = useState(null);
  const renderContent = (label) => {
    switch (label) {
      case i18n.t(LocalizationKey.TAB1):
        return (
          <ContentBox data={data} showTools={true} showInstructions={false} />
        );
      case i18n.t(LocalizationKey.TAB2):
        return <IngredientBox data={data} />;
      case i18n.t(LocalizationKey.TAB3):
        return (
          <ContentBox data={data} showTools={false} showInstructions={true} />
        );
      default:
        return null;
    }
  };
  const goBack = () => {
    navigation.goBack();
  };
  const { id } = route.params;

  const handleTabChange = (label) => {
    setSelectedTab(label);
  };

  const fetchData = async (id) => {
    const result = await getRecipeInformation(id);
    setData(result);
  };

  useEffect(() => {
    fetchData(id);
  }, []);

  if (!data) {
    return <PinSkeleton />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box pl={4} pr={4}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: data.image }} />
          <TouchableOpacity style={styles.touchable} onPress={goBack}>
            <Icon name="chevron-back-outline" color="#94B49F" size={30} />
          </TouchableOpacity>
        </View>
      </Box>
      <View style={styles.content}>
        <ScrollView>
          <VStack flex={1}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{data.title}</Text>
              <Icon name="heart-outline" color="#ECB390" size={30} />
            </View>
            <View style={styles.subtitleContainer}>
              <Icon name="time-outline" size={16} color="#263238" />
              <Text fontFamily="Bold">{`${data.readyInMinutes} minutes`}</Text>
              <Icon name="person-outline" size={16} color="#263238" />
              <Text fontFamily="Bold">{`${data.servings} servings`}</Text>
            </View>
            <TabBar tabs={tabs} onTabChange={handleTabChange} />
            {renderContent(selectedTab)}
          </VStack>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    gap: 12,
    padding: 24,
  },

  imageContainer: {
    width: "100%",
    // marginTop: 35,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    borderRadius: 26,
    height: deviceHeight / 3,
  },
  titleContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  title: {
    fontSize: 30,
    color: "#263238",
    fontWeight: "700",
    fontFamily: "Bold",
    lineHeight: 35,
    width: "90%",
  },
  subtitleContainer: {
    flex: 2,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 12,
    marginBottom: 24,
  },
  touchable: {
    position: "absolute",
    backgroundColor: "white",
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    left: 14,
    top: 20,
    padding: 2,
  },
});

export default PinScreen;
