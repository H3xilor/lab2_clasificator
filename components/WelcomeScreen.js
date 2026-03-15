import React from 'react'
import { View, Text, Pressable, TextInput, StyleSheet } from 'react-native'

const WelcomeScreen = ({ start, name, setName }) => {
	return (
		<View style={styles.container}>
			<Text style={{ fontSize: 40, marginBottom: 20, fontWeight: 'bold' }}>
				Find your favourite car!
			</Text>
			<Text style={{ fontSize: 27 }}>Input your name</Text>
			<TextInput
				placeholder='Name...'
				style={styles.input}
				value={name}
				onChangeText={setName}
				maxLength={25}
			/>

			<Pressable
				onPress={() => start()}
				style={({ pressed }) => [
					styles.button,
					pressed && styles.buttonPressed,
				]}
			>
				<Text style={{ textAlign: 'center', fontSize: 20 }}>Start</Text>
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#f0ffff',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		gap: 20,
	},
	input: {
		width: '40%',
		fontSize: 20,

		paddingVertical: 4,
		paddingHorizontal: 10,

		borderBottomWidth: 1,
		borderBottomColor: '#000',

		color: '#000',
	},
	button: {
		width: '30%',
		padding: 10,
		borderRadius: 10,
		backgroundColor: '#add8e6',
		marginTop: 40,
	},
	buttonPressed: {
		opacity: 0.7,
	},
})

export default WelcomeScreen
