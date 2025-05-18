import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
const Details = () => {
  const { id } = useLocalSearchParams();
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="font-bold">Movie Details {id}</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
