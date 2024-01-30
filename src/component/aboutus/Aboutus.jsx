import { Box, Button, Container, Grid, Stack, Typography, Modal, IconButton } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import ContactForm from '../ContactForm/ContactForm';
import aboutUs from "../../assets/banner/aboutUs.png"
export default function Aboutus() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const closeIconComponent = (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <IconButton onClick={handleClose}>
        <CloseIcon />
      </IconButton>
    </Stack>
  );
  return (
    <>
      <Box sx={{ background: "var(--color-blue)" }}>
        <Container sx={{ py: 5 }}>
          <Typography color={"#fff"} fontWeight={"bold"} variant='h3' textAlign={"center"}>About Us</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3} sx={{
              display: {xs: 'inline-block',md: 'none',},}}data-aos="fade-up">
              <Box sx={{ justifyContent: "center", alignItems: "center", textAlign: "center", display: "flex" }}>
                <img src={aboutUs} alt="" />
              </Box>
            </Grid>
            <Grid item sm={12} md={6} lg={6} xl={6} xs={12} sx={{ color: "white", }} >
              <Typography sx={{ mt: 2, textAlign: 'justify', }} className='font-style'>Welcome to UTL IT SOLUTION, where technology meets innovation! With a Successful track record of three years in the dynamic realm of Information Technology. Since then, we have been committed to delivering excellence and value through our services. Our team comprises passionate tech enthusiasts and experts who thrive on challenges. From designing user-friendly websites to developing robust software solutions and offering unparalleled IT support. We invite you to explore our services and embark on a transformative journey with us. We believe in forging strong relationships by listening attentively to our clients' needs and providing tailored solutions that exceed expectations. </Typography>
              <Button variant="contained" sx={{
                mt: 3,
                p: 1,
                background: "var(--color-white)",
                fontWeight: "bold",
                textTransform: 'capitalize',
                borderColor: 'var(--color-pink)',
                color: 'var(--color-pink)',
                borderRadius: "30px",
                '&:hover': {
                  borderColor: 'var(--color-pink)',
                  color: 'var(--color-pink)',
                  background: "#fff",},}}
                onClick={handleOpen}>Quick Contact</Button>
            </Grid>
            <Grid item sm={12} md={6} lg={6} xl={6} xs={12} sx={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              position: 'relative',
              display: {
                xs: 'none',
                md: 'inline-block',}}}>
              <img src={aboutUs} alt=""/>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: "10px", width: '90%',maxWidth:'600px',}}>
          <Container>
            <ContactForm closeIcon={closeIconComponent} />
          </Container>
        </div>
      </Modal>
    </>
  )
}
