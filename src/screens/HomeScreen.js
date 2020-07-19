import React from 'react';
import {Button, Text, View} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default HomeScreen;
