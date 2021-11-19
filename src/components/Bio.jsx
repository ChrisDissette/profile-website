import Typography from '@mui/material/Typography';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';



const Bio = () => {
    return (
        <div>
            
            <Typography variant='h2' gutterBottom>
                Hey, I'm Chris <span className='emoji'>👋</span> 
            </Typography>

            <Typography variant='body1'>
                I'm a recent coding bootcamp graduate who is passionate about front-end development
            </Typography>
            <br />
            <Typography variant='body1'>
                Technologies I've Dabbled In:
                <ul>
                    <li>Html</li>
                    <li>Css</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Material UI</li>
                    <li>Bootstrap</li>
                    <li>Tailwind CSS</li>
                    <li>Python</li>
                    <li>Django</li>
                    <li>Flask</li>
                    <li>Git/Github</li>
                    <li>Wix</li>
                    <li>WordPress</li>
                    <li>.Net</li>
                    <li>SQL, SQL Lite</li>
                    <li>MongoDB</li>
                </ul>
                <Divider />
            </Typography>
        </div>
    )
}

export default Bio
