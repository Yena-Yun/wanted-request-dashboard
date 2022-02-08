import { DefaultTheme } from 'styled-components';

const flex: DefaultTheme = {
  center: 'display: flex; justify-content: center; align-items: center;',
  column: 'display: flex; flex-direction: column;',
};

const size: DefaultTheme = ['12px', '14px', '16px', '20px', '24px'];

const weight: DefaultTheme = {
  regular: 400,
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
  noContent: '#c2c2c2',
};

const radius: DefaultTheme = {
  modal: '2px',
  base: '4px',
  button: '12px',
};

const media: DefaultTheme = {
  desktop: '1440px',
  tablet: '768px',
  mobile: '360px',
};

export const theme = { flex, size, weight, color, radius, media };

export type Theme = typeof theme;
