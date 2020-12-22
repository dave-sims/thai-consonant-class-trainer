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
            duration: 250,
            useNativeDriver: true,
        }).start();
    };

    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 250,
            useNativeDriver: true,
        }).start();
    };

    const [gameStarted, setGameStarted] = useState(false);
    const [topBarText, setTopBarText] = useState("");
    const [topBarBackgroundColor, setTopBarBackgroundColor] = useState("rgb(255,255,255)");
    const [currentSymbol, setCurrentSymbol] = useState(Math.floor(Math.random() * ThaiAlphabet.length));

    let bgTimeOut: NodeJS.Timeout;

    const guessClass = (guess: string) => {
        clearTimeout(bgTimeOut);
        if (guess === ThaiAlphabet[currentSymbol].consonantClass) {
            setTopBarText("Correct!");
            setTopBarBackgroundColor("rgb(0,255,0)");
            fadeIn();
            bgTimeOut = setTimeout(() => {
                fadeOut();
            }, 1000);
        } else {
            setTopBarText("Incorrect!");
            setTopBarBackgroundColor("rgb(255,0,0)");
            fadeIn();
            bgTimeOut = setTimeout(() => {
                fadeOut();
            }, 1000);

        }
        newSymbol()
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
            <View style={{ flex: 1, width: "100%" }}>
                <View style={styles.topBar}>
                    <Text>Top Bar</Text>
                </View>
                <Animated.View style={{ ...styles.topBar, opacity: fadeAnim, backgroundColor: topBarBackgroundColor, position: 'absolute' }}>
                    <Text>{topBarText}</Text>
                </Animated.View>
                <View style={styles.character}>
                    <Text style={styles.currentSymbol}>{ThaiAlphabet[currentSymbol].character}</Text>
                </View>
                <View style={styles.controlContainer}>
                    <TouchableOpacity style={styles.control} onPress={() => guessClass('high')}>
                        <Text>High</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.control} onPress={() => guessClass('mid')}>
                        <Text>Middle</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.control} onPress={() => guessClass('low')}>
                        <Text>Low</Text>
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
        margin: 10
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
        borderRadius: 20,
        borderWidth: 1,
        borderColor: Colors.black
    },
    currentSymbol: {
        fontSize: 280,
    },
    character: {
        flex: 1.5,
        marginVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    topBar: {
        height: 40,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default ClassTrainerScreen;
