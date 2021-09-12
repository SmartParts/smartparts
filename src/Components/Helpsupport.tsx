import React from 'react';
import {Box, Grid, TextField} from '@material-ui/core';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles((theme)=>({

    helpsupport: {
        position: 'absolute',
        width: 900,
        marginBottom: "90px",
         backgroundColor: "white",
        border: '2px solid #000',
        // boxShadow: theme.shadows[5],
        // padding: theme.spacing(2, 4, 3),
        
      },
      feedbackbtn: {
        backgroundColor: "#8517FF",
        color: "#ffff",
    },
}));


export default function Helpsupport() {
    const  classes= useStyles();
    const [modalStyle] = React.useState(getModalStyle);
   
    function rand() {
        return Math.round(Math.random() * 20) - 10;
      }
    function getModalStyle() {
        const top = 50 + rand();
        const left = 50 + rand();
     
        return {
         top: `${top}%`,
          left: `${left}%`,
          transform: `translate(-${top}%, -${left}%)`,
        };
      }
     
    
    const body = (
        <Box style={modalStyle} className={classes.helpsupport} justifyContent="flex" alignItems="center">
          <Box style={{display: "flex", justifyContent: "center"}}> 
          <h2 id="simple-modal-title">Help & Support</h2>
          </Box>
          <Box >
          <form  noValidate autoComplete="off">
          <Box style={{display: "flex", justifyContent: "center"}}>
          <TextField id="outlined-basic" style={{marginBottom: "10px"}} label="Email" variant="outlined" />
          </Box>
          <Box style={{display: "flex", justifyContent: "center"}}>
          <TextField id="outlined-basic"  style={{marginBottom: "10px"}} label="Name" variant="outlined" />
   </Box>
   <Box style={{display: "flex", justifyContent: "center"}}>
          <TextField id="outlined-basic"  style={{marginBottom: "10px"}} label="Comment" variant="outlined" />
          </Box>
          <Box style={{display: "flex", justifyContent: "center"}}>
          <TextField id="outlined-basic"  style={{marginBottom: "10px"}} label="Question Type" variant="outlined" />
       </Box>
       <Box style={{display: "flex", justifyContent: "center"}}>
          
          <Button  className={classes.feedbackbtn} style={{width: "30%"}}>Send Feedback</Button>
          </Box>
          </form>
          </Box>
          <Box style={{margin: "10px"}}>
              <Card style={{backgroundColor: "black"}}>
                  <CardActions></CardActions>
                  <CardContent><span style={{color: "white"}}> Note <br /><br />
                       Our customer service team is available 24hrs everyday. 
                       Please, write to Email: smartparts07@gmail.com or use Contact Form, Chat, Support Form
                       available on website and application.
                       <br />
                       <br />
                       Smart parts exports customer care number: +91-88264 77077
                       <br />
                       <br />
                       !WARNING! Do not call any other numbers except mentioned above.Please note, Smart parts exports
                       never calls & asks for bank account details, UPI id, OTP, etc. from the customer. We urge you not to
                       share such information with anyone. In case of any fraudulent transaction,immediately notify your bank.
                       <br />
                       <br />
                       Our head office address:
                       <br />
                       <br />
                       33, Sri Nagar Colony Rd, Ashok Vihar Phase 3, Sri Nagar Colony,
                       Sidora Kalan Village, Ashok Vihar, New Delhi, Delhi 110052</span></CardContent>
              
              </Card>
          </Box>
        </Box>
      );
      const [open, setOpen] = React.useState(false);
      const handleOpen = () => {
        setOpen(true);
      };
   
      const handleClose = () => {
        setOpen(false);
      };     
    return(
        <Box style={{marginBottom: "60px"}}>
        <Box style={{ display: "flex", justifyContent: "center" }}>
            <Button variant="outlined" style={{ width: "45%" }} onClick={handleOpen}>
                Help and support
            </Button>
        </Box>
        <Modal open={open} onClose={handleClose} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
            {body}
        </Modal>
        <Grid container>
            <Grid item xs={3}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={3}></Grid>
        </Grid>
    </Box>        
    )
}