import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  PanResponder,
  Animated,
  Dimensions,
  Linking
} from "react-native";
import { priceDisplay } from "../../../utils/utils";

interface IStateProps {
  imageIndex: number;
}

interface IDealProps {
  deal: any;
}

class Deal extends React.Component<IDealProps, IStateProps> {
  state = {
    imageIndex: 0
  };

  width = Dimensions.get("window").width;

  imageXPos = new Animated.Value(0);

  imagePanResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gs) => {
      this.imageXPos.setValue(gs.dx);
    },
    onPanResponderRelease: (evt, gs) => {
      if (Math.abs(gs.dx) > this.width * 0.4) {
        const direction = Math.sign(gs.dx);
        Animated.timing(this.imageXPos, {
          toValue: direction * this.width,
          duration: 250
        }).start(() => {
          this.handleSwipe(-1 * direction);
        });
      } else {
        Animated.spring(this.imageXPos, {
          toValue: 0
        }).start();
      }
    }
  });

  handleSwipe = indexDirection => {
    if (!this.props.deal.media[this.state.imageIndex + indexDirection]) {
      Animated.spring(this.imageXPos, {
        toValue: 0
      }).start();
      return;
    }
    this.setState(
      prevState => ({
        imageIndex: prevState.imageIndex + indexDirection
      }),
      () => {
        // Next image animation.
        this.imageXPos.setValue(this.width * indexDirection);
        Animated.spring(this.imageXPos, {
          toValue: 0
        }).start();
      }
    );
  };

  render() {
    const deal = this.props.deal;
    return (
      <ScrollView style={styles.deal}>
        <Animated.Image
          {...this.imagePanResponder.panHandlers}
          source={{
            uri: deal.media[this.state.imageIndex]
          }}
          style={[
            {
              left: this.imageXPos
            },
            styles.image
          ]}
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
        <View>
          <Button
            title="Buy this deal"
            onPress={() => {
              Linking.openURL(this.props.deal.url);
            }}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  deal: {},
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
