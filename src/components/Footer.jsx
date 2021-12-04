import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import github from '../assets/github.png'
import linkedIn from '../assets/linkedIn.png'
import twitter from '../assets/twitter.png'
import Divider from '@mui/material/Divider';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { makeStyles } from '@mui/styles';
import { navigate } from '@reach/router'
import { Link as Scroll} from 'react-scroll'



const useStyles = makeStyles({
    title: {
        fontFamily: 'playfair'
    },
    button: {
        '&:hover': {
            backgroundColor: '#fff',
            color: '#6C63FF',
        }
    }
});

const Footer = () => {

    const classes = useStyles();

    return (
        <footer>
            <Box display='flex' justifyContent='center'>
                <Box display='flex' justifyContent='space-around' alignItems='center' bgcolor='primary.main' width={{xs: 475, sm: 570, md: 870, lg: 1150, xl:1296}} height={119} borderRadius={3}>
                    <Typography variant='h3' className={classes.title}>Let's connect!</Typography>
                    <Scroll to='top-page' smooth={true} > 
                        <Button variant='contained' color='secondary' sx={{color:'text.secondary'}} onClick={() => navigate('/contact')}>Contact Me</Button>
                    </Scroll>
                </Box>
                </Box>
                <Box display='flex' alignItems='center' justifyContent='center'>
                <Box display='flex' justifyContent='space-evenly' alignItems='center' my={3} width={{xs:200}}>
                    <a href="https://github.com/ChrisDissette" target="_blank">
                        <img src={github} className='too-large' alt='github social media link' />
                    </a>
                    <a href="https://www.linkedin.com/in/christopher-dissette-aa8371b3" target="_blank">
                        <img src={linkedIn} className='too-large' alt='linkedin social media link' />
                    </a>
                    <a href="https://twitter.com/CDissetteDev" target="_blank">
                        <img src={twitter} className='too-large' alt='twitter social media link'  />
                    </a>
                </Box>
                </Box>
                <Divider />
                <Box display='flex' justifyContent='center'> 
                    <Typography variant='overline'>Created by Christopher Dissette <CopyrightIcon sx={{fontSize:15}} /> 2021 </Typography>
                </Box>
        </footer>
    )
}

export default Footer
