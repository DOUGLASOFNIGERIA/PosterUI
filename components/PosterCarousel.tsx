import {
  Text,
  FlatList,
  Image,
  StyleSheet,
  Pressable,
  Dimensions,
} from 'react-native';

type Poster = { id: string; title: string; image: string };

const posters: Poster[] = [
  { id: '1', title: 'Display', image: 'https://via.placeholder.com/150x200' },
  { id: '2', title: 'Promotion', image: 'https://via.placeholder.com/150x200' },
  { id: '3', title: 'Branding', image: 'https://via.placeholder.com/150x200' },
  {
    id: '4',
    title: 'Announcement',
    image: 'https://via.placeholder.com/150x200',
  },
];

const CARD_W = Dimensions.get('window').width * 0.28;

type Props = { activeIndex: number; setActiveIndex: (i: number) => void };

export default function PosterCarousel({ activeIndex, setActiveIndex }: Props) {
  return (
    <FlatList<Poster>
      data={posters}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.list}
      renderItem={({ item, index }: { item: Poster; index: number }) => {
        const active = index === activeIndex;
        return (
          <Pressable
            onPress={() => setActiveIndex(index)}
            style={[styles.card, active && styles.active]}>
            <Image source={{ uri: item.image }} style={styles.img} />
            <Text style={styles.label}>{item.title}</Text>
          </Pressable>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 16, // spacing so first/last card don’t hug screen edges
  },
  card: {
    width: CARD_W,
    marginRight: 12,
    backgroundColor: '#222',
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  active: {
    borderColor: '#00CED1',
  },
  img: {
    width: '100%',
    height: 100,
    backgroundColor: '#444',
  },
  label: {
    textAlign: 'center',
    color: '#fff',
    paddingVertical: 8,
    fontSize: 12,
  },
});
