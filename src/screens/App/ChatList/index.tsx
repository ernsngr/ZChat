import { 
    View,
    Text,
    TouchableOpacity,
    TextInput,
} from "react-native";
import { useState } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { ChatBox } from "@/components/ChatBox";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ChatStackParamList } from "@/Stacks/Stacks";
import { useNavigation } from "@react-navigation/native";

type ChatListScreenNavigationProp = NativeStackNavigationProp<ChatStackParamList, "ChatList">

export const ChatListScreen = () => {

    const [search, setSearch] = useState<string>();
    const navigation = useNavigation<ChatListScreenNavigationProp>();


    return(
        <View className="w-full h-full items-center bg-white">
            <View className="w-full flex-row mt-20 justify-between items-center pl-5 pr-5"> 
                <Text className="text-4xl font-bold font-[Inter] ">
                    Sohbetler
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("AddFriends")} className="w-[50] h-[50] bg-orange-300 rounded-full items-center justify-center">
                    <AntDesign name="plus" size={24} color="" />
                </TouchableOpacity>
            </View>
            <View className="w-[100%] h-20 items-center justify-center mt-5 flex-row">
                <View className="w-[15%] h-[80%] bg-gray-300 rounded-l-full items-center justify-center ">
                    <FontAwesome5 name="search" size={24} color="gray" />
                </View>
                <TextInput
                    className="w-[80%] h-[80%] bg-gray-300 rounded-r-full text-xl pr-12"
                    placeholder="Sohbetlerde veya kişilerde ara..."
                    editable
                    value={search}
                    onChangeText={(txt) => setSearch(txt)}
                />
            </View>
            <ChatBox id="0" handle={(id: string) => navigation.navigate("ChatDetail", {chatId: id })} />
            <ChatBox id="1" handle={(id: string) => navigation.navigate("ChatDetail", {chatId: id })} />
            <ChatBox id="2" handle={(id: string) => navigation.navigate("ChatDetail", {chatId: id })} />
        </View>
    )
}