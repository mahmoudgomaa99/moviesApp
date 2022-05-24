import { ActivityIndicator, FlatList } from "react-native";
import React from "react";
import { TMovie } from "../../../redux/movies/model";
import ListItem from "../molecules/ListItem";

type TProps = {
  data: Array<TMovie>;
  setPage: Function;
};

const List = ({ data, setPage }: TProps) => {
  const renderItem = ({ item }: any) => <ListItem item={item} />;
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(_, index) => index.toString()}
      onEndReached={() => setPage((prev: any) => prev + 1)}
      ListFooterComponent={ <ActivityIndicator />}
    />
  );
};

export default List;
