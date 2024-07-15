import { View } from "react-native";

const VSizedBox = ({height}) => {
    return (
      <View 
        style={{
              height: height,
              maxHeight: height,
              minHeight: height,
        }}
      />
    );
}

const HSizedBox = ({width}) => {
    return (
        <View 
        style={{
            width: width,
            maxWidth: width,
            minWidth: width,
        }}/>
    );
}

export { VSizedBox, HSizedBox };