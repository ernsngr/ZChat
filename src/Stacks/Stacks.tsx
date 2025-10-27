import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import { ChatScreen } from "@/screens/App/Chat";
import { ProfileScreen } from "@/screens/App/Profile";
import { LoginScreen } from "@/screens/Auth/Login";
import { RegisterScreen } from "@/screens/Auth/Register";

const Tab = createBottomTabNavigator();

  export const AppStack = () => {
    return(
      <Tab.Navigator screenOptions={{
        headerShown: false
      }}>
        <Tab.Screen name='Chat' component={ChatScreen}/>
        <Tab.Screen name='Profile' component={ProfileScreen}/>
      </Tab.Navigator>
    )
  }

  export const AuthStack = () => {
    return(
      <Tab.Navigator>
        <Tab.Screen name='Login' component={LoginScreen}/>
        <Tab.Screen name='Register' component={RegisterScreen}/>
      </Tab.Navigator>
    )
  }