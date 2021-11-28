import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ProfilePic from '../assets/profilephoto.jpg'
import { makeStyles } from '@mui/styles';


const Profile = () => {

    const useStyles = makeStyles({
        firstName: {
            fontFamily: 'playfair'
        },
        bodyText: {
            opacity: '70%'
        },
        buttonHover: {
            
        }
    });

    const classes = useStyles();

    return (
            <Box width='100%' display='flex' justifyContent='center' alignItems='center' mt={10} py={5}>

                {/* Content container */}
                <Box minHeight={649} width={1244} display='flex' flexDirection={{xs: 'column-reverse', sm: 'column-reverse', md:'row', lg:'row'}}>

                    {/* Biography Box */}
                    <Box width='50%' px={2}>
                        <Typography variant='h4' fontWeight='bold' className='intro' >Hey  👋, I'm</Typography>
                        <Typography variant='h2' fontWeight='bold' gutterBottom sx={{mt:5}} className={classes.firstName} >Christopher Dissette </Typography>
                        <Typography variant='h3' fontWeight='bold' className='subtitle' gutterBottom>A <span className='purple-highlight'>Fullstack Developer</span> based in Chicago</Typography>

                        <Typography variant='body1' className={classes.bodyText}>As mentioned above, my name is Christopher Dissette, and I am passionate about web development. I graduated with honors from the Coding Dojo programming boot camp in the summer of 2021 and have obtained multiple certifications from Codecademy since. </Typography>
                        <br />
                        <Typography variant='body1' className={classes.bodyText}>I love creating responsive web applications with my go-to tools, React.js and Material UI. Completing a project gives me a boost of dopamine that drives me to start another one. I sleep better at night knowing I'm going to bed a better programmer than I was when I woke up. </Typography>
                        <br />
                        <Typography variant='body1' className={classes.bodyText}>My short-term goal is to break into the industry by getting my first job as a front-end developer. My long-term goal is to work for myself and combine my digital marketing experience with my web development know-how to become a "one-stop-shop" for individuals and brands that require a strong web presence.</Typography>
                    </Box>

                    {/* Image Box */}
                    <Box width='50%' px={5} display='flex' justifyContent='center' alignItems='center'> 
                        <img className='profile-pic' alt="Profile picture for Christopher Dissette" src={ProfilePic} style={{height:'auto', width: '100%', borderRadius:'50%'}} />
                    </Box>
                </Box>
            </Box>
    )
}

export default Profile
