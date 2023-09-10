import { ActivityIndicator, StyleSheet } from "react-native";

function LoadingIndicatorView() {
    return (
        <ActivityIndicator
            color="#009b88"
            size="large"
            style={styles.ActivityIndicatorStyle}
        />
    );
}

export default LoadingIndicatorView;

const styles = StyleSheet.create({
    ActivityIndicatorStyle: {
        flex: 1
    }
})