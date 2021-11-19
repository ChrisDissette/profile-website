import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import ButtonGroup from '@mui/material/ButtonGroup';
import { navigate } from '@reach/router'





const Header = () => {
    return (
        <div>
          <Box id='top-page' sx={{ flexGrow: 1 }} px={{xs:1, sm:3, md:15, lg:5, xl:20}}>
            <AppBar position="static" elevation={0} sx={{bgcolor:'common.white'}}>
              <Toolbar sx={{height:86}} >
                <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
                    <Button color="inherit" sx={{fontSize:20, fontWeight:'bold'}} onClick={() => navigate('/')}>CD</Button>
                </Typography>
                <ButtonGroup  size='medium' variant='text'>
                  <Button color="inherit" onClick={() => navigate('/')}>Home</Button>
                  <Button color="inherit" onClick={() => navigate('/about')}>About</Button>
                  <Button color="inherit" onClick={() => navigate('/work')}>Work</Button>
                  <Button color="inherit" onClick={() => navigate('/contact')}>Contact</Button>
                </ButtonGroup>
              </Toolbar>
            </AppBar>
          </Box>
        </div>
    )
}

export default Header
