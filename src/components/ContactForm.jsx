import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import emailjs from 'emailjs-com';
import {useRef} from 'react'



const useStyles = makeStyles({
    title: {
        fontFamily: 'playfair'
    },
});



const ContactForm = () => {

    const form = useRef()

    const classes = useStyles();


    const sendEmail = (event) => {
        event.preventDefault();
        emailjs.sendForm('gmail', 'template1', form.current, 'user_zoqItUHbFib8GrZmQADoa')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
        });
        alert("Thanks for reaching out! I'll be in touch as soon as I can.")
        event.target.reset()
    };

    return (
        
            <Box minHeight='90vh' px={{xs:2, sm:2, md:7, lg:12}}>
                <Box width='100%' height={150} mt={5} mb={{xs:0, sm:0, md:5, lg:5}} display='flex' alignItems='center' justifyContent={{xs:'center', sm:'center', md:'flex-start', lg:'flext-start'}}>
                    <Typography variant='h2' fontWeight='bold' className={classes.title} >Let's get in touch</Typography>
                </Box>
                <Box   display='flex' flexDirection={{xs:'column-reverse', sm:'column-reverse', md:'row', lg:'row'}} px={5}>

                    {/* Contact Info */}

                    <address>
                        <Box height={{xs:425, sm:425, md:450, lg:450}} width={{xs:'100%', xm:'100%', md:'50%', lg:'50%'}} display='flex' flexDirection='column' alignItems='flex-start' justifyContent='center' >
                            <Typography className={classes.title} variant='h5' fontWeight='bold' gutterBottom>
                                LinkedIn
                            </Typography>
                            <Link href="https://www.linkedin.com/in/christopher-dissette-aa8371b3" target='_blank' variant='h5' color='secondary.main' gutterBottom underline='hover'>
                                linkedin.com/christopherdissette
                            </Link>
                            <Typography className={classes.title} variant='h5' fontWeight='bold' gutterBottom mt={2}>
                                Twitter
                            </Typography>
                            <Link href="https://twitter.com/CDissetteDev" target='_blank' variant='h5' color='secondary.main' gutterBottom underline='hover'>
                                @chrisdissettedev
                            </Link>
                            <Typography className={classes.title} variant='h5' fontWeight='bold' gutterBottom mt={2}>
                                GitHub
                            </Typography>
                            <Link href="https://github.com/ChrisDissette" target='_blank' variant='h5' color='secondary.main' gutterBottom underline='hover'>
                                github.com/chrisdissette
                            </Link>
                            <Box height='100%' width='100%' display='flex' justifyContent='center' alignItems='center'>
                                <Typography variant='h5' fontStyle='italic' sx={{mt:6}}>
                                    I look forward to hearing from you!
                                </Typography>
                            </Box>
                        </Box>
                    </address>

                    {/* Contact Form */}

                    <Box height={{xs:425, sm:425, md:450, lg:450}} width={{xs:'100%', xm:'100%', md:'50%', lg:'50%'}} display='flex' flexDirection='column'>
                        <form onSubmit={sendEmail} ref={form}>
                            <FormControl fullWidth>
                                <Typography variant='h5' textAlign='center' fontWeight='bold' className={classes.title}>
                                    Send me a note!
                                </Typography>
                                <TextField sx={{mt:2}} label='Enter Your Name' color='secondary' focused name='name' required>

                                </TextField>
                                <TextField sx={{mt:2}} label='Enter Your Email' color='secondary' focused name='email' required>

                                </TextField>
                                <TextField multiline rows={4} sx={{mt:2}} label='Your Message' color='secondary' focused name='message' required>

                                </TextField>

                                <Button type='submit' variant='contained' sx={{mt:2}} color='secondary'>
                                    Send Message
                                </Button>
                            </FormControl>
                        </form>
                    </Box>
                </Box>
            </Box>
    )
}

export default ContactForm
