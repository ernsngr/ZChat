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

type LoginScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, "Login">


export const LoginScreen = () => {


    const navigation = useNavigation<LoginScreenNavigationProp>();

    return(
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} className="w-full h-[90%]">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View className="flex-1 items-center justify-center">
                    <View className="w-24 h-24 bg-purple-200 rounded-full items-center justify-center">
                        <Ionicons name="chatbox-outline" size={36} color="purple" />
                    </View>
                    <View className="w-full h-32 items-center justify-evenly py-4 ">
                        <Text className="text-4xl font-bold font-[Inter]">Tekrar Hoş Geldin!</Text>
                        <Text className="text-xl color-slate-500"> Devam etmek için hesabına giriş yap. </Text>
                    </View>
                    <AuthTextInput label="E-posta" isPassword={false} placeholder="eposta@adresin.com" />
                    <AuthTextInput label="Şifre" isPassword={true} placeholder="şifre" />
                    <TouchableOpacity className="w-[90%] h-16 bg-indigo-400 rounded-full items-center justify-center mt-8 ">
                        <Text className="color-white text-2xl font-bold">
                            Giriş Yap
                        </Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
            <TouchableOpacity onPress={() => navigation.navigate("Register")} className="w-full h-8 items-center justify-center ">
                <Text className="text-md color-indigo-500 font-medium">
                    Hesabın yok mu?
                </Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}