import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  View,
  Animated,
  StyleSheet,
  Dimensions,
  Button,
  TouchableOpacity,
} from "react-native";

const B1 = () => {
  const position = useRef(new Animated.ValueXY()).current;
  const windowHeight = Dimensions.get("window").height;
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    if (isMoving) {
      startAnimation();
    }
  }, [isMoving]);

  const startAnimation = () => {
    const randomY = Math.floor(Math.random() * windowHeight);

    Animated.timing(position, {
      toValue: { x: 0, y: randomY },
      duration: 3000,
      useNativeDriver: true,
    }).start(() => startAnimation());
  };

  const handleMovePress = () => {
    setIsMoving(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={handleMovePress}>
        <Text style={{fontSize: 20}}>Move</Text>
      </TouchableOpacity>
      <Animated.View
        style={[styles.box, { transform: position.getTranslateTransform() }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'pink'
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: "red",
  },
  btn: {
    backgroundColor: 'tomato',
    width: 70,
    alignItems: "center",
    marginBottom: 30
  }
});

export default B1;