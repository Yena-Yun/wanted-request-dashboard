import { DefaultTheme } from 'styled-components';

const flex: DefaultTheme = {
  center: 'display: flex; justify-content: center; align-items: center;',
  column: 'display: flex; flex-direction: column;',
};

const size: DefaultTheme = ['12px', '14px', '16px', '20px', '24px'];

const weight: DefaultTheme = {
  medium: 500,
  bold: 700,
};

const color: DefaultTheme = {
  default: '#323D45',
  sub: '#939FA5',
  white: '#ffffff',
  light: '#E5E5E5',
  primary: '#1565C0',
  button: '#2196F3',
  warning: '#FFA000',
  extraLight: '#DADADA',
};

const radius: DefaultTheme = {
  base: '4px',
  button: '12px',
};

const media: DefaultTheme = {
  desktop: '1440px',
  test: '768px', // 나중에 지울 예정
  mobile: '360px',
};

export const theme = { flex, size, weight, color, radius, media };

export type Theme = typeof theme;
