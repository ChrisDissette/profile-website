import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import StarWars from '../assets/starwars2.png'
import FantasyFootball from '../assets/football.png'
import ToDo from '../assets/todo1.png'
import {useState} from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import EightBall from '../assets/eightBall.jpg'
import Water from '../assets/water.jpg'



const PortfolioTablet = () => {

    const useStyles = makeStyles({
        title: {
            fontFamily: 'playfair'
        },
        bodyText: {
            opacity: '70%'
        },
        webPhoto: {
            height: 'auto',
            width: '75%'
        },
        gridContent: {
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
        },
        gridCopy: {
            display:'flex',
            alignItems:'flex-start',
            justifyContent:'center',
            flexDirection:'column',
            width:'75%'
        },
        button: {
            '&:hover': {
                backgroundColor: '#fff',
                color: '#6C63FF',
            }
        }
    });

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);


    const handleOpenMenu = event => {
        setAnchorEl(event.currentTarget)
    }

    const handleCloseMenu = () => {
        setAnchorEl(null)
    }



    return (
        <Box  minHeight='100vh' display='flex' justifyContent='center' mb={5}>
                    <Box  minHeight={500} width='85%' mt={5} >

                        <Box width='50%'>
                            <Typography variant='h2' fontWeight='bold' gutterBottom sx={{mt:5}} className={classes.title} >Check out some of my projects!</Typography>
                        </Box>

                        <Grid container mt={5} direction={{xs:'column', sm:'column', md:'row', lg:'row'}} >

                            <Grid item xs={6} height={400} bgcolor='primary.main' className={classes.gridContent} >
                                <img src={StarWars} alt="Screenshot of Christopher Dissette's Luke API Walker project" className={classes.webPhoto} />
                            </Grid>
                            
                            <Grid item xs={6} height={400} className={classes.gridContent}>
                                <Box className={classes.gridCopy}>
                                    <Typography variant='h3' fontWeight='bold' className={classes.title}> Star Wars API</Typography>
                                    <Typography variant='body1' fontWeight='bold' mt={1} className={classes.bodyText}>A responsive, single-page application that displays data from the Star Wars API. Select a category and enter an ID # to display information. An "error" component will inform you of missing data from the API... "these are not the droids you are looking for...".</Typography>
                                    <Button href="https://starwars-api-two.vercel.app/" target="_blank" variant='contained' color='secondary'sx={{height:57, width:190, mt:5}}>Launch Site</Button>
                                </Box>
                            </Grid>

                            <Grid item xs={6}  height={400} className={classes.gridContent}>
                                <Box className={classes.gridCopy}>
                                    <Typography variant='h3' fontWeight='bold' className={classes.title}>Fantasy Football Draft Order</Typography>
                                    <Typography variant='body1' fontWeight='bold' mt={1} className={classes.bodyText}>Enter the player names of your fantasy football league to randomize your league's draft order. Different components will render based on conditions set by the user, and front-end validations ensure no required information is missing.</Typography>
                                    <Button href='https://fantasy-football-draft-order.vercel.app/' target='_blank' variant='contained' color='secondary'sx={{height:57, width:190, mt:5}}>Launch Site</Button>
                                </Box>
                            </Grid>

                            <Grid item xs={6} height={400} bgcolor='primary.main' className={classes.gridContent} >
                                <img src={FantasyFootball} alt="Screenshot of Christopher Dissette's Draft Order project" className={classes.webPhoto} />
                            </Grid>

                            <Grid item xs={6} height={400} bgcolor='primary.main' sx={{display:'flex', alignItems:'center', justifyContent:'center'}} >
                                <img src={ToDo} alt="Screenshot of Christopher Dissette's To Do List project" className={classes.webPhoto} />
                            </Grid>
                            
                            <Grid item xs={6}  height={400} className={classes.gridContent}>
                                <Box className={classes.gridCopy}>
                                    <Typography variant='h3' fontWeight='bold' className={classes.title}>To Do List</Typography>
                                    <Typography variant='body1' fontWeight='bold' mt={1} className={classes.bodyText}>Stay on track in style. Click the checkbox to complete an item, delete individual tasks, or clear the list with the click of a button. This single-page, responsive web application includes dynamic CSS, form validations, and a character counter.</Typography>
                                    <Button href='https://to-do-list-lac.vercel.app/' target='_blank' variant='contained' color='secondary'sx={{height:57, width:190, mt:5}}>Launch Site</Button>
                                </Box>
                            </Grid>

                            <Grid item xs={6}  height={400} className={classes.gridContent}>
                                <Box className={classes.gridCopy}>
                                    <Typography variant='h3' fontWeight='bold' className={classes.title}>Magic Eight Ball</Typography>
                                    <Typography variant='body1' fontWeight='bold' mt={1} className={classes.bodyText}>Enter your name and ask the magic eight ball for whatever information you desire. A faux loading component temporarily displays once your question is submitted to add suspense. The application is mobile-friendly and includes front-end validations.</Typography>
                                    <Button href='https://magic-eight-ball-ashy.vercel.app/' target='_blank' variant='contained' color='secondary'sx={{height:57, width:190, mt:5}}>Launch Site</Button>
                                </Box>
                            </Grid>

                            <Grid item xs={6} height={400} bgcolor='primary.main' sx={{display:'flex', alignItems:'center', justifyContent:'center'}} >
                                <img src={EightBall} alt="Screenshot of Christopher Dissette's Magic 8 Ball project" className={classes.webPhoto} />
                            </Grid>

                            <Grid item xs={6} height={400} bgcolor='primary.main' sx={{display:'flex', alignItems:'center', justifyContent:'center'}} >
                                <img src={Water} alt="Screenshot of Christopher Dissette's Drink Water project" className={classes.webPhoto} />
                            </Grid>
                            
                            <Grid item xs={6}  height={400} className={classes.gridContent}>
                                <Box className={classes.gridCopy}>
                                    <Typography variant='h3' fontWeight='bold' className={classes.title}>Landing Page</Typography>
                                    <Typography variant='body1' fontWeight='bold' mt={1} className={classes.bodyText}>Time to stay hydrated! Select a time interval to start a countdown timer that will run indefinitely (until you click the restart button). At the end of the countdown, the timer will automatically reset and an audio cue will remind you to drink water. Run the application in the background or stick around to read some facts about hydration in the step menu.</Typography>
                                    <Button href='https://drink-water-ashen.vercel.app/' target='_blank' variant='contained' color='secondary'sx={{height:57, width:190, mt:5}}>Launch Site</Button>
                                </Box>
                            </Grid>
                        </Grid>
                        <Box display='flex' justifyContent='center'>
                            <Button color='secondary' onClick={handleOpenMenu} endIcon={<ArrowDropDownIcon sx={{color:'white'}} />} aria-controls='menu' variant='contained' sx={{height:75, width:500, mt:5}} >
                                Other Projects
                            </Button>
                            <Menu id='menu' anchorEl={anchorEl} open={open} onClose={handleCloseMenu} MenuListProps={{'aria-labelledby': 'basic-button'}}>
                                <a href='https://brewery-api.vercel.app/' target="_blank" style={{textDecoration:'none'}}>
                                <MenuItem onClick={handleCloseMenu}>
                                    Brewery API
                                </MenuItem>
                                </a>
                                <a href="https://pricing-page-eight.vercel.app/" target="_blank" style={{textDecoration:'none'}}>
                                <MenuItem onClick={handleCloseMenu} sx={{width:500}}>
                                    Pricing Page
                                </MenuItem>
                                </a>
                                <a href="https://box-generator.vercel.app/" target="_blank" style={{textDecoration:'none'}}>
                                <MenuItem onClick={handleCloseMenu}>
                                    Box Generator
                                </MenuItem>
                                </a>
                                <a href="https://login-page-chicago.vercel.app/" target="_blank" style={{textDecoration:'none'}}>
                                <MenuItem onClick={handleCloseMenu}>
                                    Login Page
                                </MenuItem>
                                </a>
                                <a href='https://island-landing-page.vercel.app/' target="_blank" style={{textDecoration:'none'}}>
                                <MenuItem onClick={handleCloseMenu}>
                                    Landing Page
                                </MenuItem>
                                </a>
                            </Menu>
                        </Box>
                    </Box>
                </Box>
    )
}

export default PortfolioTablet
