import {StatusBar} from 'expo-status-bar';
import {Button, Text, View} from 'react-native';
import {Camera} from "expo-camera";

export default function App() {
    return (
        <View>
            <StatusBar style="auto"/>
            <Text>Open up App.tsx to start working on your app!</Text>
            <Camera useCamera2Api={true} barCodeScannerSettings={{barCodeTypes: ["qr"]}}
                    style={{height: "80%", width: "100%", marginTop: "10%"}}/>
            <Button title={"GET PERMIS"} onPress={() => {
                Camera.requestCameraPermissionsAsync().then();
            }}/>
        </View>
    );
}

