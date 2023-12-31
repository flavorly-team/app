import { Home } from "./Home";
import { useLazyGetUserQuery } from "@/Services";
import { RootScreens } from "..";
import { useNavigation } from "@react-navigation/native";

export const HomeContainer = () => {
  // const [userId, setUserId] = useState("5");

  // const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
  //   useLazyGetUserQuery();

  // useEffect(() => {
  //   fetchOne(userId);
  // }, [fetchOne, userId]);

  // return <Home data={data} isLoading={isLoading} />;
  return <Home />;
};
