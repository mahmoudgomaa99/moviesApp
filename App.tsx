import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import Home from "./src/app/screens/Home";
import { store } from "./src/redux";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <Home />
    </Provider>
  );
}
