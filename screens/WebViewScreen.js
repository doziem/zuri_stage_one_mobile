import { StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import WebView from 'react-native-webview'

const WebViewScreen = () => {
    const webviewRef = useRef(null);
    function webViewgoback() {
        if (webviewRef.current) webviewRef.current.goBack();
    }

    function webViewNext() {
        if (webviewRef.current) webviewRef.current.goForward();
    }
    return (
        <View style={{ flex: 1 }}>
            <WebView
                source={{ uri: 'https://github.com/doziem/zuri_stage_one_mobile' }}
                style={{ marginTop: 20 }}
                startInLoadingState={true}
                ref={webviewRef}
            />
        </View>
    )
}

export default WebViewScreen

const styles = StyleSheet.create({})