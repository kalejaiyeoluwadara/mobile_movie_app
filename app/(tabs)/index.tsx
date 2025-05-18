import { Link } from "expo-router";
import { Text, View } from "react-native";
export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl font-bold">Hello</Text>
      <Link href="/onboarding">Onboarding</Link>
      <Link href={{ pathname: "/movie/[id]", params: { id: "avengers" } }}>
        Movie/Avengers
      </Link>
    </View>
  );
}
