import { RouteProp, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { getMovieById } from "../services/getMovieById";
import { IMovies } from "../models/IMovies";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../colors";
import { FontAwesome } from '@expo/vector-icons';

type RootStackParamList = {
  Movie: undefined;
  MovieDetails: { id: number };
};

type MovieDetailsRouteProp = RouteProp<RootStackParamList, 'MovieDetails'>;

export default function MovieDetails() {
  const route = useRoute<MovieDetailsRouteProp>();
  const { id } = route.params;
  const [movie, setMovie] = useState<IMovies>();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await getMovieById(id);
        if (response === null) return;
        setMovie(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovie();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View key={movie?.id} style={styles.primeContainer}>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}` }}
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
          <Text style={styles.movieTitle}>{movie?.title}</Text>
          <View style={styles.ratingAndDateContainer}>
            <View style={styles.ratingContainer}>
              <FontAwesome name="star" size={18} color="black" style={styles.star} />
              <Text style={styles.voteAverage}>{movie?.vote_average}</Text>
            </View>
            <View style={styles.rConstant}>
              <Text>R</Text>
            </View>
            <Text style={styles.releaseDate}>{movie?.release_date}</Text>
            <Text style={styles.releaseDate}>Action</Text>
          </View>
        </View>
      </View>
      <View style={styles.txtContainer}>
        <Text style={styles.txt}>{movie?.overview}</Text>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/original/${movie?.poster_path}` }}
          style={styles.image2}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bg,
    flex: 1,
  },
  primeContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 500,
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
    height: 20,
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
  txtContainer: {
    padding: 15,
    gap: 15,
    flexDirection: 'row', 
    alignItems: 'flex-start', 
  },
  txt: {
    color: colors.ice,
    textAlign: 'justify',
    fontSize: 14,
    flex: 1, 
  },
  image2: {
    width: 150,
    height: 200,
    marginLeft: 10, 
    borderRadius: 8, 
  },
});
