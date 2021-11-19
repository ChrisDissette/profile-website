import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Router } from '@reach/router'
import { ThemeProvider } from '@mui/material/styles';
import Home from './views/Home'
import About from './views/About'
import Work from './views/Work'
import Contact from './views/Contact'

let theme = createTheme({
  palette: {
    primary: {
      main: '#F9F7FE',
    },
    secondary: {
      main: '#6C63FF',
    },
    text: {
      secondary: '#FFFFFF'
    }
  },
  typography: {
    h1: {
      fontSize:"5.5rem"
    },
    h3: {
      fontSize:"2.5rem"
    }
  }
});

theme = responsiveFontSizes(theme)


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Home path = '/' />
        <About path='/about' />
        <Work path='/work' />
        <Contact path='/contact' />
      </Router>
    </ThemeProvider>
  );
}

export default App;
