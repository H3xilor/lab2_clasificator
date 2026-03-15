import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Choice from './choice';

const MainScreen = ({finish, goBack, name}) => {
    const handleFinish = (result) => {
        finish(result);
    }

    return (
			<SafeAreaView style={{flex: 1}}>
				<View style={navbar.container}>
					<Pressable style={navbar.backButton} onPress={goBack}>
						<Text style={navbar.backText}>{'< Back'}</Text>
					</Pressable>
				</View>
                <View>
                    <Text>{name}</Text>
                </View>
                <Choice winnerFinal={handleFinish}/>
			</SafeAreaView>
		)
}

const navbar = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#f2f2f2',
    },
    backButton: {
        padding: 8,
        paddingRight: 12,
    },
    backText: {
        fontSize: 16,
        fontWeight: 'bold',
    },

});

export default MainScreen;
