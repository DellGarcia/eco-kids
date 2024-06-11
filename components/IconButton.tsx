import { useState } from "react";
import { Image, TouchableOpacity, StyleSheet, ImageSourcePropType } from "react-native";

interface IIconProps {
    icon: ImageSourcePropType,
    selected: boolean,
    isHidden?: boolean,
    onPress: () => void,
}

const buttonWidth = 80;
const buttonHeight = 80;

export function IconButton({ onPress, selected, icon, isHidden = false}: IIconProps) {
    const [isSelected, setIsSelected] = useState(selected);

    return (
        <TouchableOpacity onPressOut={() => {
            onPress()
            
            setIsSelected(!isSelected)
        }}>
            <Image source={icon} style={isHidden ? styles.hidden : styles.trashcan} resizeMode="contain"/>
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
        // borderColor: 'green',
        // borderWidth: 5,
    },

    hidden: {
        display: 'none'
    }
})