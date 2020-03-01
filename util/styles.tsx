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
        marginTop: 50,
        marginBottom: 50,
        borderRadius: 100,
        shadowRadius: 1,
        shadowColor: "black",
        shadowOffset: { width: -2, height: 2 },
        shadowOpacity: 1
    },
    text: {
        fontSize: 25,
        color: "darkblue"
    }
})

export default styles;