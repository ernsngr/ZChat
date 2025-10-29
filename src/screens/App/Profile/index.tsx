import SettingBox from "@/components/SettingBox";
import { 
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView
} from "react-native";
import { useAuthStore } from "@/store/authStore";

export const ProfileScreen = () => {

    const {logout} = useAuthStore();

    return(
        <ScrollView className="flex-1 bg-violet-200">
            <View className="w-full h-auto items-center justify-center mt-[80]">
                <Image
                    className="w-[150] h-[150] bg-slate-800 rounded-full "
                />
            </View>
            <View className="w-full h-20 items-center justify-center mt-4 ">
                <Text className="text-3xl font-bold">Eren Sungur</Text>
                <Text className="text-xl color-gray-600 ">@ernsngr</Text>
            </View>
            <View className="w-full h-20 items-center justify-center">
                <TouchableOpacity className="w-56 h-14 bg-purple-500 rounded-full items-center justify-center">
                    <Text className="color-white text-xl font-bold">
                        Profili Düzenle
                    </Text>
                </TouchableOpacity>
            </View>
            <View className="w-full flex-1 bg-white rounded-t-[40] mt-6 pb-3">
                <View className="w-full h-16 justify-center pl-8 pt-4 ">
                    <Text className="text-2xl font-bold">Ayarlar</Text>
                </View>
                <View className="w-full items-center ">
                    <SettingBox onPress={() => {}} iconColor="#FCDAB9" iconName="lock-outline" title="Hesap Ayarları" />
                    <SettingBox onPress={() => {}} iconColor="#B2DFDB" iconName="notifications" title="Bildirimler" />
                    <SettingBox onPress={() => {}} iconColor="#B3E5FC" iconName="palette" title="Görünüm" />
                    <SettingBox onPress={() => {}} iconColor="#F9A584" iconName="security" title="Gizlilik ve Güvenlik" />
                    <SettingBox onPress={() => {}} iconColor="#C9B7ED" iconName="question-mark" title="Yardım ve Destek" />
                    <SettingBox onPress={logout} iconColor="#FDE2E2" iconName="logout" title="Çıkış Yap" />
                </View>
            </View>
        </ScrollView>
    )
}