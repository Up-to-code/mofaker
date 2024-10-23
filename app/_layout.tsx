import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Tabs } from "expo-router";
import * as Font from "expo-font"; // Import expo-font
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function RootLayout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        "Cairo-Medium": require("@/assets/fonts/Cairo-Medium.ttf"), // Update the path to your font file
         "Cairo-SemiBold": require("@/assets/fonts/Cairo-SemiBold.ttf"), // Update the path to your font file
        "Cairo-Bold": require("@/assets/fonts/Cairo-Bold.ttf"), // Update the path to your font file
      });
      setFontsLoaded(true);
    };
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // or a loading indicator
  }

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#e0e0e0",
          elevation: 10,
        },
        headerStyle: {
          backgroundColor: "#fff",
        },
        headerTintColor: "#333",
        headerRight: () => (
          <Image
            source={require("@/assets/images/icons/Search.png")}
            style={styles.icon}
            resizeMode="contain"
            accessibilityLabel="Search"
          />
        ),
        headerLeft: () => (
          <Image
            source={require("@/assets/images/icons/user.png")}
            style={styles.icon}
            resizeMode="contain"
            accessibilityLabel="User Profile"
          />
        ),
        headerTitle: () => (
          <Image
            source={require("@/assets/images/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        ),
        headerTitleAlign: "center",
      }}
    >
      <Tabs.Screen
        name="notifications"
        options={{
          headerTitle: "Notifications",
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <MaterialCommunityIcons
              name={focused ? "bell" : "bell-outline"}
              size={30}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
           tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <MaterialCommunityIcons
              name={focused ? "home-variant" : "home-variant-outline"}
              size={30}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 15,
  },
  logo: {
    width: 100,
    height: 30,
  },
  headerTitle: {
    fontFamily: "Cairo-Bold", // Apply the Cairo-Bold font here
    fontSize: 20, // Adjust the font size as needed
    color: "#333", // Text color for header title
  },
});
