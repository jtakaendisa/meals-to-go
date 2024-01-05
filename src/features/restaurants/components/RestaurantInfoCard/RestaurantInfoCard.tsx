import { Image } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { Card, Title } from 'react-native-paper';

import { Restaurant } from '../../../../services/restaurants/restaurants.context';
import open from '../../../../../assets/open';
import star from '../../../../../assets/star';
import {
  Address,
  ClosedText,
  InfoRow,
  Rating,
  RestaurantCard,
  RestaurantCardCover,
  Status,
} from './RestaurantInfoCard.styles';
import Favourite from '../../../../components/Favourite/Favourite';

interface Props {
  restaurant: Restaurant;
  elevated?: boolean;
}

const RestaurantInfoCard = ({ restaurant, elevated }: Props) => {
  const { name, icon, photos, vicinity, isOpenNow, rating, isClosedTemporarily } =
    restaurant;

  const ratingArray = Array.from({ length: Math.floor(rating) }, (_, index) => index);

  return (
    <RestaurantCard mode={elevated ? 'elevated' : 'contained'} elevated={elevated}>
      <Favourite restaurant={restaurant} />
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Card.Content>
        <Title>{name}</Title>
        <InfoRow>
          <Rating>
            {ratingArray.map((s) => (
              <SvgXml key={s} xml={star} width={20} height={20} />
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
