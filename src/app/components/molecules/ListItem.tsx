import {  Image, View } from "react-native";
import React from "react";
import { TMovie } from "../../../redux/movies/model";
import Constants from "expo-constants";
import TextView from "../atoms/TextView";
import { styles } from "./styles";

const poster_path_url = Constants.manifest?.extra?.POSTER_BASE_URL;

type TProps = {
  item: TMovie;
};

const ListItem = ({ item }: TProps) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{ uri: poster_path_url + item.poster_path }}
      />
      <View style={styles.contentContainer}>
        <TextView text={item.title} style={styles.titleText} />
        <TextView text={item.overview} style={styles.overviewText} />
      </View>
      <TextView text={item.release_date} style={styles.dateText} />
    </View>
  );
};

export default ListItem;

