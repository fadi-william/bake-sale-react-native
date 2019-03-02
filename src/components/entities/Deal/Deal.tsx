import React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { priceDisplay } from "../../../utils/utils";

interface IDealProps {
  deal: any;
}

class Deal extends React.Component<IDealProps> {
  render() {
    const deal = this.props.deal;
    return (
      <ScrollView style={styles.deal}>
        <Image
          source={{
            uri: deal.media[0]
          }}
          style={styles.image}
        />
        <View style={styles.detail}>
          <View>
            <Text style={styles.title}>{deal.title}</Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.info}>
              <Text style={styles.price}>{priceDisplay(deal.price)}</Text>
              <Text style={styles.cause}>{deal.cause.name}</Text>
            </View>
            <View style={styles.user}>
              <Image source={{ uri: deal.user.avatar }} style={styles.avatar} />
              <Text style={styles.name}>{deal.user.name}</Text>
            </View>
          </View>
          <View style={styles.description}>
            <Text>{deal.description}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  deal: {
    marginBottom: 6
  },
  image: {
    width: "100%",
    height: 150
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 10,
    marginBottom: 5,
    backgroundColor: "rgba(237, 149, 45, 0.4)"
  },
  detail: {},
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 15
  },
  info: {
    padding: 10,
    alignItems: "center"
  },
  price: {
    fontWeight: "bold"
  },
  cause: {
    marginTop: 10
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 30
  },
  user: {
    alignItems: "center"
  },
  name: {
    marginTop: 10
  },
  description: {
    borderColor: "#ddd",
    margin: 10,
    padding: 10
  }
});

export default Deal;
