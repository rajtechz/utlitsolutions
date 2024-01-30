import React, { useEffect } from 'react'
import "./weAre.css"
import director from "../../assets/director.jpeg"
import { Avatar, Box, Card, CardMedia, Container, Grid, Paper, Typography, } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import 'aos/dist/aos.css';
import career from "../../assets/career.png"
import Aos from 'aos'
export default function WhatWeAre() {
    useEffect(() => {
        Aos.init({ duration: 2000 })

    }, [])

    const items = [
        {
            name: "Aarav Rajput ",
            testimonial: "UTL IT SOLUTION provided an outstanding web design service. The team focused on creating a user-friendly interface that perfectly suits my business needs. The site looks professional, loads quickly, and is easy to navigate. ",
        },
        {
            name: "Arjun Singh",
            testimonial: "I needed a website for my startup, and UTL IT SOLUTION Web Developers delivered exactly what I wanted within the promised timeframe. The entire process was smooth, and their attention to detail was impressive. I appreciate their efficiency",
        },
        {
            name: "Bhavesh Rawal ",
            testimonial: "UTL IT SOLUTION brought a creative touch to my website. The design is not only visually appealing but also functional. They incorporated innovative features that set my site apart. Kudos to the team for their fresh and modern approach",
        },


    ];
    return (
        <>
            <Container maxWidth="xl" sx={{ my: 5 }} data-aos="fade-up">
                <Box maxWidth="xl" sx={{
                    background: "rgba(209, 222, 234, 0.5)",
                    p: 3,
                    borderRadius: "20px",
                    border: "2px solid #fff"
                }}>
                    <Box >

                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }} >
                                <Box className="swing-up-down" data-aos="fade-up">
                                    <img src={career} alt="Director" />
                                </Box>
                            </Grid>
                            <Grid xs={12} sm={12} md={6} lg={6} xl={6} >
                                <Box data-aos="fade-up">
                                    <Box sx={{ justifyContent: "center", alignItems: "center", display: "flex", py: 2 }}>
                                        <Typography variant='h3' fontWeight={"bold"}>What We Are</Typography>
                                    </Box >
                                    <Box sx={{ px: 3, }}>
                                        <Typography className='font-style'>UTL IT Solutions is a company that helps make technology work smoothly for businesses. We specialize in providing IT solutions, which means we find smart ways to solve problems using computers and software. Imagine your computer or phone facing a challenge – whether it's slow performance, security concerns, or just figuring out the best software for your needs. That's where we step in!

                                            At UTL IT Solutions, our team of experts is like a tech superhero squad. We work hard to understand your unique needs and then use our knowledge to find the perfect technology solutions for you. It's like having a friend who knows everything about computers and can fix any tech hiccup.

                                            Whether you're a small business trying to set up a reliable computer network or an individual looking for help with your laptop, we've got your back. From troubleshooting problems to suggesting the latest and greatest tech tools, we're here to make your tech life simpler and more efficient. UTL IT Solutions – where technology meets simplicity for a smoother, hassle-free experience!   </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box >
            </Container>
            <Container maxWidth="xl" sx={{ my: 5 }} data-aos="fade-up">
                <Box maxWidth="xl" sx={{
                    background: "rgba(209, 222, 234, 0.5)",
                    p: 3,
                    borderRadius: "20px",
                    border: "2px solid #fff"
                }}>
                    <Box >

                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
                                <Paper data-aos="fade-up">
                                    <Card style={{ height: "500px", maxWidth: 400, }}>
                                        <CardMedia
                                            component="img"
                                            alt="Director"
                                            height="auto"
                                            image={director}
                                            className='imageStyle'
                                        />
                                    </Card>
                                    <Box my={2} >
                                        <Typography variant='h5' fontWeight={"bold"}>
                                            Director
                                        </Typography>
                                        <Typography variant='h5' fontWeight={"bold"}>
                                            Mr. Anurag Pratap Rai
                                        </Typography>
                                    </Box>
                                </Paper>

                            </Grid>
                            <Grid xs={12} sm={12} md={6} lg={6} xl={6} >
                                <Box data-aos="fade-up">
                                    <Box sx={{ justifyContent: "center", alignItems: "center", display: "flex", py: 2 }}>
                                        <Typography variant='h3' fontWeight={"bold"}>Our Vision</Typography>
                                    </Box >
                                    <Box sx={{ px: 3, }}>
                                        <Typography className='font-style'>
                                            Welcome to UTL IT SOLUTION, where technology meets affordability. We pride ourselves on delivering top-notch IT solutions at prices that won't break the bank. Our mission is simple: providing cutting-edge services while ensuring customer satisfaction is our priority. With a team of dedicated professionals, we believe in making technology accessible to all. Whether it's web development, software solutions, or IT support, we've got you covered. At  UTL IT SOLUTION, we understand the value of your investment and strive to deliver quality without compromising your budget. Join us in the journey of seamless, affordable, and customer-centric IT services. Your satisfaction is our success.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box >
            </Container>
            <Container data-aos="fade-up"
                data-aos-duration="3000" maxWidth="xl" sx={{ mt: 5 }}>
                <Box maxWidth="xl" sx={{
                    background: "rgba(209, 222, 234, 0.5)",
                    p: 3,
                    borderRadius: "20px",
                    border: "2px solid #fff"
                }}>
                    <Box >
                        <Box sx={{ justifyContent: "center", alignItems: "center", display: "flex", py: 3 }}>
                            <Typography variant='h3' fontWeight={"bold"}>Testimonials</Typography>
                        </Box>
                        <Box data-aos="fade-up">
                            <Box my={5} sx={{ width: "100%", maxWidth: "800px", marginX: "auto" }}>
                                <Carousel
                                    autoPlay={true}
                                    animation="slide"
                                    indicators={true}
                                    navButtonsAlwaysVisible={true}
                                    cycleNavigation={true}>
                                    {items.map((item, index) => (
                                        <Box key={index} sx={{ display: 'flex', justifyContent: "center", alignItems: "center", gap: 2 }}>
                                            <Box>
                                                <Box sx={{
                                                    p: 2,
                                                }}>
                                                    <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", }}>
                                                        <Avatar sx={{ width: 100, height: 100, fontSize: 40 }}>
                                                            {item.avatar}
                                                        </Avatar>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", mt: 2 }}>

                                                    </Box>
                                                    <Typography variant='h3' sx={{ textAlign: "center", m: 2 }}>
                                                        {item.name}
                                                    </Typography>
                                                    <Typography sx={{ fontSize: "18px", }} className='font-style'>
                                                        {item.testimonial}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    ))}
                                </Carousel>
                            </Box>
                        </Box>
                    </Box>
                </Box >
            </Container>
        </>
    )
}
