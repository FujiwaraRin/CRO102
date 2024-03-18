import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  Platform,
  Animated,
  ScrollView,
  Image,
} from "react-native";

const HEADER_MIN_HEIGHT = 50;
const HEADER_MAX_HEIGHT = 200;

export default class App extends Component {
  constructor() {
    super();

    this.scrollYAnimatedValue = new Animated.Value(0);

    this.array = [];
  }

  componentWillMount() {
    for (var i = 1; i <= 15; i++) {
      this.array.push(i);
    }
  }

  render() {
    const headerHeight = this.scrollYAnimatedValue.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: "clamp",
    });

    const headerBackgroundColor = this.scrollYAnimatedValue.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: ["pink", "pink"],
      extrapolate: "clamp",
    });

    // Animation for image size
    const imageSize = this.scrollYAnimatedValue.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [50, 30], // Initial width: 50, Final width: 30
      extrapolate: "clamp",
    });

    // Animation for text opacity
    const textOpacity = this.scrollYAnimatedValue.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [1, 0], // Initial opacity: 1, Final opacity: 0
      extrapolate: "clamp",
    });

    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT }}
          scrollEventThrottle={16}
          onScroll={Animated.event([
            {
              nativeEvent: { contentOffset: { y: this.scrollYAnimatedValue } },
            },
          ])}
        >
          <Text
            style={{
              marginVertical: 30,
              marginHorizontal: 20,
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            Popular Quizes
          </Text>
          {/* product */}
          {this.array.map((item, key) => (
            <View key={key} style={styles.item}>
              <View style={styles.itemContent}>
                <Text>Product Design</Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 10,
                    width: 50,
                    backgroundColor: "pink",
                    marginLeft: 170,
                    justifyContent: "center",
                    borderRadius: 10,
                  }}
                >
                  <Image
                    style={{ width: 20, height: 20, borderRadius: 10 }}
                    source={{
                      uri: "https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-6/426581351_1787195808446901_1347344270198392526_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG8faW9aLW4WCvx7DkjXN7xTavuqoLLMoRNq-6qgssyhITRJFD1E6ugMNkCFRc5hvPUtm43OUPswgcXcSJOrz-q&_nc_ohc=1auuhjxKuP0AX_zwq9P&_nc_ht=scontent.fsgn2-10.fna&oh=00_AfCEp9nSKuIYWiLTv-1gKlgIWN7IcXXnAt8qroGgJ-1D2w&oe=65FD8DAC",
                    }}
                  />
                  <Text style={{ padding: 5 }}>10</Text>
                </View>
              </View>
              <Text style={styles.itemText}>Design System</Text>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={{ width: 40, height: 40, borderRadius: 30 }}
                  source={{
                    uri: "https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-6/426581351_1787195808446901_1347344270198392526_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG8faW9aLW4WCvx7DkjXN7xTavuqoLLMoRNq-6qgssyhITRJFD1E6ugMNkCFRc5hvPUtm43OUPswgcXcSJOrz-q&_nc_ohc=1auuhjxKuP0AX_zwq9P&_nc_ht=scontent.fsgn2-10.fna&oh=00_AfCEp9nSKuIYWiLTv-1gKlgIWN7IcXXnAt8qroGgJ-1D2w&oe=65FD8DAC",
                  }}
                />
                <Text style={{ padding: 5, fontWeight: "bold" }}>
                  Duy An
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>

        <Animated.View
          style={[
            styles.animatedHeaderContainer,
            { height: headerHeight, backgroundColor: headerBackgroundColor },
          ]}
        >
          <Animated.Image
            style={{ width: imageSize, height: imageSize }}
            source={{
              uri: "https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-6/426581351_1787195808446901_1347344270198392526_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG8faW9aLW4WCvx7DkjXN7xTavuqoLLMoRNq-6qgssyhITRJFD1E6ugMNkCFRc5hvPUtm43OUPswgcXcSJOrz-q&_nc_ohc=1auuhjxKuP0AX_zwq9P&_nc_ht=scontent.fsgn2-10.fna&oh=00_AfCEp9nSKuIYWiLTv-1gKlgIWN7IcXXnAt8qroGgJ-1D2w&oe=65FD8DAC",
            }}
          />
          <Animated.Text style={[styles.headerText, { opacity: textOpacity }]}>
            Mornin' Mark
          </Animated.Text>
          <Animated.Text style={[styles.headerText, { opacity: textOpacity }]}>
            Ready for a quiz?
          </Animated.Text>
          {/* Phần horizontal scroll */}
          <View style={styles.hospitalContainer}>
            {/* Nội dung horizontal scroll */}
            <ScrollView horizontal>
              <View style={styles.hospitalItem}>
                <Text>Product Design</Text>
              </View>
              <View style={styles.hospitalItem}>
                <Text>Product Design</Text>
              </View>
              <View style={styles.hospitalItem}>
                <Text>Product Design</Text>
              </View>
              <View style={styles.hospitalItem}>
                <Text>Product Design</Text>
              </View>
              <View style={styles.hospitalItem}>
                <Text>Product Design</Text>
              </View>
              <View style={styles.hospitalItem}>
                <Text>Product Design</Text>
              </View>
              <View style={styles.hospitalItem}>
                <Text>Product Design</Text>
              </View>
              
              {/* Thêm các mục khác nếu cần */}
            </ScrollView>
          </View>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  animatedHeaderContainer: {
    position: "absolute",
    top: Platform.OS == "ios" ? 20 : 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 22,
  },
  item: {
    backgroundColor: "#ff9e80",
    margin: 8,
    height: 130,
    paddingLeft: 20,
    borderRadius: 20,
    paddingTop: 3
  },
  itemText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10
  },
  hospitalContainer: {
    backgroundColor: "pink",
    padding: 10,
    height: 60,
  },
  hospitalItem: {
    backgroundColor: "#fff",
    padding: 8,
    marginRight: 8,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
  },
  itemContent: {
    flexDirection: "row",
    alignItems: "center",
  },
});