import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import quotes from './assets/quotes.json'; 

const QuotesApp = () => {
  const [currentQuote, setCurrentQuote] = useState({});

  useEffect(() => {
    getRandomQuote();
  }, []);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  const getImageSource = (imageName) => {
    switch (imageName) {
      case 'johnlennon.png':
        return require('./assets/johnlennon.png');
      case 'stevejobs.png':
        return require('./assets/stevejobs.png');
      case 'einstein.png':
        return require('./assets/einstein.png');
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {currentQuote.image && (
        <Image 
          source={getImageSource(currentQuote.image)} 
          style={styles.image} 
          resizeMode="contain"
        />
      )}
      <Text style={styles.quote}>"{currentQuote.quote}"</Text>
      <Text style={styles.author}>- {currentQuote.author}</Text>
      <Button title="New Quote" onPress={getRandomQuote} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  quote: {
    fontSize: 20,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 10,
  },
  author: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default QuotesApp;


