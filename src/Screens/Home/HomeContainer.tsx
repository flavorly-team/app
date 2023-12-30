import { Home } from "./Home";
import { useLazyGetUserQuery } from "@/Services";
import { RootScreens } from "..";

export const HomeContainer = ({ navigation }) => {
  // const [userId, setUserId] = useState("5");

  // const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
  //   useLazyGetUserQuery();

  // useEffect(() => {
  //   fetchOne(userId);
  // }, [fetchOne, userId]);

  // return <Home data={data} isLoading={isLoading} />;
  const onNavigate = (screen: RootScreens) => {
    navigation.navigate(screen);
  };
  return <Home onNavigate={onNavigate} />;
};
