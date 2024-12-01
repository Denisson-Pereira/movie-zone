import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IMovies } from "../models/IMovies";
import { getMoviesNowPlaying } from "../services/getMoviesNowPlaying";
import { colors } from "../colors";

export const NowPlaying = () => {
    const [movies, setMovies] = useState<IMovies[]>([]);

    useEffect(() => {
        async function fechDate() {
            const response = await getMoviesNowPlaying();
            setMovies(response.slice(5, 15));
        }
        fechDate();
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.txt1}>Now Playing</Text>
            <Text style={styles.txt2}>Playing in theaters now</Text>
            <View>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.scroll}
                >
                    {movies.map((item) => (
                        <TouchableOpacity 
                            key={item.id}
                            style={styles.containerMovie}
                        >
                            <Image 
                                source={{ uri: `https://image.tmdb.org/t/p/original/${item.poster_path}` }} 
                                style={styles.img}
                            />
                            <Text style={styles.title}>{item.title}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        gap: 20,
        marginTop: 20
    },
    containerMovie: {

    },
    scroll: {
        gap: 20
    },
    img: {
        width: 280,
        height: 350,
        borderRadius: 15,
    },
    txt1: {
        fontSize: 30,
        color: colors.white,
        fontWeight: '600',
        letterSpacing: 1
    },
    txt2: {
        fontSize: 15,
        color: colors.white,
        fontWeight: '500'
    },
    title: {
        fontSize: 20,
        color: colors.ice,
        padding: 5,
        fontWeight: '500'
    }
})