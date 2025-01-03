import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          // drawerActiveBackgroundColor: "#f0e1ff",
          // drawerActiveTintColor: "#3c0a6b",
          // // drawerStyle: { backgroundColor: "#ccc" },
          headerStyle: {
            backgroundColor: "#3c0a6b",
            headerTintColor: "white",
            tabBarActiveTintColor: "#3c0a6b",
          },
        }}
      >
        <BottomTab.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            // drawerLabel: "welcome screen",
            // drawerIcon: ({ color, size }) => (
            //   <Ionicons name="home" color={color} size={size} />
            // ),
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name="User"
          component={UserScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="user" color={color} size={size} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default App;
