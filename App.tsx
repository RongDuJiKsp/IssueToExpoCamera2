import {StatusBar} from 'expo-status-bar';
import {Button, Text, View} from 'react-native';
import {Camera} from "expo-camera";

export default function App() {
    return (
        <View>
            <Camera barCodeScannerSettings={{barCodeTypes: ["qr"]}}
                    style={{height: "80%", width: "100%", marginTop: "10%"}}/>
            <Button title={"GET PERMISSIONS"} onPress={() => {
                Camera.requestCameraPermissionsAsync().then();
            }}/>
        </View>
    );
}

