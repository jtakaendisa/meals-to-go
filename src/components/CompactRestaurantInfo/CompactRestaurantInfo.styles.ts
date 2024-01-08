import styled from 'styled-components/native';
import WebView from 'react-native-webview';

export const Container = styled.View`
  padding: ${({ theme }) => theme.customTheme.space[2]};
  max-width: 120px;
  align-items: center;
`;

export const Image = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

export const WebViewImage = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;
