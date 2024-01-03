import { MD3Theme, DefaultTheme as PaperTheme } from 'react-native-paper';

import { colors } from './colors';
import { fontSizes, fontWeights, fonts } from './fonts';
import { sizes } from './sizes';
import { lineHeights, space } from './spacing';

interface CustomTheme {
  customTheme: {
    colors: typeof colors;
    space: typeof space;
    lineHeights: typeof lineHeights;
    sizes: typeof sizes;
    fonts: typeof fonts;
    fontSizes: typeof fontSizes;
    fontWeights: typeof fontWeights;
  };
}

export interface CustomPaperTheme extends MD3Theme, CustomTheme {}

export const theme: CustomPaperTheme = {
  ...PaperTheme,
  customTheme: {
    colors,
    space,
    lineHeights,
    sizes,
    fonts,
    fontSizes,
    fontWeights,
  },
};
