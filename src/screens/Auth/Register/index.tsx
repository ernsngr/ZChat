import { 
    View,
    Text,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Platform,
    Keyboard,
    TouchableOpacity
} from "react-native";
import AuthTextInput from "@/components/AuthTextInput";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// Icons
import Ionicons from '@expo/vector-icons/Ionicons';

import { AuthStackParamList } from "@/Stacks/Stacks";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

type LoginScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, "Login">

export const RegisterScreen = () => {

    const navigation = useNavigation<LoginScreenNavigationProp>();
    const [nameSurname, setNameSurname] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [passwordAgain, setPasswordAgain] = useState<string>("")

    return(
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} className="w-full h-[90%]">
            
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View className="flex-1 items-center justify-center">
                    <View className="w-56 h-14 rounded-full items-center justify-evenly flex-row">
                        <Ionicons name="chatbox-outline" size={40} color="#359eff" />
                        <Text className="text-3xl font-bold font-[Inter]">ZChat</Text>
                    </View>
                    <View className="w-full h-32 items-center justify-evenly py-1 ">
                        <Text className="text-4xl font-bold font-[Inter]">Hesabını Oluştur</Text>
                    </View>
                    <AuthTextInput 
                        label="Adın Soyadın" 
                        isPassword={false} 
                        placeholder="Adını ve soyadını gir" 
                        value={nameSurname}
                        setValue={setNameSurname}
                        />
                    <AuthTextInput 
                        label="E-posta" 
                        isPassword={false} 
                        placeholder="eposta@adresin.com" 
                        value={email}
                        setValue={setEmail}
                        />
                    <AuthTextInput 
                        label="Şifre" 
                        isPassword={true} 
                        placeholder="Şifreni oluştur" 
                        value={password}
                        setValue={setPassword}
                        />
                    <AuthTextInput 
                        label="Şifreni Onayla" 
                        isPassword={true} 
                        placeholder="Şifreni tekrar gir" 
                        value={passwordAgain}
                        setValue={setPasswordAgain}
                        />
                    <TouchableOpacity className="w-[90%] h-16 bg-indigo-400 rounded-full items-center justify-center mt-8 ">
                        <Text className="color-white text-2xl font-bold">
                            Giriş Yap
                        </Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
            <TouchableOpacity onPress={() => navigation.goBack()} className="w-full h-8 items-center justify-center ">
                <Text className="text-md color-indigo-500 font-medium">
                    Zaten hesabın var mı?
                </Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}