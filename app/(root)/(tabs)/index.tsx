import { Card } from "@/components/Card";
import FeaturedCard from "@/components/FeaturedCard";
import Filters from "@/components/Filters";
import NoResults from "@/components/NoResults";
import Search from "@/components/Search";
import {
  fakeLastProperties,
  fakeproperties,
  fakeUser,
} from "@/constants/data";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { Link, useLocalSearchParams } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  // TODO:waiting for backend integration
  const user = fakeUser;
  const properties = fakeproperties;
  const latestProperties = fakeLastProperties;

  const loading = false;
  const latestPropertiesLoading = false;
  const handleCardPress = ({ id }: { id: string }) => {};

  const params = useLocalSearchParams<{
    query?: string;
    filter?: string;
  }>();

  console.log({ params });
  // TODO:IMplement the filter and serach func

  return (
    <SafeAreaView className="h-full bg-white">
      <FlatList
        data={properties}
        numColumns={2}
        renderItem={({ item }) => (
          <Card
            item={item}
            onPress={() => handleCardPress({ id: item.id })}
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
              <View className="flex flex-row">
                <Image
                  source={
                    user.avatar
                      ? { uri: user?.avatar }
                      : images.avatar2
                  }
                  className="size-12 rounded-full"
                />

                <View className="flex flex-col items-start ml-2 justify-center">
                  <Text className="text-xs font-rubik text-black-100">
                    Good Morning
                  </Text>
                  <Text className="text-base font-rubik-medium text-black-300">
                    {user?.name}
                  </Text>
                </View>
              </View>
              <Image
                source={icons.bell}
                className="size-6"
              />
            </View>

            <Search />

            <View className="my-5">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-xl font-rubik-bold text-black-300">
                  Featured
                </Text>
                <TouchableOpacity>
                  <Text className="text-base font-rubik-bold text-primary-300">
                    See all
                  </Text>
                </TouchableOpacity>
              </View>

              {latestPropertiesLoading ? (
                <ActivityIndicator
                  size="large"
                  className="text-primary-300"
                />
              ) : !latestProperties ||
                latestProperties.length === 0 ? (
                <NoResults />
              ) : (
                <FlatList
                  data={latestProperties}
                  renderItem={({ item }) => (
                    <FeaturedCard
                      item={item}
                      onPress={() => handleCardPress({ id: item.id })}
                    />
                  )}
                  keyExtractor={(item) => item.id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerClassName="flex gap-5 mt-5"
                />
              )}
            </View>

            {/* <Button title="seed" onPress={seed} /> */}

            <View className="mt-5">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-xl font-rubik-bold text-black-300">
                  Our Recommendation
                </Text>
                <TouchableOpacity>
                  <Text className="text-base font-rubik-bold text-primary-300">
                    See all
                  </Text>
                </TouchableOpacity>
              </View>

              <Filters />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
