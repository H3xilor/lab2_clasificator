import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import WelcomeScreen from './components/WelcomeScreen'
import MainScreen from './components/MainScreen'
import ResultScreen from './components/ResultScreen'

const App = () => {
	const [screen, setScreen] = useState('welcome') // 'welcome', 'main', 'result'
	const [name, setName] = useState('')
	const [result, setResult] = useState(null)

	return (
		<SafeAreaProvider>
			<View style={{ flex: 1 }}>
				{screen === 'welcome' && (
					<WelcomeScreen
						name={name}
						setName={setName}
						start={() => setScreen('main')}
					/>
				)}

				{screen === 'main' && (
					<MainScreen
						name={name}
						finish={data => {
							setResult(data)
							setScreen('result')
						}}
						goBack={() => setScreen('welcome')}
					/>
				)}
        
				{screen === 'result' && (
					<ResultScreen
						name={name}
						result={result}
						restart={() => setScreen('welcome')}
					/>
				)}
			</View>
		</SafeAreaProvider>
	)
}

const styles = StyleSheet.create({})

export default App
