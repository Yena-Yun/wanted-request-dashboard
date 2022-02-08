const size = {
  4: '4px',
  8: '8px',
  10: '10px',
  12: '12px',
  14: '14px',
  16: '16px',
  20: '20px',
  24: '24px',
  28: '28px',
  32: '32px',
};

const weight = {
  default: 400,
  medium: 500,
  bold: 700,
};

const color = {
  gray: {
    default: '#323D45',
    sub: '#939FA5',
    whiteDefault: '#ffffff',
    bar: '#DADADA',
  },
  primary: {
    default: '#1565C0',
    light: '#2196F3',
  },
  warning: {
    dark: '#FFA000',
  },
};

const media = {
  desktop: '1440px',
  mobile: '360px',
};

export const theme = { size, weight, color, media };

export type Theme = typeof theme;
