import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Header from './Header';
import Footer from './Footer';
import './Home.css';

const tiers = [
  {
    title: 'Vision',
    description: [
      "Our vision is a tapestry of global learners thriving in an ecosystem empowered by seamless online teaching and learning experiences.",
    ],
    styles: {
      backgroundColor: '#0A0C41', // Brown background color
      color: 'white', // White text color
    },
  },
  {
    title: 'About Us',
    description: [
      "Welcome to the heart of learning! We are the architects of empowerment, crafting an enriching online platform. Unleash your potential with us.",
    ],
    styles: {
      backgroundColor: '#0A0C41', // Brown background color
      color: 'white', // White text color
    },
  },
  {
    title: 'Mission',
    description: [
      "Our mission is to weave connections between learners and educators, fostering a dynamic online learning community for all to thrive.",
    ],
    styles: {
      backgroundColor: '#0A0C41', // Brown background color
      color: 'white', // White text color
    },
  },
];

const defaultTheme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />

      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
       <Typography
  component="h1"
  variant="h2"
  align="center"
  color="text.primary"
  gutterBottom
  className="animate-text"
>
  BOOK <span className="highlight-text">MY</span> TEACHER
</Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Your gateway to seamless education. Whether you're a student seeking knowledge or an educator ready to inspire, our platform simplifies scheduling, connects you with top instructors, and makes learning interactive. Join the learning revolution today!
        </Typography>
      </Container>

      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card sx={tier.styles}>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[400]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      {tier.price}
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      
      {/* Footer */}
      {/* Add your footer component here */}
      {/* End footer */}
    </ThemeProvider>
  );
}
