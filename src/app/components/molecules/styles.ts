import { colors } from "../../values/colors";
import { dimentions } from "../../values/dimentions";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    margin: dimentions.xl,
    borderRadius: dimentions.l,
    elevation: dimentions.m,
    backgroundColor: colors.grey,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: dimentions.m,
  },
  contentContainer: {
    margin: dimentions.m,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    height: "95%",
  },
  image: {
    height: 160,
    width: 110,
    borderRadius: dimentions.xs,
  },
  titleText: {
    maxWidth: "85%",
    fontSize: dimentions.l,
    fontWeight: "700",
  },
  overviewText: {
    maxWidth: "85%",
    fontSize: dimentions.m,
    color: colors.darkGrey,
    marginTop: dimentions.xxs,
  },
  dateText: {
    position: "absolute",
    right: 5,
    bottom: 5,
    color: colors.darkGrey,
  },
});
