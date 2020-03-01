import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'skyblue',
        padding: 50,
        width: "90%",
        margin: 15,
        borderRadius: 100,
        shadowRadius: 1,
        shadowColor: "black",
        shadowOffset: { width: -1, height: 2 },
        shadowOpacity: 0.5,

    },
    text: {
        fontSize: 25,
        color: "#030d59"
    }
});

export default styles;