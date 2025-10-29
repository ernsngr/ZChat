import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import { ChatListScreen } from "@/screens/App/ChatList";
import { ChatDetailScreen } from "@/screens/App/ChatDetail";
import { AddFriendsScreen } from "@/screens/App/AddFriends";
import { ProfileScreen } from "@/screens/App/Profile";
import { LoginScreen } from "@/screens/Auth/Login";
import { RegisterScreen } from "@/screens/Auth/Register";
import { createStackNavigator } from "@react-navigation/stack";

// Icons 
import Ionicons from '@expo/vector-icons/Ionicons';


export type ChatStackParamList = {
  ChatList: undefined;
  ChatDetail: {chatId: string};
  AddFriends: undefined;
}

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator<ChatStackParamList>();
const StackAuth = createStackNavigator();

  export const AppStack = () => {
    return(
      <Tab.Navigator screenOptions={{
        headerShown: false
      }}>
        <Tab.Screen options={{
          title: "Sohbetler",
          tabBarActiveTintColor: "#de882c",
          tabBarLabelStyle: { fontSize: 12, fontWeight: "600", fontFamily: "Inter" },
          tabBarIcon: ({focused}) => <Ionicons name={focused ? "chatbubbles" : "chatbubbles-outline"} size={24} color={focused ? "#de882c" : "#9c9c9c"} />
          }} name='ChatStack' component={ChatStack}/>
        <Tab.Screen options={{
          title: "Sohbetler",
          tabBarActiveTintColor: "#de882c",
          tabBarLabelStyle: { fontSize: 12, fontWeight: "600", fontFamily: "Inter" },
          tabBarIcon: ({focused}) => <Ionicons name={focused ? "person-circle" : "person-circle-outline"} size={24} color={focused ? "#de882c" : "#9c9c9c"} />
          }} name='Profile' component={ProfileScreen}/>
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
      <StackAuth.Navigator screenOptions={{headerShown: false}} initialRouteName="Login">
        <StackAuth.Screen name='Login' component={LoginScreen}/>
        <StackAuth.Screen name='Register' component={RegisterScreen}/>
      </StackAuth.Navigator>
    )
  }