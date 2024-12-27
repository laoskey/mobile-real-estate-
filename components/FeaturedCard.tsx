import { View, Text } from "react-native";
import Reacct from "react";
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
    <View>
      <Text>FeaturedCard</Text>
    </View>
  );
}

export default FeaturedCard;
