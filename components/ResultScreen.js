import React from 'react';
import { View, Text } from 'react-native';

const ResultScreen = ({ name, result, restart}) => {
  

  
  
  return (
    <View>
      <Text>result screen</Text>
      {console.log('Winner:', result.name, 'Description:', result.description)}
    </View>
  );
}

export default ResultScreen;
