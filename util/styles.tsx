import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10,
        padding: 10
    },
    button: {
        alignItems: "center",
        backgroundColor: "skyblue",
        padding: 50,
        width: "100%",
        marginTop: 50,
        marginBottom: 50,
        borderRadius: 100,
        shadowOpacity: 0.3,
        shadowRadius: 2,
        shadowOffset: { height: 1, width: 1 }
    },
    text: {
        fontSize: 25,
        color: "darkblue",
        textAlign: "center"
    },
    textbox: {
        paddingBottom: 50,
        height: "50%",
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
        backgroundColor: "skyblue",
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
