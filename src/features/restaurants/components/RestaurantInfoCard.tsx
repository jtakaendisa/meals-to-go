import { Image } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { Card, Title } from 'react-native-paper';

import open from '../../../../assets/open';
import star from '../../../../assets/star';
import {
  Address,
  ClosedText,
  InfoRow,
  Rating,
  RestaurantCard,
  RestaurantCardCover,
  Status,
} from './RestaurantInfoCard.styles';
import { Restaurant } from '../../../services/restaurants/restaurants.context';

interface Props {
  restaurant: Restaurant;
}

const RestaurantInfoCard = ({ restaurant }: Props) => {
  const { name, icon, photos, vicinity, isOpenNow, rating, isClosedTemporarily } =
    restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Card.Content>
        <Title>{name}</Title>
        <InfoRow>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml key={index} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <Status>
            {isClosedTemporarily && <ClosedText>CLOSED TEMPORARILY</ClosedText>}
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
          </Status>
        </InfoRow>
        <Address>{vicinity}</Address>
      </Card.Content>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
