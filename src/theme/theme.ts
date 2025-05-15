import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light', // or 'dark'
    primary: {
      main: '#1976d2',
    },
    background: {
      // default: '#f4f6f8',
    },
  },
  shape: {
    borderRadius: 12,
  },
});

export default theme;