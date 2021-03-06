import React from "react";
import {
  Text,
  Image,
  // Dimensions,
  TouchableOpacity,
  Platform,
  View
} from "react-native";
import { useDynamicStyleSheet } from "react-native-dark-mode";
import dynamicStyles from "./styles";
import PropTypes from "prop-types";

// const { width: screenWidth } = Dimensions.get("window");
// const width = screenWidth * 0.7;

function CarouselProductView(props) {
  const { item, onCardPress, appConfig } = props;
  const styles = useDynamicStyleSheet(dynamicStyles);

  return (
    <TouchableOpacity
      activeOpacity={Platform.OS === "android" ? 1 : 0.7}
      onPress={onCardPress}
    >
      <View style={styles.carouselProductViewContainer}>
        <Image
          style={[styles.carouselProductViewImage]}
          source={{ uri: item.photo }}
        />
      </View>
      <Text numberOfLines={2} style={[styles.carouselProductViewTitle]}>
        {item.name.toUpperCase()}
      </Text>
      <Text
        style={[styles.carouselProductViewPrice]}
      >{`${appConfig.currency}${item.price}`}</Text>
    </TouchableOpacity>
  );
}

CarouselProductView.propTypes = {
  animatedValue: PropTypes.object,
  item: PropTypes.object,
  navigation: PropTypes.object,
  index: PropTypes.number,
  onCardPress: PropTypes.func
};

export default CarouselProductView;
