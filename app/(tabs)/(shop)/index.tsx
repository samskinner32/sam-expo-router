import { View, Text } from "react-native";
import React from "react";

import { Link } from "expo-router";

const Shop = () => {
  return (
    <View>
      <Text>Shop</Text>
      <Link href="./category">Relative Category</Link>
      <Link href="/(shop)/category">Absolute Category</Link>
      {/* <Link href="/(shop)/product">Product</Link>
      <Link href="/(account)/settings">Account settings</Link>
      <Link href="/modal">Present modal</Link> */}
    </View>
  );
};

export default Shop;
