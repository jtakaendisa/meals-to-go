import WebView from 'react-native-webview';
import styled from 'styled-components/native';

export const CalloutContainer = styled.View`
  padding: ${({ theme }) => theme.customTheme.space[2]};
  max-width: 120px;
  align-items: center;
`;

export const CalloutImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

export const CalloutWebView = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;
