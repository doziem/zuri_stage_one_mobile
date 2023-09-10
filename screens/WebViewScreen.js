import { StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import WebView from 'react-native-webview'
import LoadingIndicatorView from '../components/LoadingIndicatorView';

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
                renderLoading={LoadingIndicatorView}
                startInLoadingState={true}
                ref={webviewRef}
            />
        </View>
    )
}

export default WebViewScreen

const styles = StyleSheet.create({})