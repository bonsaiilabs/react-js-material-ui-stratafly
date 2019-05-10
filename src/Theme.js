import { createMuiTheme } from '@material-ui/core/styles';

export const Theme = createMuiTheme({
  palette: {
    primary: {
      700: '#119620',
      500: '#2FB735',
      100: '#C5E9C4',
      200: '#A0DB9E',
      main: '#008512',
      light: '#E7F6E7',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#000000'
    },
    text: {
      primary: 'rgba(0, 0, 0, 1)',
      primaryMediumEmphasis: 'rgba(0, 0, 0, 0.6)',
      secondary: 'rgba(255, 255, 255, 1)',
      secondaryMediumEmphasis: 'rgba(255, 255, 255, 0.6)'
    }
  },
  typography: {
    useNextVariants: true,
    subtitle1: { fontWeight: 500 }
  }
});
