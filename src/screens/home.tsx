import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Header } from '../components/header';
import { colors } from '../colors';
import { useEffect, useState } from 'react';
import { IMovies } from '../models/IMovies';
import { getMoviesNowPlaying } from '../services/getMoviesNowPlaying';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons'; 

export default function Home() {
  const [movies, setMovies] = useState<IMovies[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getMoviesNowPlaying();
      setMovies(response);
    }
    fetchData();
  }, []);

  if (movies.length === 0) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.primeContainer}>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/original/${movies[0].poster_path}` }}
          style={styles.image}
        />
        <LinearGradient
          colors={[
            'rgba(0, 0, 0, 0.048)', 
            'rgba(0, 0, 0, 0.493)',  
            'rgba(0, 0, 0, 0.795)',  
            'rgba(0, 0, 0, 0.842)',  
            colors.bg,              
          ]}
          style={styles.shadow}
        />
        <View style={styles.info}>
          <Text style={styles.movieTitle}>{movies[0].title}</Text>
          <View style={styles.ratingAndDateContainer}>
            <View style={styles.ratingContainer}>
              <FontAwesome name="star" size={18} color="black" style={styles.star} />
              <Text style={styles.voteAverage}>{movies[0].vote_average}</Text>
            </View>
            <View style={styles.rConstant}>
              <Text>R</Text>
            </View>
            <Text style={styles.releaseDate}>{movies[0].release_date}</Text>
            <Text style={styles.releaseDate}>Action</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => alert('See details pressed')}>
            <Text style={styles.buttonText}>See Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    paddingTop: 50,
    paddingHorizontal: 20,
    gap: 30
  },
  primeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    width: "100%",
    height: 500,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  shadow: {
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    bottom: 0,
  },
  info: {
    position: 'absolute',
    bottom: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
    gap: 10
  },
  movieTitle: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ratingAndDateContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    gap: 20
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  rConstant: {
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
    borderRadius: 50
  },
  star: {
    marginRight: 5,
  },
  voteAverage: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  releaseDate: {
    fontSize: 16,
    color: colors.white,
    fontWeight: '400',
    textAlign: 'right',
  },
  button: {
    backgroundColor: colors.orange,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: colors.ice,
    fontSize: 16,
    fontWeight: '400',
  },
});
