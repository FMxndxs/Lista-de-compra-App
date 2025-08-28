import { TouchableOpacity, Text } from "react-native"

import { styles } from "./style"


type Props = {
    title: string;
    onPress: () => void;
}

export function Button(props: Props) { //ou { title }: Props
    return(
    <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={props.onPress}>
        <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
    )
}
