import React from 'react';
import { Box, } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { data } from "../../assets/data"
import "aos/dist/aos.css"
import "./home.css"
import WhatWeAre from '../whatWeAre/WhatWeAre';
import OurService from './ourService/OurService';
const Home = () => {
    return (
        <>
            <Box className="main" >
                <Carousel
                    animation="slide"
                    timeout={500}
                    fullHeightHover={true}
                    indicators={false}
                    navButtonsAlwaysVisible={true}
                    cycleNavigation={true}
                    navButtonsProps={{ style: { color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)' } }}
                    sx={{ width: '100%', marginBottom: 2 }}>
                    {data.map((slide, index) => (
                        <Box key={index}>
                            <img src={slide.image} alt="" />
                        </Box>
                    ))}
                </Carousel>
                <Box py={5}>
                    <OurService />
                    <WhatWeAre />
                </Box>
            </Box>
        </>
    );
};

export default Home;
