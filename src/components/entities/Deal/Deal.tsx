import React from "react";
import { Text, View } from "react-native";

interface IDealProps {
  id: string;
}

class Deal extends React.Component<IDealProps> {
  render() {
    return (
      <View>
        <Text>Hello</Text>
      </View>
    );
  }
}

export default Deal;
