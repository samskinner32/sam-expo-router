import { View, Text } from "react-native";
import React from "react";

import { Link } from "expo-router";

const Account = () => {
  return (
    <View>
      <Text>Account</Text>
      <Link href="/(account)/settings">Settings</Link>
      <Link href="/(account)/profile">Profile</Link>
      <Link href="/(account)/product">Product</Link>
    </View>
  );
};

export default Account;
