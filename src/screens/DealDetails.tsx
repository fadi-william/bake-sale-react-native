import React from "react";
import Deal from "../components/entities/Deal/Deal";
import { NavigationScreenProps } from "react-navigation";

class DealDetails extends React.Component<NavigationScreenProps> {
  static navigationOptions = {
    title: "Deal Details"
  };

  render() {
    return <Deal id={"4"} />;
  }
}

export default DealDetails;
