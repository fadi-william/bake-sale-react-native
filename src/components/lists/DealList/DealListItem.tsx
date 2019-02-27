import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

import { priceDisplay } from "../../../utils/utils";

interface IDealListItemProps {
  deal: any;
}

class DealListItem extends React.Component<IDealListItemProps> {
  render() {
    const deal = this.props.deal;
    return (
      <View style={styles.deal}>
        <Image
          source={{
            uri: deal.media[0]
          }}
          style={styles.image}
        />
        <View style={styles.info}>
          <Text style={styles.title}>{deal.title}</Text>
          <View style={styles.footer}>
            <Text style={styles.cause}>{deal.cause.name}</Text>
            <Text style={styles.price}>{priceDisplay(deal.price)}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deal: {
    marginHorizontal: 12,
    marginTop: 6,
    marginBottom: 6,
  },
  image: {
    width: "100%",
    height: 150
  },
  info: {
    padding: 10,
    backgroundColor: "#fff",
    borderColor: "#bbb",
    borderWidth: 1,
    borderTopWidth: 0
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5
  },
  footer: {
    flexDirection: "row"
  },
  cause: {
    flex: 2
  },
  price: {
    flex: 1,
    textAlign: "right"
  }
});

export default DealListItem;
