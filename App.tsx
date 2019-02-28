import { createStackNavigator, createAppContainer } from "react-navigation";

import Deals from "./src/screens/Deals";
import DealDetails from "./src/screens/DealDetails";

const AppNavigator = createStackNavigator(
  {
    Deals: {
      screen: Deals
    },
    DealDetails: {
      screen: DealDetails
    }
  },
  {
    initialRouteName: "Deals"
  }
);

export default createAppContainer(AppNavigator);
