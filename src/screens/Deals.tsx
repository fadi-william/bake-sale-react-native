import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { fetchInitialDeals } from "../service/dealService";
import DealList from "../components/lists/DealList/DealList";
import { NavigationScreenProps } from "react-navigation";

class Deals extends React.Component<NavigationScreenProps> {
  static navigationOptions = {
    title: "Deals"
  };

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

  onPress = () => {
    this.props.navigation.push("DealDetails");
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.deals.length > 0 ? (
          <DealList deals={this.state.deals} onPress={this.onPress} />
        ) : (
          <ActivityIndicator size="large" color="#0000ff" />
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

export default Deals;
