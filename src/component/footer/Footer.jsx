import { Box, Container, Grid, IconButton, List, ListItem, ListItemText, Stack, Typography } from '@mui/material';
import React from 'react';
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <>
      <Box sx={{ background: "var(--color-dark)", color: "#fff", }}>
        <Container maxWidth="xl">
          <Grid container py={2}>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton>
                </IconButton>
                <Typography variant='h5'> Our Services </Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton sx={{ color: "#fff" }}>
                  <NavigateNextIcon />
                </IconButton>
                <Typography component={Link} sx={{ color: "#fff", '&:hover': { color: "var(--color-pink)" } }} className='cursor-pointer'>React.js  </Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton sx={{ color: "#fff" }}>
                  <NavigateNextIcon />
                </IconButton>
                <Typography sx={{ color: "#fff", '&:hover': { color: "var(--color-pink)" } }} className='cursor-pointer'>Mobile App Consultancy</Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton sx={{ color: "#fff" }}>
                  <NavigateNextIcon />
                </IconButton>
                <Typography sx={{ color: "#fff", '&:hover': { color: "var(--color-pink)" } }} className='cursor-pointer'>

                  React Native App Development
                </Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton sx={{ color: "#fff" }}>
                  <NavigateNextIcon />
                </IconButton>
                <Typography sx={{ color: "#fff", '&:hover': { color: "var(--color-pink)" } }} className='cursor-pointer'>

                  Software Quality Assurance
                </Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton sx={{ color: "#fff" }}>
                  <NavigateNextIcon />
                </IconButton>
                <Typography sx={{ color: "#fff", '&:hover': { color: "var(--color-pink)" } }} className='cursor-pointer'>

                  SEO Service
                </Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton sx={{ color: "#fff" }}>
                  <NavigateNextIcon />
                </IconButton>
                <Typography sx={{ color: "#fff", '&:hover': { color: "var(--color-pink)" } }} className='cursor-pointer'>

                  UI/UX Designing
                </Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton sx={{ color: "#fff" }}>
                  <NavigateNextIcon />
                </IconButton>
                <Typography sx={{ color: "#fff", '&:hover': { color: "var(--color-pink)" } }} className='cursor-pointer'>

                  Wearable App Development
                </Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>

                <IconButton sx={{ color: "#fff" }}>
                  <NavigateNextIcon />
                </IconButton>
                <Typography sx={{ color: "#fff", '&:hover': { color: "var(--color-pink)" } }} className='cursor-pointer'>

                  Web Development
                </Typography>
              </Stack>

            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton>
                </IconButton>
                <Typography variant='h5'>Industries We Serve</Typography>

              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton sx={{ color: "#fff" }}>
                  <NavigateNextIcon />
                </IconButton>
                <Typography sx={{ color: "#fff", '&:hover': { color: "var(--color-pink)" } }} className='cursor-pointer'>
                  Social Networking
                </Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton sx={{ color: "#fff" }}>
                  <NavigateNextIcon />
                </IconButton>
                <Typography sx={{ color: "#fff", '&:hover': { color: "var(--color-pink)" } }} className='cursor-pointer'>
                  Real Estate
                </Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton sx={{ color: "#fff" }}>
                  <NavigateNextIcon />
                </IconButton>
                <Typography sx={{ color: "#fff", '&:hover': { color: "var(--color-pink)" } }} className='cursor-pointer'>
                  Political
                </Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton sx={{ color: "#fff" }}>
                  <NavigateNextIcon />
                </IconButton>
                <Typography sx={{ color: "#fff", '&:hover': { color: "var(--color-pink)" } }} className='cursor-pointer'>
                  News App
                </Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton sx={{ color: "#fff" }}>
                  <NavigateNextIcon />
                </IconButton>
                <Typography sx={{ color: "#fff", '&:hover': { color: "var(--color-pink)" } }} className='cursor-pointer'>
                  E-Commerce
                </Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton sx={{ color: "#fff" }}>
                  <NavigateNextIcon />
                </IconButton>
                <Typography sx={{ color: "#fff", '&:hover': { color: "var(--color-pink)" } }} className='cursor-pointer'>
                  Finance
                </Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton sx={{ color: "#fff" }}>
                  <NavigateNextIcon />
                </IconButton>
                <Typography sx={{ color: "#fff", '&:hover': { color: "var(--color-pink)" } }} className='cursor-pointer'>
                  Sports
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton sx={{ color: "#fff" }}>
                </IconButton>
                <Typography variant='h5'>Contact Information </Typography>

              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton sx={{ color: "#fff" }}>
                  <PlaceIcon />
                </IconButton>
                <Typography>5th floor, tower1 ABC, Noide 135.</Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton sx={{ color: "#fff" }}>
                  <CallIcon />
                </IconButton>
                <Typography>+91 9311337158</Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton sx={{ color: "#fff" }}>
                  <EmailIcon />
                </IconButton>
                <Typography>info@utlsolution.com</Typography>
              </Stack>
            </Grid>
          </Grid>
          <Box sx={{ py: 3 }}>
            <Stack>
              <Typography component={Link} to="/privacyPolicy" sx={{ textAlign: "center", color: "#fff", '&:hover': { color: "var(--color-pink)" } }} className='cursor-pointer'>Privacy Policy</Typography>
            </Stack>
            <Stack>
              <Typography component={Link} to="/privacyPolicy" sx={{ textAlign: "center", color: "#fff",  }} className='cursor-pointer'>© Copyrights 2019-2024 UTL IT Solution. All Rights Reserved.</Typography>
            </Stack>
          </Box>
        </Container>
      </Box>
    </>
  );
}
