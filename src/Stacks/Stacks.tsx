import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import { ChatListScreen } from "@/screens/App/ChatList";
import { ChatDetailScreen } from "@/screens/App/ChatDetail";
import { AddFriendsScreen } from "@/screens/App/AddFriends";
import { ProfileScreen } from "@/screens/App/Profile";
import { LoginScreen } from "@/screens/Auth/Login";
import { RegisterScreen } from "@/screens/Auth/Register";
import { createStackNavigator } from "@react-navigation/stack";



export type ChatStackParamList = {
  ChatList: undefined;
  ChatDetail: {chatId: string};
  AddFriends: undefined;
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator<ChatStackParamList>();

  export const AppStack = () => {
    return(
      <Tab.Navigator screenOptions={{
        headerShown: false
      }}>
        <Tab.Screen name='ChatStack' component={ChatStack}/>
        <Tab.Screen name='Profile' component={ProfileScreen}/>
      </Tab.Navigator>
    )
  }

  export const ChatStack = () => {
    return(
      <Stack.Navigator initialRouteName="ChatList" screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="ChatList" component={ChatListScreen}/>
        <Stack.Screen name="ChatDetail" component={ChatDetailScreen}/>
        <Stack.Screen name="AddFriends" component={AddFriendsScreen}/>
      </Stack.Navigator>
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