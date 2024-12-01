import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Header } from '../components/header';
import { colors } from '../colors';
import { useEffect, useState } from 'react';
import { IMovies } from '../models/IMovies';
import { getMoviesNowPlaying } from '../services/getMoviesNowPlaying';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons'; 

export default function Home() {
  const [movies, setMovies] = useState<IMovies[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0); 

  useEffect(() => {
    async function fetchData() {
      const response = await getMoviesNowPlaying();
      setMovies(response.slice(0, 4)); 
    }
    fetchData();
  }, []);

  if (movies.length === 0) {
    return <Text>Loading...</Text>;
  }


  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        style={styles.scrollView}
      >
        {movies.map((movie, index) => (
          <View key={movie.id} style={styles.primeContainer}>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}` }}
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
              <Text style={styles.movieTitle}>{movie.title}</Text>
              <View style={styles.ratingAndDateContainer}>
                <View style={styles.ratingContainer}>
                  <FontAwesome name="star" size={18} color="black" style={styles.star} />
                  <Text style={styles.voteAverage}>{movie.vote_average}</Text>
                </View>
                <View style={styles.rConstant}>
                  <Text>R</Text>
                </View>
                <Text style={styles.releaseDate}>{movie.release_date}</Text>
                <Text style={styles.releaseDate}>Action</Text>
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => alert(`See details of ${movie.title}`)}
              >
                <Text style={styles.buttonText}>See Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.indicatorsContainer}>
        {movies.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentIndex === index ? styles.activeIndicator : null,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    paddingTop: 50,
    paddingHorizontal: 10,
    gap: 20
  },
  scrollView: {
    flexGrow: 0,
  },
  primeContainer: {
    width: 380, 
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginHorizontal: 6
  },
  image: {
    width: '100%',
    height: 400,
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
    bottom: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
    gap: 10,
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
    gap: 20,
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
  star: {
    marginRight: 5,
  },
  rConstant: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 50,
    width: 20,
    height: 20
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
  indicatorsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    width: 20,
    height: 2,
    borderRadius: 5,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: colors.orange,
  },
});
