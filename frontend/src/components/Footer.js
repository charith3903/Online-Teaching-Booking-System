import React from "react";
import { Typography, Container, Link, Grid, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Footer = () => {
  const footers = [
    {
      title: 'Company',
      description: ['Team', 'History', 'Contact us', 'Locations'],
    },
    {
      title: 'Features',
      description: [
        'Cool stuff',
        'Random feature',
        'Team feature',
        'Developer stuff',
        'Another one',
      ],
    },
    {
      title: 'Resources',
      description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    },
    {
      title: 'Legal',
      description: ['Privacy policy', 'Terms of use'],
    },
  ];

  const socialMediaIcons = [
    {
      icon: <FacebookIcon />,
      link: 'https://www.facebook.com/',
    },
    {
      icon: <TwitterIcon />,
      link: 'https://twitter.com/',
    },
    {
      icon: <LinkedInIcon />,
      link: 'https://www.linkedin.com/',
    },
  ];

  return (
    <>
      <Container
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
          backgroundColor: '#1B1C2C', // Set background color to #1B1C2C
          color: 'white', // Set text color to white
          textAlign: 'center', // Center align the content
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="inherit">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}

          {/* Social Media Icons */}
          <Grid item xs={6} sm={3}>
            <Typography variant="h6" gutterBottom>
              Connect with us
            </Typography>
            <div>
              {socialMediaIcons.map((socialMedia) => (
                <IconButton key={socialMedia.link} href={socialMedia.link} color="inherit">
                  {socialMedia.icon}
                </IconButton>
              ))}
            </div>
          </Grid>
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </>
  );
};

export default Footer;
