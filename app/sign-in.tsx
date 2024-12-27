import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { router } from "expo-router";

function SignIn() {
  const handleLogin = () => {
    router.push("/");
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          resizeMode="contain"
          className="w-full h-3/5"
        />

        <View className="px-10 ">
          <Text className="text-base text-center uppercase font-rubic text-black-200">
            Welecome to Wanda
          </Text>
          <Text className=" capitalize text-3xl font-rubicExtraBlod text-black-300 text-center mt-2">
            Let's Get you closer to {"\n"}
            <Text className="text-primary-300">you home</Text>
          </Text>
          {/* TODO:GOOGLE OAuth */}
          <Text className="text-lg font-rubic text-black-200 text-center mt-12">
            Login to Wanda with Google
          </Text>
          <TouchableOpacity
            onPress={handleLogin}
            className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
          >
            <View className="flex flex-row items-center justify-center">
              <Image
                source={icons.google}
                className="w-5 h-5"
                resizeMode="contain"
              />
              <Text className="text-lg font-rubicMedium text-black-300 ml-2">
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SignIn;
