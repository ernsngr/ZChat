import { 
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Image
} from "react-native";

interface ChatBoxProps {
  id: string;
  handle: (id: string) => void;
}

export const ChatBox: React.FC<ChatBoxProps> = ({id, handle}) => {


    return(
        <TouchableOpacity onPress={() => handle(id)} className="w-full h-24  mt-1 mb-1 flex-row ">
          <View className="items-center justify-center p-2">
            <Image
                className="w-[70] h-[70] rounded-full bg-gray-700 "
                source={{}}
            />
          </View>
          <View className="w-[60%] h-[90%] items-start justify-evenly pt-1 pb-1 ">
            <Text className="text-xl font-bold ">Eren Sungur</Text>
            <Text className="text-md color-gray-500">Mesaj içeriği mesaj içeriği</Text>
          </View>
          <View className="w-[20%] h-full items-center justify-evenly pt-2 pb-2">
            <Text className="color-slate-500">15:42</Text>
            <View className="w-[25] h-[25] rounded-full bg-orange-500 items-center justify-center ">
                <Text className="color-white font-bold">2</Text>
            </View>
          </View>
        </TouchableOpacity>
    )
}