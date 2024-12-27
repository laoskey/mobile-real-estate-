import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from "react-native";
import Reacct from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card } from "@/components/Card";
import NoResults from "@/components/NoResults";
import { router, useLocalSearchParams } from "expo-router";
import icons from "@/constants/icons";
import Search from "@/components/Search";
import Filters from "@/components/Filters";
import { fakeproperties } from "@/constants/data";

interface Explore {}
function Explore() {
  const loading = false;

  const properties = fakeproperties;
  const handleCardPress = (id: string) => {
    router.push(`/(root)/properties/${id}`);
  };
  // TODO:waiting for backend integration
  // TODO:IMplement the filter and serach func

  let showProperties = [];
  const params = useLocalSearchParams<{
    query?: string;
    filter?: string;
  }>();

  return (
    <SafeAreaView className="h-full bg-white">
      <FlatList
        data={properties}
        numColumns={2}
        renderItem={({ item }) => (
          <Card
            item={item}
            onPress={() => handleCardPress(item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-5"
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          loading ? (
            <ActivityIndicator
              size="large"
              className="text-primary-300 mt-5"
            />
          ) : (
            <NoResults />
          )
        }
        ListHeaderComponent={() => (
          <View className="px-5">
            <View className="flex flex-row items-center justify-between mt-5">
              <TouchableOpacity
                onPress={() => router.back()}
                className="flex flex-row bg-primary-200 rounded-full size-11 items-center justify-center"
              >
                <Image
                  source={icons.backArrow}
                  className="size-5"
                />
              </TouchableOpacity>

              <Text className="text-base mr-2 text-center font-rubik-medium text-black-300">
                Search for Your Ideal Home
              </Text>
              <Image
                source={icons.bell}
                className="w-6 h-6"
              />
            </View>

            <Search />

            <View className="mt-5">
              <Filters />

              <Text className="text-xl font-rubik-bold text-black-300 mt-5">
                Found {properties?.length} Properties
              </Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

export default Explore;
