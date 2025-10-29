import SettingBox from "@/components/SettingBox";
import { 
    View,
    Text,
    Image,
    TouchableOpacity
} from "react-native";

export const ProfileScreen = () => {
    return(
        <View className="flex-1 items-center bg-violet-200">
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
            <View className="w-full h-[53%] bg-white rounded-t-[40] mt-6">
                <View className="w-full h-16 justify-center pl-8 pt-4 ">
                    <Text className="text-2xl font-bold">Ayarlar</Text>
                </View>
                <View className="w-full items-center justify-center ">
                    <SettingBox iconColor="bg-green-200" iconName="lock-outline" title="Hesap Ayarları" />
                    <SettingBox iconColor="bg-blue-200" iconName="notifications" title="Bildirimler" />
                    <SettingBox iconColor="bg-orange-200" iconName="palette" title="Görünüm" />
                </View>
            </View>
        </View>
    )
}