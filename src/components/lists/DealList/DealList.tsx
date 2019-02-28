import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import DealListItem from "./DealListItem";

interface IDealListProps {
  deals: any[];
  onPress: () => void;
}

class DealList extends React.Component<IDealListProps> {
  render() {
    return (
      <View style={styles.list}>
        <FlatList
          data={this.props.deals}
          renderItem={({ item }) => (
            <DealListItem
              key={item.key}
              deal={item}
              onPress={this.props.onPress}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: "100%",
    backgroundColor: "#eee"
  }
});

export default DealList;
