import React from "react";
import { StyleProp, Text, TextStyle } from "react-native";

// CText component for displaying text with different font weights
export default function CText({
  children,
  variant,
  Cstyle,
}: {
  children: React.ReactNode;
  variant: "medium" | "semibold" | "bold"; // Restrict variant to specific strings
  Cstyle?: StyleProp<TextStyle>;
}) {
  let fontFamily: string | undefined;

  // Assign the font family based on the variant
  switch (variant) {
    case "medium":
      fontFamily = "Cairo-Medium";
      break;
    case "semibold":
      fontFamily = "Cairo-SemiBold";
      break;
    case "bold":
      fontFamily = "Cairo-Bold";
      break;
    default:
      fontFamily = "Cairo-Medium"; // Fallback to medium if no valid variant
  }

  return (
    <Text style={[{ fontFamily, fontSize: 16, color: "#333" }, Cstyle]}>
      {children}
    </Text>
  );
}

// Example Usage
// <CText variant="medium">This is Medium Text</CText>
// <CText variant="semibold">This is SemiBold Text</CText>
// <CText variant="bold">This is Bold Text</CText>
