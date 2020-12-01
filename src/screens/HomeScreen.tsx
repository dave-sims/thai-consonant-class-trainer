import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducers';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

import {
    increment,
    decrement,
    incrementWithPayload
} from '../../redux';

type HomeScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Home'
>;

type Props = {
    navigation: HomeScreenNavigationProp;
};

function HomeScreen({ navigation }: Props) {

    const dispatch = useDispatch();
    const { ourNumber } = useSelector((state: RootState) => state.common)

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen {ourNumber}</Text>
            <Button
                title="Go to About"
                onPress={() => navigation.navigate('About')}
            />
            <Button
                title="Go to Settings"
                onPress={() => navigation.navigate('Settings')}
            />
            <Button
                title="Increment the number"
                onPress={() => dispatch(increment())}
            />
            <Button
                title="Decrement the number"
                onPress={() => dispatch(decrement())}
            />
            <Button
                title="Add 5 to the number"
                onPress={() => dispatch(incrementWithPayload(5))}
            />
            <Button
                title="login"
                onPress={() => login()}
            />

        </View>
    );
}

const login = () => {
    console.log('login')
    auth()
        .signInAnonymously()
        .then(() => {
            console.log('User signed in anonymously');
        })
        .catch(error => {
            if (error.code === 'auth/operation-not-allowed') {
                console.log('Enable anonymous in your firebase console.');
            }

            console.error(error);
        });

}

const styles = StyleSheet.create({});

export default HomeScreen;
