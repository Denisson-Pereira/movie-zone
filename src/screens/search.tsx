import React, { useState } from "react";
import { View, TextInput, Button, FlatList, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { IMovies } from "../models/IMovies";
import { searchMoviesByName } from "../services/searchMoviesByName";
import { FontAwesome } from '@expo/vector-icons'; 
import { colors } from "../colors";
import { useNavigate } from "../hooks/useNavigate";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [movies, setMovies] = useState<IMovies[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const { navigate } = useNavigate();

  const handleSearch = async () => {
    if (searchTerm.trim() === "") {
      return;
    }
    
    setLoading(true);
    const results = await searchMoviesByName(searchTerm);
    setMovies(results);
    setLoading(false);
  };

  const renderMovie = ({ item }: { item: IMovies }) => (
    <View style={styles.movieItem}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/original/${item.poster_path}` }}
        style={styles.movieImage}
      />
      <View style={styles.movieDetails}>
        <Text style={styles.movieTitle}>{item.title}</Text>
        <Text
          style={styles.movieOverview}
          numberOfLines={5} 
        >
          {item.overview}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('movieDetails', { id: item.id })}
        >
          <Text style={styles.buttonText}>See Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search for a movie..."
          value={searchTerm}
          onChangeText={setSearchTerm}
          placeholderTextColor={colors.white}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <FontAwesome name="search" size={20} color={colors.white} />
        </TouchableOpacity>
      </View>

      {loading ? (
        <Text style={styles.loadingText}>Loading...</Text>
      ) : (
        <FlatList
          data={movies}
          renderItem={renderMovie}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.movieList}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    paddingTop: 60,
    paddingHorizontal: 15,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
    marginBottom: 20,
  },
  input: {
    height: 50,
    flex: 1,
    fontSize: 18,
    color: colors.ice,
    paddingLeft: 10,
    borderRadius: 10, 
    backgroundColor: colors.inputs, 
  },
  searchButton: {
    padding: 12,
    borderRadius: 30,
    backgroundColor: colors.orange,
    marginLeft: 10,
  },
  loadingText: {
    color: colors.white,
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  movieList: {
    paddingBottom: 60,
  },
  movieItem: {
    backgroundColor: colors.inputs,
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: 'row',
    elevation: 5,
  },
  movieImage: {
    width: 150,
    height: 300,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  movieDetails: {
    padding: 15,
    flex: 1,
  },
  movieTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.white,
    marginBottom: 10,
  },
  movieOverview: {
    fontSize: 14,
    color: colors.ice,
    marginBottom: 10,
    flex: 1,
    overflow: 'hidden', 
  },
  button: {
    backgroundColor: colors.orange,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
  },
});
