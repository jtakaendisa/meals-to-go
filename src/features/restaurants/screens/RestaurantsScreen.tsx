import { Platform, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import styled from 'styled-components/native';
import SearchBar from '../../../components/SearchBar';
import RestaurantInfoCard from '../components/RestaurantInfoCard';

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  margin-top: ${Platform.OS === 'android' ? StatusBar.currentHeight + 'px' : 0};
`;

const SearchContainer = styled.View`
  padding: 16px;
  justify-content: center;
`;

const RestaurantList = styled.View`
  flex: 1;
  padding: 16px;
`;

const RestaurantsScreen = () => {
  return (
    <StyledSafeAreaView>
      <SearchContainer>
        <SearchBar />
      </SearchContainer>
      <RestaurantList>
        <RestaurantInfoCard restaurant={{}} />
      </RestaurantList>
    </StyledSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  search: {},
  list: {},
});

export default RestaurantsScreen;
