import { StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';
import styled from 'styled-components/native';

// interface RestaurantInfoProps {
//   restaurant: {
//     name: string | undefined;
//     icon: string;
//     photos: string[];
//     address: string;
//     isOpenNow: boolean;
//     rating: number;
//     isClosedTemporarily: boolean;
//   };
// }

interface RestaurantInfoProps {
  restaurant: any;
}

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
  border-radius: 0;
`;

const Title = styled.Text`
  padding: 2px;
`;

const RestaurantInfoCard = ({ restaurant = {} }: RestaurantInfoProps) => {
  const {
    name = 'Some Restaurant',
    icon,
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard>
      <RestaurantCardCover style={styles.cover} source={{ uri: photos[0] }} />
      <Card.Content>
        <Title>{name}</Title>
      </Card.Content>
    </RestaurantCard>
  );
};

const styles = StyleSheet.create({
  card: {},
  cover: {},
});

export default RestaurantInfoCard;
