import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import {
  fetchInitialDeals,
  fetchDealsWithSearch
} from "../service/dealService";
import DealList from "../components/lists/DealList/DealList";
import { NavigationScreenProps } from "react-navigation";
import SearchBar from "../components/lists/DealList/SearchBar";

class Deals extends React.Component<NavigationScreenProps> {
  static navigationOptions = {
    title: "Deals"
  };

  state = {
    deals: [],
    isLoading: true,
    isSearching: false
  };

  componentDidMount() {
    fetchInitialDeals()
      .then(r => {
        this.setState(prevState => ({
          deals: r.data,
          isLoading: false
        }));
      })
      .catch(() => {
        // There's a problem with the network.
        // Use a utility function to present a Toast.
      });
  }

  searchDeals = (searchTerm: string) => {
    this.setState({
      deals: [],
      isSearching: true
    });

    fetchDealsWithSearch(searchTerm).then(r => {
      this.setState({
        deals: r.data,
        isSearching: false
      });
    });
  };

  onPress = (dealId: string) => {
    this.props.navigation.push("DealDetails", {
      dealId
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {!this.state.isLoading ? (
          <View style={styles.dealsContainer}>
            <SearchBar onSearch={this.searchDeals} />
            {this.state.isSearching ? (
              <View style={styles.activityIndicatorContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
              </View>
            ) : (
              <DealList deals={this.state.deals} onPress={this.onPress} />
            )}
          </View>
        ) : (
          <View style={styles.activityIndicatorContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  dealsContainer: {
    flex: 1
  },
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    fontSize: 40
  }
});

export default Deals;
