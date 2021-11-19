import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {useState, useEffect} from 'react'
import { makeStyles } from '@mui/styles';
import Collapse from '@mui/material/Collapse';
import { Link as Scroll} from 'react-scroll'





const useStyles = makeStyles({
    firstName: {
        fontFamily: 'playfair'
    },
    button: {
        '&:hover': {
            backgroundColor: '#fff',
            color: '#6C63FF',
        }
    }
});


const Hero = () => {


    const [hobby, setHobby] = useState("")
    const [checked, setChecked] = useState(false)

    const classes = useStyles();

    let hobbyList = [ 'Fullstack Developer', 'Digital Marketer', 'Chicago Sports Fan', 'Gamer', 'Musician', 'Coffee Lover', 'Cat Enthusiast', 'Dog Person', 'Snowboarder', 'Fullstack Developer']

    useEffect(() => {
        setHobby(hobbyList[0])
        setChecked(true)
        let seconds = 0
        const interval = setInterval(() => {
            seconds = seconds + 1
            if(seconds === hobbyList.length){
                seconds = 0
            } else {

                setHobby(hobbyList[seconds])
            }
            console.log(seconds)
        }, 1000)
        return () => clearInterval(interval)
    }, [])


    return (
        <div>
            <Box minHeight='80vh' display='flex' justifyContent='center' flexDirection='column' textAlign='center' bgcolor='primary.main' px={5} pb={20}>
                <header className='hero'>
                    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={50} >
                        <Typography variant='h3' fontWeight='bold' gutterBottom className='intro' >Hey 👋, I'm</Typography>
                        <Typography variant='h1' fontWeight='bold' gutterBottom sx={{mt:5}} className={classes.firstName} >Chris Dissette </Typography>
                        <Typography variant='h4' fontWeight='bold' className='subtitle' gutterBottom>A <span>{hobby}</span> based in Chicago</Typography>
                    </Collapse>
                    <br />
                    <Scroll to='my-services' smooth={true} >
                        <Button variant='contained' color='secondary' sx={{height:57, width:190, mt:5}}>Let's Get Started</Button>
                    </Scroll>
                </header>
            </Box>
        </div>
    )
}

export default Hero
