import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    Alert,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducers';
import Auth0 from 'react-native-auth0';
import {
    setAccessToken,
    clearAccessToken,
} from '../../redux';

type HomeScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Home'
>;

type Props = {
    navigation: HomeScreenNavigationProp;
};

const auth0 = new Auth0({
    domain: 'dev-qj1z141z.us.auth0.com',
    clientId: 'V1f133zB0pJ0E7hxz2g5wNwdq81zSJ9p',
});

function HomeScreen({ navigation }: Props) {

    const dispatch = useDispatch();
    const { accessToken } = useSelector((state: RootState) => state.auth)

    const loginAuth0 = () => {
        auth0
            .webAuth
            .authorize({ scope: 'openid profile email' }, { ephemeralSession: true })
            .then(credentials => {
                // authenticated, store the accessToken
                console.log(credentials.accessToken);
                dispatch(setAccessToken(credentials.accessToken))
                console.log(credentials);
                auth0.auth
                    .userInfo({ token: credentials.accessToken })
                    .then(console.log)
                    .catch(console.error)
            })
            .catch(error => console.log(error));
    }

    const logoutAuth0 = () => {
        auth0.webAuth
            .clearSession(undefined)
            .then(success => {
                Alert.alert(
                    'Logged out!'
                );
                // logged out, clear access token
                dispatch(clearAccessToken());
            })
            .catch(error => {
                console.log('Log out cancelled');
            });
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            { accessToken ? <Text>{accessToken}</Text> : null}
            <View style={styles.buttonStyle}>
                <Button
                    title="Class Trainer"
                    onPress={() => navigation.navigate('ClassTrainer')}
                /></View>
            <View style={styles.buttonStyle}>
                <Button
                    title="Go to About"
                    onPress={() => navigation.navigate('About')}
                /></View>
            <View style={styles.buttonStyle}>
                <Button
                    title="Go to Settings"
                    onPress={() => navigation.navigate('Settings')}
                /></View>
            <View style={styles.buttonStyle}>
                <Button
                    title="Login"
                    onPress={() => loginAuth0()}
                />
            </View>
            <View style={styles.buttonStyle}>
                <Button
                    title="Logout"
                    onPress={() => logoutAuth0()}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonStyle: {
        marginVertical: 10
    }
});

export default HomeScreen;
