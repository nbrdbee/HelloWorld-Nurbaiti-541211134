import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';

export default function App({ navigation }) {
  const [like, setLike] = useState(0);
  const [like2, setLike2] = useState(0);
  const [dislike, setDislike] = useState(0);
  const [dislike2, setDislike2] = useState(0);

  const handleLike = () => {
    setLike(like + 1);
  };
  const handleLike2 = () => {
    setLike2(like2 + 1);
  };

  const handleDislike = () => {
    setDislike(dislike + 1);
  };
  const handleDislike2 = () => {
    setDislike2(dislike2 + 1);
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Image style={styles.avatar} source={require('./assets/Betty.png')} />
        <Text style={styles.title}>Nurbaiti Ramadani</Text>
        <Text style={styles.subTitle}>
          Hello! Nama saya Nurbaiti Ramadani, biasa dipanggil Betty. Saya lahir
          di Purwodadi, 15 Oktober 2005. Saya bersekolah di SMK Telkom
          Purwokerto dengan jurusan RPL (Rekayasa Perangkat Lunak).
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert('Hello!')}>
          <Text style={styles.textButton}>Contact Me</Text>
        </TouchableOpacity>

        <Text style={styles.projectTitle}>My Recent Project</Text>

        <Image style={styles.ocafe} source={require('./assets/Ocafe.png')} />
        <Text style={styles.projectTitle}>Ocafe</Text>
        <Text style={styles.subTitle1}>
          Ocafe adalah sebuah website untuk memesan makanan di sebuah cafe. Nama
          ‘Ocafe’ diambil dari singkatan ‘Online Cafe’.
        </Text>
        <View style={styles.likeDislikeContainer}>
          <TouchableOpacity
            style={styles.likeButton}
            onPress={handleLike}>
            <Text style={styles.likeButtonText}>Like</Text>
          </TouchableOpacity>
          <Text style={styles.likeCountText}>Likes: {like}</Text>
          <Text style={styles.likeCountText}>Dislikes: {dislike}</Text>
          <TouchableOpacity
            style={styles.dislikeButton}
            onPress={handleDislike}>
            <Text style={styles.dislikeButtonText}>Dislike</Text>
          </TouchableOpacity>
        </View>
        <Image
          style={styles.absensi}
          source={require('./assets/Webabsensi.png')}
        />
        <Text style={styles.projectTitle}>Absensi PKL</Text>
        <Text style={styles.subTitle2}>
          Website ini bertujuan untuk mempermudah proses pengelolaan absensi
          siswa PKL, penyimpanan data, pemantauan kehadiran, serta pelaporan
          yang lebih efisien.
        </Text>
        <View style={styles.likeDislikeContainer}>
          <TouchableOpacity
            style={styles.likeButton}
            onPress={handleLike2}>
            <Text style={styles.likeButtonText}>Like</Text>
          </TouchableOpacity>
          <Text style={styles.likeCountText}>Likes: {like2}</Text>
          <Text style={styles.likeCountText}>Dislikes: {dislike2}</Text>
          <TouchableOpacity
            style={styles.dislikeButton}
            onPress={handleDislike2}>
            <Text style={styles.dislikeButtonText}>Dislike</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#FBF9F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    padding: 10,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    color: 'gray',
    textAlign: 'center',
    paddingBottom: 15,
  },
  subTitle1: {
    color: 'gray',
    textAlign: 'center',
    fontSize: 13,
    paddingBottom: 3,
  },
  subTitle2: {
    color: 'gray',
    textAlign: 'center',
    fontSize: 13,
    paddingBottom: 3,
  },
  avatar: {
    width: 130,
    height: 130,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#655DBB',
    width: 125,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  textButton: {
    fontWeight: 'bold',
    color: 'white',
  },
  projectTitle: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    paddingBottom: 10,
  },
  ocafe: {
    width: 250,
    height: 150,
    borderRadius: 3,
  },
  absensi: {
    width: 250,
    height: 140,
    borderRadius: 3,
    marginTop: 20,
  },
  scrollView: {
    backgroundColor: 'black',
    marginHorizontal: 20,
  },
  likeButton: {
    backgroundColor: '#FEECE9',
    width: 60,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  dislikeButton: {
    backgroundColor: '#ECF2FF',
    width: 60,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  likeButtonText: {
    fontWeight: 'bold',
    color: '#FA3E59',
  },
  dislikeButtonText: {
    fontWeight: 'bold',
    color: '#655DBB',
  },
  likeCountText: {
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 10,
    color: 'gray',
  },
  likeDislikeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 1,
    marginTop: 15,
  },
});
