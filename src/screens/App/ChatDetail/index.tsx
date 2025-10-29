import React from'react';
import { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { 
    View, 
    Text, 
    Image, 
    TouchableOpacity, 
    TextInput, 
    KeyboardAvoidingView, 
    TouchableWithoutFeedback, 
    Platform,
    Keyboard,
    FlatList
} from 'react-native';

import { RouteProp } from "@react-navigation/native";
import { ChatStackParamList } from "../../../Stacks/Stacks"
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Icons
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

type Props = { route: RouteProp<ChatStackParamList, "ChatDetail"> };
type ChatListScreenNavigationProp = NativeStackNavigationProp<ChatStackParamList, "ChatList">


export const ChatDetailScreen = ({route}: Props) => {

    const navigation = useNavigation<ChatListScreenNavigationProp>();
    const {chatId} = route.params;

    useFocusEffect(
        useCallback(() => {
            navigation.getParent()?.setOptions({
            tabBarStyle: {display: "none"},
        });

        return () => {
            navigation.getParent()?.setOptions({
                tabBarStyle: {display: "flex"},
            });
        };
        }, [navigation])
    )

    return (
            
            <KeyboardAvoidingView 
                className='flex-1 bg-white items-center pt-16 mb-12'
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
                >
                   
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} className='flex-1' >
                   <View className='w-full h-full'>
                     <View className=' w-full h-20 flex-row items-center'>
                        <TouchableOpacity onPress={() => navigation.goBack()} className='ml-4 mr-4'>
                            <Feather name="arrow-left" size={30} color="black" />
                        </TouchableOpacity>
                        <View className='w-[45%] h-[90%] flex-row items-center justify-evenly'>
                            <View className='w-[55] h-[55] rounded-full bg-slate-600 mr-5'>
                                <Image/>
                            </View>
                            <View className='w-[80%] h-[70%] justify-evenly'>
                                <Text className='text-2xl font-bold font-[Inter]'>{chatId}'s User</Text>
                                <Text className='text-md color-green-600 font-[Inter]'>Online</Text>
                            </View>
                        </View>
                        <TouchableOpacity className=' absolute right-8'>
                            <Entypo name="dots-three-vertical" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={[
                        { id: "1", text: "Merhaba!" },
                        { id: "2", text: "Nasılsın?" },
                        { id: "3", text: "Bugün ne yapıyorsun?" },
                        ]}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                        <View className="p-3 mt-3 mb-3 ml-5 bg-blue-300 rounded-3xl self-start">
                            <Text className="text-lg font-medium font-[Inter]">{item.text}</Text>
                        </View>

                        )}
                        contentContainerStyle={{ paddingVertical: 10 }}
                    />
                    <View className='w-full h-20 flex-row items-center '>
                        <View className='w-[12%] h-16 items-center justify-center'>
                            <AntDesign name="plus-circle" size={30} color="black" />
                        </View>
                        <View className='w-[75%] h-full  items-center justify-center '>
                            <TextInput
                                className='w-[95%] h-[70%] bg-slate-300 rounded-full pl-7 text-md '
                                placeholder=''
                            />
                        </View>
                        <View className='w-12 h-16 items-center justify-center '>
                            <Ionicons name="send" size={24} color="black" />
                        </View>
                    </View>
                   </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
    );
}
