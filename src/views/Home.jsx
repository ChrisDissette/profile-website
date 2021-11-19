import Header from '../components/Header';
import Hero from '../components/Hero'
import Services from '../components/Services'
import Footer from '../components/Footer'
import Box from '@mui/material/Box';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

const Home = () => {
    return (
        <div>
            <Box>
                <Header />
                <Hero />
                <Services />
                <Footer />
            </Box>
        </div>
    )
}

export default Home
