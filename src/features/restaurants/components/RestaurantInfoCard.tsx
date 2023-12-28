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

const RestaurantInfoCard = ({ restaurant = {} }: RestaurantInfoProps) => {
  const {
    name = 'Some Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

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
        <Address>{address}</Address>
      </Card.Content>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
