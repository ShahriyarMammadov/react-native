import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        title: "Shahriyar",
        headerStyle: {
          backgroundColor: "teal",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    />
  );
};

export default Layout;
