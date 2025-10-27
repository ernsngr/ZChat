import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp } from "@react-navigation/native";
import {ChatStackParamList} from "../../../Stacks/Stacks"

type Props = { route: RouteProp<ChatStackParamList, "ChatDetail"> };


export const ChatDetailScreen = ({route}: Props) => {
    const {chatId} = route.params;
    return (
        <View className='flex-1 items-center justify-center '>
            <Text>
                Chat ID : {chatId}
            </Text>
        </View>
    );
}
