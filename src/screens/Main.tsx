import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { fetchInitialDeals } from "../service/dealService";
import DealList from "../components/lists/DealList/DealList";

class Main extends React.Component {
  state = {
    deals: []
  };

  componentDidMount() {
    fetchInitialDeals().then(r => {
      this.setState(prevState => ({
        deals: r.data
      }));
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.deals.length > 0 ? (
          <DealList deals={this.state.deals} />
        ) : (
          <Text style={styles.header}>Bakesale</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    fontSize: 40
  }
});

export default Main;
