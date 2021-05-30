import React from 'react';
import {StyleSheet, TextInput, Text, View} from 'react-native';

const UselessTextInput = () => {
  //const [text, onChangeText] = React.useState('Enter your Email');
  const [number] = React.useState(null);

  return (
    <View>
      <Text>Email</Text>
      <TextInput
        style={styles.input}
        // onChangeText={onChangeText}
        //value={text}
      />
      <Text>Password</Text>
      <TextInput
        style={styles.input}
        value={number}
        placeholder="Enter your Password"
        keyboardType="visible-password"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default UselessTextInput;
