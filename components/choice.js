import React, { useState } from 'react'
import {  Pressable, Text, Image, StyleSheet, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import cars from '../assets/data/objects.json'

const images = {
	m3: require('../assets/img/m3.png'),
	rs7: require('../assets/img/rs7.png'),
	amg: require('../assets/img/amg.png'),
	gtr: require('../assets/img/gtr.png'),
}

export default function Choice({ winnerFinal }) {
	const [items] = useState(cars)
	const [currentIndex, setCurrentIndex] = useState(2)
	const [top, setTop] = useState(items[0])
	const [bottom, setBottom] = useState(items[1])

	const handleChoice = (winner, loser) => {
		console.log('Winner:', winner.name, 'Loser:', loser.name)

		if (currentIndex < items.length) {
			const nextItem = items[currentIndex]
			setCurrentIndex(currentIndex + 1)

			setTop(winner)
			setBottom(nextItem)
		} else {
			console.log('No more items to compare.')
			winnerFinal({
				name: winner.name,
				image: winner.image,
				description: winner.description,
			})
		}
	}

	return (
		<SafeAreaView style={styles.container}>
			<Pressable onPress={() => handleChoice(top, bottom)} style={styles.choice}>
				<Text style={styles.text}>{top.name}</Text>
				<Image
					source={images[top.image]}
					style={styles.image}
                    
				></Image>
			</Pressable>
			<Pressable onPress={() => handleChoice(bottom, top)} style={styles.choice}>
				<Text style={[styles.text, { marginTop: '5%' }]}>{bottom.name}</Text>
				<Image
					source={images[bottom.image]}
					style={styles.image}
                    
				></Image>
			</Pressable>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	image: {
		width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').width * 0.7,
        resizeMode: 'contain',
        
	},
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    choice: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})
