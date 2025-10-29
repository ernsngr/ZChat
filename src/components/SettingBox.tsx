import React from 'react';

import { 
    View,
    Text,
    TouchableOpacity, 
} from 'react-native';

// Icons
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface SettingBoxProps {
    iconName: string;
    iconColor: string;
    title: string;
    onPress: () => void;
}

const SettingBox: React.FC<SettingBoxProps> = ({ iconName, iconColor, title, onPress }) => {


    return (
        <TouchableOpacity onPress={onPress} className='w-[90%] h-24 items-center justify-between flex-row p-8 rounded-3xl bg-slate-50 shadow-lg shadow-slate-300 mt-3 mb-3'>
            <View className={`w-14 h-14 rounded-full items-center justify-center`} style={{backgroundColor: iconColor}} >
                <MaterialIcons name={iconName as any} size={24} color="black" />
            </View>
            <View className='w-[70%] '>
               <Text className='text-xl font-medium font-[Inter]'>
                 {title}
               </Text>
            </View>
            <View>
                <MaterialIcons name="arrow-forward-ios" size={24} color="gray" />
            </View>
        </TouchableOpacity>
    );
}

export default SettingBox;