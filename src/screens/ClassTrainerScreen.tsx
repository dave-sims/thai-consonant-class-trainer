import React, { useState, useEffect, useRef } from 'react';
import {
    Animated,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { Colors } from '../constants';
import { ThaiAlphabet } from '../constants';

function ClassTrainerScreen(props: any) {

    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 150,
            useNativeDriver: true,
        }).start();
    };

    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 150,
            useNativeDriver: true,
        }).start();
    };

    const [gameStarted, setGameStarted] = useState(false);
    const [topBarText, setTopBarText] = useState("");
    const [guessEnabled, setGuessEnabled] = useState(true);
    const [topBarBackgroundColor, setTopBarBackgroundColor] = useState("rgb(255,255,255)");
    const [characterBackgroundColor, setCharacterBackgroundColor] = useState("rgb(255,255,255)");
    const [currentSymbol, setCurrentSymbol] = useState(Math.floor(Math.random() * ThaiAlphabet.length));

    let bgTimeOut: NodeJS.Timeout;

    const guessClass = (guess: string) => {
        clearTimeout(bgTimeOut);
        if (guess === ThaiAlphabet[currentSymbol].consonantClass) {
            setTopBarText("Correct!");
            setTopBarBackgroundColor(Colors.green);
            fadeIn();
            bgTimeOut = setTimeout(() => {
                fadeOut();
            }, 1000);
            newSymbol()
        } else {
            setTopBarText("Incorrect!");
            setTopBarBackgroundColor(Colors.red);
            fadeIn();
            bgTimeOut = setTimeout(() => {
                fadeOut();
            }, 1000);
            showCorrectAnswer();
        }

    }

    const showCorrectAnswer = () => {
        setGuessEnabled(false);
        switch (ThaiAlphabet[currentSymbol].consonantClass) {
            case "high":
                setCharacterBackgroundColor(Colors.red);
                break;

            case "mid":
                setCharacterBackgroundColor(Colors.orange);
                break;

            case "low":
                setCharacterBackgroundColor(Colors.green);
                break;
        }
        sleep(1000).then(() => {
            setCharacterBackgroundColor("rgb(255,255,255)");
            newSymbol();
            setGuessEnabled(true);
        });
    }

    const sleep = (ms: number) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    const newSymbol = () => {
        let newSim = currentSymbol;
        while (newSim === currentSymbol) {
            newSim = Math.floor(Math.random() * ThaiAlphabet.length)
        }
        setCurrentSymbol(newSim);
    }

    const renderGameScreen = () => {
        return (
            <View style={{ flex: 1, width: "100%", backgroundColor: Colors.white }}>
                <View style={styles.topBar}>

                </View>
                <Animated.View style={{ ...styles.topBar, opacity: fadeAnim, backgroundColor: topBarBackgroundColor, position: 'absolute' }}>
                    <Text>{topBarText}</Text>
                </Animated.View>
                <View style={{ ...styles.character, backgroundColor: characterBackgroundColor }}>
                    <Text style={styles.currentSymbol}>{ThaiAlphabet[currentSymbol].character}</Text>
                    <Text>{ThaiAlphabet[currentSymbol].nameThai}</Text>
                    <Text>{ThaiAlphabet[currentSymbol].nameRTGS}</Text>
                    <Text>{ThaiAlphabet[currentSymbol].meaning}</Text>
                </View>
                <View style={styles.controlContainer}>
                    <TouchableOpacity style={{ ...styles.control, backgroundColor: Colors.red }} onPress={() => guessClass('high')} disabled={!guessEnabled}>
                        <Text style={styles.controlLabel}>High</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ ...styles.control, backgroundColor: Colors.orange }} onPress={() => guessClass('mid')} disabled={!guessEnabled}>
                        <Text style={styles.controlLabel}>Mid</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ ...styles.control, backgroundColor: Colors.green }} onPress={() => guessClass('low')} disabled={!guessEnabled}>
                        <Text style={styles.controlLabel}>Low</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {renderGameScreen()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: Colors.white
    },
    controlContainer: {
        flex: 1
    },
    control: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        backgroundColor: Colors.white,
        borderRadius: 15,
    },
    controlLabel: {
        fontSize: 35,
        fontWeight: "bold",
        color: Colors.white
    },
    currentSymbol: {
        fontSize: 280,
    },
    character: {
        flex: 1.5,
        marginVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    },
    topBar: {
        height: 40,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    }
});

export default ClassTrainerScreen;
