import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Stack } from "expo-router";
import "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="CourseDetail" />
      </Stack>
    </Provider>
  );
}