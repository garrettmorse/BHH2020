import { StyleSheet } from "react-native";

const Colors = {
    highlight: '#666699',
    primary: '#6c63ff',
    selectedPrimary: 'darkblue'
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10,
        padding: 10
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: Colors.primary,
        padding: 40,
        width: "90%",
        marginVertical: 40,
        borderRadius: 100,
        shadowOpacity: 0.3,
        shadowRadius: 2,
        shadowOffset: { height: 1, width: 1 }
    },
    submitButton: {
        alignItems: "center",
        backgroundColor: Colors.primary,
        padding: 50,
        width: "100%",
        marginTop: 50,
        marginBottom: 50,
        borderRadius: 100,
        shadowOpacity: 0.3,
        shadowRadius: 2,
        shadowOffset: { height: 1, width: 1 }
    },
    buttonBlock: {
        height: "40%",
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: -25,
        marginBottom: -25
    },
    text: {
        fontSize: 25,
        color: "whitesmoke",
        textAlign: "center"
    },
    textbox: {
        paddingBottom: 50,
        height: "60%",
        width: "100%",
        borderColor: "darkgray",
        borderWidth: 1
    },
    slider: {
        width: "80%"
    },
    squareButton: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.primary,
        padding: 10,
        width: 115,
        height: 115,
        marginTop: 10,
        marginRight: 5,
        marginLeft: 5,
        marginBottom: 10,
        borderRadius: 20,
        shadowOpacity: 0.3,
        shadowRadius: 2,
        shadowOffset: { height: 1, width: 1 }
    },
    grid: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%"
    },
    questionContainer: {
        flex: 1,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: 10,
        marginBottom: 10

    }
});

export default styles;



export { Colors };
