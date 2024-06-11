import { useState } from "react";
import { Image, TouchableOpacity, StyleSheet, ImageSourcePropType } from "react-native";

interface IIconProps {
    icon: ImageSourcePropType,
    selected: boolean,
    onPress: () => void,
}

const buttonWidth = 80;
const buttonHeight = 80;

export function IconButton({ onPress, selected, icon}: IIconProps) {
    const [isSelected, setIsSelected] = useState(selected);

    return (
        <TouchableOpacity onPressOut={() => {
            if(!isSelected) {
                onPress()
            }
            setIsSelected(!isSelected)
        }}>
            <Image source={icon} style={isSelected ? styles.trashcanSelected : styles.trashcan}/>
        </TouchableOpacity>
    );
} 

const styles = StyleSheet.create({
    trashcan: {
        width: buttonWidth,
        height: buttonHeight,
        margin: 20,
    },

    trashcanSelected: {
        width: buttonWidth,
        height: buttonHeight,
        margin: 20,
        borderColor: 'yellow',
        borderWidth: 5,
    } 
})