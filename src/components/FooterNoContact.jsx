import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import github from '../assets/github.png'
import linkedIn from '../assets/linkedIn.png'
import twitter from '../assets/twitter.png'
import Divider from '@mui/material/Divider';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    title: {
        fontFamily: 'playfair'
    },
});

const FooterNoContact = () => {
    const classes = useStyles();

    return (
        <footer>
                <Box display='flex' alignItems='center' justifyContent='center'>
                    <Box display='flex' justifyContent='space-evenly' alignItems='center' my={3} width={{xs:200}}>
                    <a href="https://github.com/ChrisDissette" target="_blank">
                        <img src={github} className='too-large' />
                    </a>
                    <a href="https://www.linkedin.com/in/christopher-dissette-aa8371b3" target="_blank">
                        <img src={linkedIn} className='too-large' />
                    </a>
                    <a href="https://twitter.com/CDissetteDev" target="_blank">
                        <img src={twitter} className='too-large'  />
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

export default FooterNoContact
