import { View, Text, Image, TouchableOpacity } from "react-native";
import Reacct from "react";
import icons from "@/constants/icons";
import images from "@/constants/images";
interface FeaturedCardProps {
  item: {
    image: string;
    rating: number;
    name: string;
    address: string;
    price: number;
    id: string;
  };
  onPress?: () => void;
}
function FeaturedCard({ item, onPress }: FeaturedCardProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-col items-start w-60 h-80 relative"
    >
      <Image
        // source={{ uri: item.image }}
        source={images.avatar2}
        className="size-full rounded-2xl"
        // resizeMode="contain"
      />

      <Image
        source={images.cardGradient}
        className="size-full rounded-2xl absolute bottom-0"
      />

      <View className="flex flex-row items-center bg-white/90 px-3 py-1.5 rounded-full absolute top-5 right-5">
        <Image
          source={icons.star}
          className="size-3.5"
        />
        <Text className="text-xs font-rubik-bold text-primary-300 ml-1">
          {item.rating}
        </Text>
      </View>

      <View className="flex flex-col items-start absolute bottom-5 inset-x-5">
        <Text
          className="text-xl font-rubik-extrabold text-white"
          numberOfLines={1}
        >
          {item.name}
        </Text>
        <Text
          className="text-base font-rubik text-white"
          numberOfLines={1}
        >
          {item.address}
        </Text>

        <View className="flex flex-row items-center justify-between w-full">
          <Text className="text-xl font-rubik-extrabold text-white">
            ${item.price}
          </Text>
          <Image
            source={icons.heart}
            className="size-5"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default FeaturedCard;
