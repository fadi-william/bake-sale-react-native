import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import Deal from "../components/entities/Deal/Deal";
import { NavigationScreenProps } from "react-navigation";
import { fetchDealDetails } from "../service/dealService";

interface IDealDetailsState {
  deal: any;
  isLoading: boolean;
}

class DealDetails extends React.Component<
  NavigationScreenProps,
  IDealDetailsState
> {
  static navigationOptions = {
    title: "Deal Details"
  };

  state = {
    deal: {},
    isLoading: true
  };

  componentDidMount() {
    const dealId = this.props.navigation.getParam("dealId", 0);
    fetchDealDetails(dealId).then(r => {
      this.setState({
        deal: r.data,
        isLoading: false
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (
          <Deal deal={this.state.deal} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default DealDetails;
