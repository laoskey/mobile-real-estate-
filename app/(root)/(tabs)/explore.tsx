import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from "react-native";
import Reacct, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card } from "@/components/Card";
import NoResults from "@/components/NoResults";
import { router, useLocalSearchParams } from "expo-router";
import icons from "@/constants/icons";
import Search from "@/components/Search";
import Filters from "@/components/Filters";
import { fakeproperties } from "@/constants/data";
import Property from "../properties/[id]";

interface Property {
  image: string;
  rating: number;
  name: string;
  address: string;
  price: number;
  id: string;
}
function Explore() {
  const [showProperties, setShowProperties] = useState<Property[]>(
    []
  );
  const loading = false;

  const properties = fakeproperties;
  const handleCardPress = (id: string) => {
    router.push(`/(root)/properties/${id}`);
  };
  // TODO:waiting for backend integration
  // TODO:IMplement the filter and serach func

  const params = useLocalSearchParams<{
    query?: string;
    filter?: string;
  }>();

  const type = params.filter || "All";

  useEffect(() => {
    switch (type) {
      case "All":
        setShowProperties(
          properties.slice().sort((a, b) => a.price - b.price)
        );
        break;
      // TODO:Impl the other ccase
      case "House":
        break;
      case "Candos":
        break;
      case "Duplexes":
        break;
      case "Studios":
        break;
      case "Villas":
        break;
      case "Apartments":
        break;
      case "Townhomes":
        break;
      case "Others":
        break;

      default:
        setShowProperties(properties);
        break;
    }
  }, [params.filter]);

  return (
    <SafeAreaView className="h-full bg-white">
      <FlatList
        data={showProperties}
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
