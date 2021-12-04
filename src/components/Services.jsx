import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DevicesSharpIcon from '@mui/icons-material/DevicesSharp';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { navigate } from '@reach/router'
import { Link as Scroll} from 'react-scroll'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useState} from 'react'


const useStyles = makeStyles({
    copy: {
        opacity: '70%'
    },
    titles: {
        fontFamily: 'playfair'
    },
});


const Services = () => {


    const classes = useStyles();

    return (
            <section>
                <Box id='my-services' display='flex' justifyContent='center' flexDirection='column' alignItems='center' textAlign='center' mt={5} >
                    <Typography variant='h4' fontWeight='bold' className={classes.titles}>My Specialities</Typography>
                    <br />
                    <Typography variant='h5' className={classes.copy} px={{xs:2, sm:12, md:13, lg:15}} >I design and build custom single and multipage websites using the latest web development technology</Typography>

                    <Box width={{xs: '98%', sm:600, md:900, lg:1200, xl:1320}} display='flex' mt={3} mb={2} flexDirection={{xs:'column', sm: 'column', md:'row'}}>
                        
                        <Box border='1.75px solid #F9F7FE' bgcolor='primary.main' height={376} width={{xs:'100%', lg:'50%'}} display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                            <Typography variant='h5' mb={5} className={classes.titles} >Responsive Web Design</Typography>
                            <Typography variant='body1' className={classes.copy}>Your website will be viewed on a variety of devices</Typography>
                            <br/>
                            <Typography variant='body1' sx={{pb:5}} className={classes.copy}>I'll make sure your site is optimal no matter the viewer's screen size</Typography>
                            <DevicesSharpIcon className={classes.copy} sx={{ fontSize: 140}} />
                        </Box>
                        
                        <Box border='1.75px solid #D3D3D3' height={376} width={{xs:'100%', lg:'50%'}} display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                            <Typography variant='h5' mb={5} className={classes.titles}>Search Engine Optimization</Typography>
                            <Typography variant='body1' className={classes.copy}>When you Google something, how far down do you look?</Typography>
                            <br/>
                            <Typography variant='body1' sx={{pb:5}} className={classes.copy}>SEO ensures that your users are able to find your site quickly</Typography>
                            <ScreenSearchDesktopIcon sx={{ fontSize: 140}} className={classes.copy} />
                        </Box>

                    </Box>
                    <Scroll to='top-page' smooth={true}>
                        <Button variant='outlined' color='secondary' sx={{my:5, width:350, height:100}} onClick={() => navigate('/work')}>
                            View Some Of My Projects
                        </Button>
                    </Scroll>
                </Box>
            </section>
    )
}

export default Services
