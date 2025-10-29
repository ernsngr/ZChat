import React, { useState } from 'react';
import { TextInput, View, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

interface AuthTextInputProps {
    isPassword: boolean;
    label: string;
    placeholder: string;
    value: string;
    setValue: (text: string) => void;
}

const AuthTextInput: React.FC<AuthTextInputProps> = ({
    isPassword = false,
    label,
    placeholder,
    value,
    setValue
}) => {

    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(true);

    const handleVisiblePassword = () => {
        setIsPasswordVisible(!isPasswordVisible);
    }

    const securityTextController = () => {
        if(isPassword){
            if(isPasswordVisible){
                return true
            }
            else{
                return false
            }
        }
    }

    return (
       <View className='w-full h-26 items-center justify-center mt-1 mb-1 '>
        <View className='w-[85%] h-8 items-start justify-center mb-3 '>
            <Text className='text-xl font-medium'> {label} </Text>
        </View>
         <View className='w-full items-center justify-center flex-row'>
            <TextInput 
                className={isPassword ? 'w-[75%] h-16 rounded-l-2xl text-lg pl-8 bg-slate-100 border-l-2 border-t-2 border-b-2 border-gray-300 items-center justify-center' : 'w-[90%] h-16 bg-slate-100 border-2 border-gray-300 rounded-2xl text-lg pl-8 items-center justify-center'}
                placeholder={placeholder}
                secureTextEntry={securityTextController()}
                value={value}
                onChangeText={setValue}
                maxLength={40}
                />
            <View className={isPassword ? "w-[15%] h-16 items-center justify-center rounded-r-2xl bg-slate-100 border-r-2 border-t-2 border-b-2 border-gray-300 " : "hidden"}>
                <TouchableOpacity onPress={handleVisiblePassword}>
                    <AntDesign name={isPasswordVisible ? "eye" : "eye-invisible"} size={24} color="gray" />
                </TouchableOpacity>
            </View>
         </View>
       </View>
    );
}

export default AuthTextInput;