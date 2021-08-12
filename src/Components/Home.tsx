import React, {useState} from 'react';
import Carousel from 'react-elastic-carousel';
import {Box,Typography,Grid,Paper,Divider} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {green} from "@material-ui/core/colors";
import CardMedia from '@material-ui/core/CardMedia';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import image2 from '../image/logo2.png';
import image3 from '../image/aboutus.jpg';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import {Link} from 'react-router-dom';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import logo from '../image/logo22.png';
import brand1 from '../image/brand1.png';
import ShowMoreText from "react-show-more-text";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Footer from './Footer';
import Collapse from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Avatar from '@material-ui/core/Avatar';
import EmailIcon from '@material-ui/icons/Email';
import maintainanceimg from '../image/home/Maintenance Service Parts.svg';
import airconditioningimg from '../image/home/Air Conditioning.svg';
import beltsimg from '../image/home/Belts Chains and Rollers.svg';
import bodyimg from '../image/home/Body.svg';
import breaksystemimg from '../image/home/Brake System.svg';
import engineimg from '../image/home/Engine.svg';
import clutchimg from '../image/home/Clutch System.svg';
import enginecoolingimg from '../image/home/Engine Cooling System.svg';
import exhaustsystemimg from '../image/home/Exhaust System.svg';
import filtersimg from '../image/home/Filters.svg';
import fuelsupplyimg from '../image/home/Fuel Supply System.svg';
import gasketsimg from '../image/home/Gaskets and Sealing Rings.svg';
import ignitionimg from '../image/home/Ignition and Glowplug System.svg';
import interiorimg from '../image/home/Interior and comfort.svg';
import lighteningimg from '../image/home/Lighting.svg';
import oilsimg from '../image/home/Oils and Fluids.svg';
import pipesimg from '../image/home/Pipes and Hoses.svg';
import repairkitsimg from '../image/home/Repair Kits.svg';
import sensorsimg from '../image/home/Sensors Relays and Control units.svg';
import steeringimg from '../image/home/Steering.svg';
import suspensionimg from '../image/home/Suspension and Arms.svg';
//import Slider from "react-slick";
import boschimg from '../image/brands/Bosch.svg';
import hyundaiimg from '../image/brands/Hyundai Xteer.svg';
import Valeoimg from '../image/brands/Valeo.svg';
import donaldsonimg from '../image/brands/Donaldson.svg';
import ZFimg from '../image/brands/Zf.svg';
import Delphiimg from '../image/brands/Delphi.svg';
import wabcoimg from '../image/brands/Wabco.svg';
import mandoimg from '../image/brands/Mando.svg';
import ngkimg from '../image/brands/Ngk.svg';
import lumaximg from '../image/brands/Lumax.svg';
import mannfilterimg from '../image/brands/Mann Filters.svg';
import knorrimg from '../image/brands/Knorr Bremse.svg';
import fleetguardimg from '../image/brands/Fleetguard.svg';
import nissanimg from '../image/brands/Nissan.svg';
import Hyundaiimg from '../image/brands/Hyundai.svg';
import suzukiimg from '../image/brands/Suzuki.svg';
import fordimg from '../image/brands/Ford.svg';
import tataimg from '../image/brands/Tata.svg';
import mahindraimg from '../image/brands/Mahindra.svg';
import hondaimg from '../image/brands/Honda.svg';
import renaultimg from '../image/brands/Renault.svg';
import manimg from '../image/brands/Man.svg';
import ashokimg from '../image/brands/Ashok Leyland.svg';
import volkswagenimg from '../image/brands/volkswagen.svg';
import cheveroletimg from '../image/brands/Chevrolet.svg';
import Item from './Item';


const useStyles = makeStyles((theme)=>({
    slider: {
        fontFamily: 'sans-serif',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
    },
    imagesize:{
        width: "1200px",
        margin: "auto",
    },
    bodyStyle:{
        marginTop:"10px"
    },
    innerPaper:{
        width:"100%",
        padding:"7px",
        margin:"4px 0px 20px 5px"
    },
   
    searchcategory: {
       margin: "10px",
       padding: "10px",
        fontSize: 32,
        fontFamily: 'nano-sans',
      marginTop: "66px",
    },
    category: {
        margin: "20px",
        height: "20%",
        backgroundColor: "#8517FF",
        padding: "50px",
        borderRadius: "25px",
    },
     media: {
        height: 240,
        paddingTop: '56.25%', // 16:9

      },
      hotseller: {
          flexGrow: 1,
      },
      margin: {
        margin: theme.spacing(1),
      },
      brandbtn: {
          width: "100%",
      },
      buttons: {
          width: "90%",
          backgroundColor: 'white',
    color: 'black',
    borderRadius: "25px",
    '&:hover': {
      backgroundColor: '#8517FF',
      color: '#3c52b2',
      borderRadius: "25px",
    },
        
          //   '& $appearItem': {
        //     display: "none",
        //  },
        //   '&:hover $appearItem': {
        //     display: "block",
        //  },
      },
      appearItem: {
          height: 140,
      },
       space: {
           margin: theme.spacing(3),
           borderRadius: "10px",
         },
      padding: {
          padding: "60px",
      },
      articleheading: {
          margin: "10px",
          padding: "10px",
          fontSize: 32,
          fontFamily: 'nano-sans',

      },
      article: {
          marginLeft: "65px",
          marginRight: "45px", 

          fontSize: 32,
          fontFamily: 'nano-sans',
          borderRadius: "25px",
        //   backgroundColor: "white",
        //   color: "black",
        //   '&: hover':{
        //     backgroundColor: "#8517FF",
        //     color: "white",
        //   },
      },
      articleimage: {
          height: 240,
      },
      paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
      border: {
          borderRadius: "25px",
          marginLeft: "10px",
          marginRight: "10px",
      },
      feedbackbtn: {
          backgroundColor: "#8517FF",
          color: "#ffff",
      },
      countries: {
          backgroundColor: 'white',
          borderRadius: "25px",

      },

      avatar: {
        backgroundColor: theme.palette.grey[50],
        border: `1px solid ${theme.palette.info.main}`,
        color: theme.palette.info.main,
        margin: "50px",

      },


      root: {
        height: 180,
      },
      container: {
        display: 'flex',
      },
    
      svg: {
        width: 100,
        height: 100,
      },
      polygon: {
        fill: theme.palette.common.white,
        stroke: theme.palette.divider,
        strokeWidth: 1,
      },
      helpsupport: {
        position: 'absolute',
        width: 900,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        
      },
      
       
}));

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

const theme = createMuiTheme({
    palette : {
        primary: green,
        
    },
});

const breakPoints = [
    { width: 1 ,ItemstoShow: 1},
    { width: 550 ,ItemstoShow: 2},
    { width: 700 ,ItemstoShow: 3},
    { width: 1200 ,ItemstoShow: 4},
]

export default function Home() {
    const  classes= useStyles();
    const [carmaker, setCarmaker] = React.useState('');
    const [expand, setExpand] = useState(false);
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [showImage, setShowImage] = React.useState(false);
    const [checked, setChecked] = React.useState(false);
    const [selectedbutton, setSelectedButton] = React.useState(false);
    const handlingChange = () => {
        setChecked((prev) => !prev);
      };
  const onClick = () => {
    setExpand(!expand);
  };
  const onHover = () => {
    setShowImage(!showImage);
  };
  const showbrandimages = () => {
    setSelectedButton(true);
    
};

const handleHover = () => {
    setSelectedButton(false);
};

const vehiclehover = () => {
    setSelectedButton(true);
};
  const text = "Our project was established in 2015. Over this time we have been working on our goal – to help customers and suppliers in auto car spare parts sales and communication. This advertising platform was created to make online shopping easier for both automobile owners and parts dealers. Customers get an opportunity to buy car parts online, which are branded and original. Our continuously updated catalogues are filled with replacement parts, with well-known, and highly regarded brands. This provides auto parts suppliers with the ability to offer their products, communicate with clients, and increase sales along with their market share.How do we work: key features of Smartpartsexports.com Clear and transparent offers. We do not promote any particular suppliers, all parts are sorted by producers' information and filtered by customers’ choice. Quick and competent service. If any problems occur, Smartpartsexports.com will put its best foot forward to solve issues. Easy to read catalogues, with the latest offers. Every day  new products with actual prices appear. Simple and easy-to-understand website. We created it be both useful and mobile-friendly, so our visitors can order car parts from personal computer, laptop, tablet or smartphone.3 main reasons to choose Smartpartsexports.com 1. 10 Days Assured Return. If spare part will not be applicable to your car we will initiate return process after your request. The return process is very smooth and simple.   You will get new part or money back by your choice.  2. We are creating our catalogues by collecting relevant information from the market. We are responsible for Product description and keep our Sellers responsible for  offer terms and genuinity of the product sold.  3. Free website usage. There is no additional payment for auto car spare parts buyers. Only sellers have to pay a marketing fee.";
   
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
                    Our customer service team is available from Monday to Sunday from 10:00 AM to 7:00 PM.
                    Please, write to Email: smartparts07@gmail.com or use Contact Form, Chat, Support Form
                    available on website and application.
                    <br />
                    <br />
                    Smart parts exports customer care number: 088264 77077
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
  
   const handleOpen = () => {
     setOpen(true);
   };

   const handleClose = () => {
     setOpen(false);
   };

  
   const handleChange = (event) => {
       setCarmaker(event.target.value);
     };
    return (
        
         
            <Box>
            <Box component="span">
                <Typography variant="h4" className={classes.searchcategory} >
                    Featured Products
                </Typography>
            </Box>
            <Box>
                <Grid container  style={{margin: "0px"}}>
                    
                    <Grid item md={2}>
                        <Card className={classes.border}>
                            <CardActions>
                                <CardMedia
                                  className={classes.media}
                                 
                                />
                            </CardActions>
                        </Card>
                    </Grid>
                  
                    <Grid item md={2}>
                        <Card className={classes.border}>
                            <CardActions>
                            <CardMedia
                                  className={classes.media}
                                 
                                />
                            </CardActions>
                        </Card>
                    </Grid>
                    
                    <Grid item md={2}>
                        <Card className={classes.border}>
                            <CardActions>
                            <CardMedia
                                  className={classes.media}
                                 
                                />
                            </CardActions>
                        </Card>
                    </Grid>
                    
                    <Grid item md={2}>
                        <Card className={classes.border}>
                            <CardActions>
                            <CardMedia
                                  className={classes.media}
                                 
                                />
                            </CardActions>
                        </Card>
                    </Grid>
                    
                     <Grid item md={2}>
                        <Card className={classes.border}>
                            <CardActions>
                            <CardMedia
                                  className={classes.media}
                                 
                                />
                            </CardActions>
                        </Card>
                    </Grid> 
                    <Grid item md={2}>
                        <Card className={classes.border}>
                            <CardActions>
                            <CardMedia
                                  className={classes.media}
                                 
                                />
                            </CardActions>
                        </Card>
                    </Grid> 
                 
                </Grid>
            </Box>

        
        



            <Box>
            <Typography variant="h4" className={classes.searchcategory}>
                Search By Category
            </Typography>
            </Box>
            <Box>
                
                    <Grid container>
                        <Grid item xs={5}>
                        <Box className={classes.buttons} onMouseOver={handleHover} style={{margin: "0px 65px"}}>
                    <Button variant="outlined"  style={{ width: "100%", borderRadius: "35px", padding: "15px", color: 'black'}} >
                        Oem Brands
                    </Button>
                    </Box>
                    </Grid>


                    <Grid item xs={6}>
                    <Box className={classes.buttons}  style={{marginLeft: " 65px"}}>
                    <Button variant="outlined" onClick={showbrandimages} onMouseOver={vehiclehover} style={{width: "100%",  borderRadius: "35px", padding: "15px", color: "black"}}>
                        Vehicle Brands
                    </Button>
                    </Box>
                    </Grid>
                    </Grid>
                
                {selectedbutton === false ? <div> 
                <Box  style={{margin: "25px 50px 25px 33px"}}>
                    <Grid container className={classes.appearItem} justify="space-evenly">
                    <Grid item xs={2} >
                           
                           <Box style={{width: "150px", height: "100px"}}>
                               <Link to="/brandlist">
                           <img src={boschimg} style={{width: "100%", height: "100%"}}/>
                           </Link>
                           </Box>
                          </Grid>
                        <Grid item xs={2} >
                           
                           <Box style={{width: "150px", height: "100px"}}>
                           <img src={hyundaiimg} style={{width: "100%", height: "100%"}}/>

                           </Box>
                          </Grid>
                        <Grid item xs={2} >
                           
                           <Box style={{width: "150px", height: "100px"}}>
                           <img src={Valeoimg} style={{width: "100%", height: "100%"}}/>

                           </Box>
                          </Grid>
                        <Grid item xs={2} >
                           
                           <Box style={{width: "150px", height: "100px"}}>
                           <img src={donaldsonimg} style={{width: "100%", height: "100%"}}/>

                           </Box>
                          </Grid>
                        <Grid item xs={2} >
                           
                           <Box style={{width: "150px", height: "100px"}}>
                           <img src={ZFimg} style={{width: "100%", height: "100%"}}/>

                           </Box>
                          </Grid>
                          <Grid item xs={2} >
                           
                           <Box style={{width: "150px", height: "100px"}}>
                           <img src={Delphiimg} style={{width: "100%", height: "100%"}}/>

                           </Box>
                          </Grid>
                          
                        <Grid item xs={2} >
                           
                           
                          </Grid>
                          <Grid item xs={2} >

                          </Grid>
                    </Grid>

                </Box> <Box style={{margin: "25px 50px 25px 33px"}}>
                   <Grid container className={classes.appearItem} justify="space-evenly">
                    <Grid item xs={2} >
                           
                           <Box style={{width: "150px", height: "100px"}}>
                           <img src={wabcoimg} style={{width: "100%", height: "100%"}}/>

                           </Box>
                          </Grid>
                        <Grid item xs={2} >
                           
                           <Box style={{width: "150px", height: "100px"}}>
                           <img src={mandoimg} style={{width: "100%", height: "100%"}}/>

                           </Box>
                          </Grid>
                        <Grid item xs={2} >
                           
                           <Box style={{width: "150px", height: "100px"}}>
                           <img src={ngkimg} style={{width: "100%", height: "100%"}}/>

                           </Box>
                          </Grid>
                        <Grid item xs={2} >
                           
                           <Box style={{width: "150px", height: "100px"}}>
                           <img src={lumaximg} style={{width: "100%", height: "100%"}}/>

                           </Box>
                          </Grid>
                        <Grid item xs={2} >
                           
                           <Box style={{width: "150px", height: "100px"}}>
                           <img src={mannfilterimg} style={{width: "100%", height: "100%"}}/>

                           </Box>
                          </Grid>
                        <Grid item xs={2} >
                           
                           <Box style={{width: "150px", height: "100px"}}>
                           <img src={knorrimg} style={{width: "100%", height: "100%"}}/>

                           </Box>
                          </Grid>

                        <Grid item xs={2} >

                           
                          </Grid>
                          <Grid item xs={2} >

                          </Grid>
                    </Grid>
                </Box> 
                <Box style={{margin: "25px 50px 25px 33px"}}>
                   <Grid container className={classes.appearItem} justify="space-evenly">
                    <Grid item xs={2} >
                           
                           <Box style={{width: "150px", height: "100px"}}>
                           <img src={fleetguardimg} style={{width: "100%", height: "100%"}}/>

                           </Box>
                          </Grid>
                          <Grid item xs={10}>

                        </Grid>      
                    </Grid>
                    
                </Box> 
                        </div>
                : <div >
                <Box style={{margin: "25px 50px 25px 33px"}}>
                   <Grid container className={classes.appearItem} justify="space-evenly">
                    <Grid item xs={2} >
                           
                           <Box style={{width: "150px", height: "100px"}}>
                           <img src={nissanimg} style={{width: "100%", height: "100%"}}/>

                           </Box>
                          </Grid>
                        <Grid item xs={2} >
                           
                           <Box style={{width: "150px", height: "100px"}}>
                           <img src={Hyundaiimg} style={{width: "100%", height: "100%"}}/>

                           </Box>
                          </Grid>
                        <Grid item xs={2} >
                           
                           <Box style={{width: "150px", height: "100px"}}>
                           <img src={suzukiimg} style={{width: "100%", height: "100%"}}/>

                           </Box>
                          </Grid>
                        <Grid item xs={2} >
                           
                           <Box style={{width: "150px", height: "100px"}}>
                           <img src={fordimg} style={{width: "100%", height: "100%"}}/>

                           </Box>
                          </Grid>
                        <Grid item xs={2} >
                           
                           <Box style={{width: "150px", height: "100px"}}>
                           <img src={tataimg} style={{width: "100%", height: "100%"}}/>

                           </Box>
                          </Grid>
                        <Grid item xs={2} >
                           
                           <Box style={{width: "150px", height: "100px"}}>
                           <img src={mahindraimg} style={{width: "100%", height: "100%"}}/>

                           </Box>
                          </Grid>

                        <Grid item xs={2} >
                           
                           
                          </Grid>
                          <Grid item xs={2} >

                          </Grid>
                    </Grid>
                </Box>
                <Box style={{margin: "25px 50px 25px 33px"}}>
                   <Grid container className={classes.appearItem} justify="space-evenly">
                    <Grid item xs={2} >
                           
                           <Box style={{width: "150px", height: "100px"}}>
                           <img src={hondaimg} style={{width: "100%", height: "100%"}}/>

                           </Box>
                          </Grid>
                        <Grid item xs={2} >
                           
                           <Box style={{width: "150px", height: "100px"}}>
                           <img src={renaultimg} style={{width: "100%", height: "100%"}}/>

                           </Box>
                          </Grid>
                        <Grid item xs={2} >
                           
                           <Box style={{width: "150px", height: "100px"}}>
                           <img src={manimg} style={{width: "100%", height: "100%"}}/>

                           </Box>
                          </Grid>
                        <Grid item xs={2} >
                           
                           <Box style={{width: "150px", height: "100px"}}>
                           <img src={ashokimg} style={{width: "100%", height: "100%"}}/>

                           </Box>
                          </Grid>
                        <Grid item xs={2} >
                           
                           <Box style={{width: "150px", height: "100px"}}>
                           <img src={volkswagenimg} style={{width: "100%", height: "100%"}}/>

                           </Box>
                          </Grid>
                        <Grid item xs={2} >
                           
                           <Box style={{width: "150px", height: "100px"}}>
                           <img src={cheveroletimg} style={{width: "100%", height: "100%"}}/>

                           </Box>
                          </Grid>

                        <Grid item xs={2} >
                           
                           
                          </Grid>
                          <Grid item xs={2} >

                          </Grid>
                    </Grid>
                </Box>
                </div>} 
                {/* <Modal open={open} onClose={handleClose} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
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
                <Box className={classes.buttons} style={{ display: "flex", justifyContent: "center" }}>
                    <Button variant="outlined" style={{ width: "45%" }} className={classes.space}>
                        Vehicle Brands
                    </Button>
                </Box> */}
            
        
        

        <Box component="span">
            <Typography variant="h4" className={classes.searchcategory}>
                Search By Vehicle
            </Typography>
        </Box>
        <Card className={classes.category} >
            <CardActions>
            <FormControl className={classes.margin} style={{ backgroundColor: "white", width: "20%", borderRadius: "15px" }}>
                <InputLabel id="demo-customized-select-label">Car Maker</InputLabel>
                <Select labelId="demo-customized-select-label" id="demo-customized-select" value={carmaker} onChange={handleChange}>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Hyundai</MenuItem>
                    <MenuItem value={20}>Maruti</MenuItem>
                    <MenuItem value={30}>Zen</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.margin} style={{ backgroundColor: "white", width: "20%", borderRadius: "15px" }}>
                <InputLabel id="demo-customized-select-label">Modal Line</InputLabel>
                <Select labelId="demo-customized-select-label" id="demo-customized-select" value={carmaker} onChange={handleChange}>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Hyundai</MenuItem>
                    <MenuItem value={20}>Maruti</MenuItem>
                    <MenuItem value={30}>Zen</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.margin} style={{ backgroundColor: "white", width: "20%", borderRadius: "15px" }}>
                <InputLabel id="demo-customized-select-label">Year</InputLabel>
                <Select labelId="demo-customized-select-label" id="demo-customized-select" value={carmaker} onChange={handleChange}>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Hyundai</MenuItem>
                    <MenuItem value={20}>Maruti</MenuItem>
                    <MenuItem value={30}>Zen</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.margin} style={{ backgroundColor: "white", width: "20%", borderRadius: "15px" }}>
                <InputLabel id="demo-customized-select-label">Part No.</InputLabel>
                <Select labelId="demo-customized-select-label" id="demo-customized-select" value={carmaker} onChange={handleChange}>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Hyundai</MenuItem>
                    <MenuItem value={20}>Maruti</MenuItem>
                    <MenuItem value={30}>Zen</MenuItem>
                </Select>
            </FormControl>
            <ThemeProvider theme={theme}>
                <Button variant="contained"  className={classes.margin} style={{ padding: "12px 65px", backgroundColor: "black", color: "white", borderRadius: "15px" }}>
                    Search
                </Button>
            </ThemeProvider>
            </CardActions>
        </Card>
        </Box>
 
            <Box>
            <Typography variant="h4" className={classes.searchcategory}>
                Search By Category
            </Typography>
            </Box>
            <Box>
                <Grid container>
                    <Grid item xs={2}>
                <Card style={{width: "230px", marginLeft: "10px", marginBottom: "10px",  borderRadius: "20px"}}>
                    <CardActions>
                        <CardContent>
                            <Box style={{ width:"10rem", height: "5rem"}}>
                            <Link to="/productlist"><img src={maintainanceimg} style={{width: "100%", height: "100%"}} /></Link>
                            </Box>
                        <Typography>Maintenance Service Parts</Typography>
                        </CardContent>
                    </CardActions>
                </Card>
                </Grid>
                <Grid item xs={2}>
                <Card style={{width: "230px", padding: "11px",  borderRadius: "20px"}}>
                    <CardActions>
                    <CardContent>
                    <Box style={{ width:"10rem", height: "5rem"}}>
                            <Link to="/productlist"><img src={maintainanceimg} style={{width: "100%", height: "100%"}} /></Link>
                            </Box>
                        <Typography>Air Conditioning</Typography>
                        </CardContent>
                    </CardActions>
                </Card>
                </Grid>
                <Grid item xs={2}>
                <Card style={{width: "230px",  borderRadius: "20px"}}>
                    <CardActions>
                    <CardContent>
                    <Box style={{ width:"10rem", height: "5rem"}}>
                            <Link to="/productlist"><img src={beltsimg} style={{width: "100%", height: "100%"}} /></Link>
                            </Box>
                        <Typography>Belts, Chains and Rollers</Typography>
                        </CardContent>
                    </CardActions>
                </Card>
                </Grid>
                <Grid item xs={2}>
                <Card style={{width: "230px", padding: "10px",  borderRadius: "20px"}}>
                    <CardActions>
                    <CardContent>
                    <Box style={{ width:"10rem", height: "5rem"}}>
                            <Link to="/productlist"><img src={bodyimg} style={{width: "100%", height: "100%"}} /></Link>
                            </Box>
                        <Typography>Body</Typography>
                        </CardContent>
                    </CardActions>
                </Card>
                </Grid>
                <Grid item xs={2}>
                <Card style={{width: "230px", padding: "10px",  borderRadius: "20px"}}>
                    <CardActions>
                    <CardContent>
                    <Box style={{ width:"10rem", height: "5rem"}}>
                            <Link to="/productlist"><img src={breaksystemimg} style={{width: "100%", height: "100%"}} /></Link>
                            </Box>
                        <Typography>Break System</Typography>
                        </CardContent>
                    </CardActions>
                </Card>
                </Grid>
                <Grid item xs={2}>
                <Card style={{width: "230px", padding: "10px",  borderRadius: "20px"}}>
                    <CardActions>
                    <CardContent>
                    <Box style={{ width:"10rem", height: "5rem"}}>
                            <Link to="/productlist"><img src={engineimg} style={{width: "100%", height: "100%"}} /></Link>
                            </Box>
                        <Typography>Engine</Typography>
                        </CardContent>
                    </CardActions>
                </Card>
                </Grid>

                </Grid>
            </Box>
           

            <Box>
                <Grid container>
                    <Grid item xs={2}>
                <Card style={{width: "230px", marginLeft: "10px", marginBottom: "10px", padding: "8px",  borderRadius: "20px"}}>
                    <CardActions>
                        <CardContent>
                        <Box style={{ width:"10rem", height: "5rem"}}>
                            <Link to="/productlist"><img src={clutchimg} style={{width: "100%", height: "100%"}} /></Link>
                            </Box>
                        <Typography>Clutch System</Typography>
                        </CardContent>
                    </CardActions>
                </Card>
                </Grid>
                <Grid item xs={2}>
                <Card style={{width: "230px", padding: "6px",  borderRadius: "20px"}}>
                    <CardActions>
                    <CardContent>
                    <Box style={{ width:"10rem", height: "5rem"}}>
                            <Link to="/productlist"><img src={enginecoolingimg} style={{width: "100%", height: "100%"}} /></Link>
                            </Box>
                        <Typography>Engine Cooling System</Typography>
                        </CardContent>
                    </CardActions>
                </Card>
                </Grid>
                <Grid item xs={2}>
                <Card style={{width: "230px", padding: "10px",  borderRadius: "20px"}}>
                    <CardActions>
                    <CardContent>
                    <Box style={{ width:"10rem", height: "5rem"}}>
                            <Link to="/productlist"><img src={exhaustsystemimg} style={{width: "100%", height: "100%"}} /></Link>
                            </Box>
                        <Typography>Exhaust System</Typography>
                        </CardContent>
                    </CardActions>
                </Card>
                </Grid>
                <Grid item xs={2}>
                <Card style={{width: "230px", padding: "10px",  borderRadius: "20px"}}>
                    <CardActions>
                    <CardContent>
                    <Box style={{ width:"10rem", height: "5rem"}}>
                            <Link to="/productlist"><img src={filtersimg} style={{width: "100%", height: "100%"}} /></Link>
                            </Box>
                        <Typography>Filters</Typography>
                        </CardContent>
                    </CardActions>
                </Card>
                </Grid>
                <Grid item xs={2}>
                <Card style={{width: "230px", padding: "10px",  borderRadius: "20px"}}>
                    <CardActions>
                    <CardContent>
                    <Box style={{ width:"10rem", height: "5rem"}}>
                            <Link to="/productlist"><img src={fuelsupplyimg} style={{width: "100%", height: "100%"}} /></Link>
                            </Box>
                        <Typography>Fuel Supply System</Typography>
                        </CardContent>
                    </CardActions>
                </Card>
                </Grid>
                <Grid item xs={2}>
                <Card style={{width: "230px", marginBottom: "10px",  borderRadius: "20px"}}>
                    <CardActions>
                    <CardContent>
                    <Box style={{ width:"10rem", height: "5rem"}}>
                            <Link to="/productlist"><img src={gasketsimg} style={{width: "100%", height: "100%"}} /></Link>
                            </Box>
                        <Typography>Gaskets and Sealing Rings</Typography>
                        </CardContent>
                    </CardActions>
                </Card>
                </Grid>

                </Grid>
            </Box>
            <Box>
                <Grid container>
                    <Grid item xs={2}>
                <Card style={{width: "230px",  marginLeft: "10px", marginBottom: "10px",  borderRadius: "20px"}}>
                    <CardActions>
                        <CardContent>
                        <Box style={{ width:"10rem", height: "5rem"}}>
                            <Link to="/productlist"><img src={ignitionimg} style={{width: "100%", height: "100%"}} /></Link>
                            </Box>
                        <Typography>Ignition and Glowplug System</Typography>
                        </CardContent>
                    </CardActions>
                </Card>
                </Grid>
                <Grid item xs={2}>
                <Card style={{width: "230px", padding: "10px",  borderRadius: "20px"}}>
                    <CardActions>
                    <CardContent>
                    <Box style={{ width:"10rem", height: "5rem"}}>
                            <Link to="/productlist"><img src={interiorimg} style={{width: "100%", height: "100%"}} /></Link>
                            </Box>
                        <Typography>Interior and comfort</Typography>
                        </CardContent>
                    </CardActions>
                </Card>
                </Grid>
                <Grid item xs={2}>
                <Card style={{width: "230px", padding: "8px",  borderRadius: "20px"}}>
                    <CardActions>
                    <CardContent>
                    <Box style={{ width:"10rem", height: "5rem"}}>
                            <Link to="/productlist"><img src={lighteningimg} style={{width: "100%", height: "100%"}} /></Link>
                            </Box>
                        <Typography>Lighting</Typography>
                        </CardContent>
                    </CardActions>
                </Card>
                </Grid>
                <Grid item xs={2}>
                <Card style={{width: "230px", padding: "8px",  borderRadius: "20px"}}>
                    <CardActions>
                    <CardContent>
                    <Box style={{ width:"10rem", height: "5rem"}}>
                            <Link to="/productlist"><img src={oilsimg} style={{width: "100%", height: "100%"}} /></Link>
                            </Box>
                        <Typography>Oils nad Fluids</Typography>
                        </CardContent>
                    </CardActions>
                </Card>
                </Grid>
                <Grid item xs={2}>
                <Card style={{width: "230px", padding: "8px",  borderRadius: "20px"}}>
                    <CardActions>
                    <CardContent>
                    <Box style={{ width:"10rem", height: "5rem"}}>
                            <Link to="/productlist"><img src={pipesimg} style={{width: "100%", height: "100%"}} /></Link>
                            </Box>
                        <Typography>Pipes and Hoses</Typography>
                        </CardContent>
                    </CardActions>
                </Card>
                </Grid>
                <Grid item xs={2}>
                <Card style={{width: "230px", padding: "8px",  borderRadius: "20px"}}>
                    <CardActions>
                    <CardContent>
                    <Box style={{ width:"10rem", height: "5rem"}}>
                            <Link to="/productlist"><img src={repairkitsimg} style={{width: "100%", height: "100%"}} /></Link>
                            </Box>
                        <Typography>Repair Kits</Typography>
                        </CardContent>
                    </CardActions>
                </Card>
                </Grid>

                </Grid>
            </Box>
            <Box>
                <Grid container>
                    <Grid item xs={2}>
                <Card style={{width: "230px",  marginLeft: "10px", marginBottom: "10px",  borderRadius: "20px"}}>
                    <CardActions>
                        <CardContent>
                        <Box style={{ width:"10rem", height: "5rem"}}>
                            <Link to="/productlist"><img src={sensorsimg} style={{width: "100%", height: "100%"}} /></Link>
                            </Box>
                        <Typography>Sensors, Relays and Control Units</Typography>
                        </CardContent>
                    </CardActions>
                </Card>
                </Grid>
                <Grid item xs={2}>
                <Card style={{width: "230px", padding: "10px",  borderRadius: "20px"}}>
                    <CardActions>
                    <CardContent>
                    <Box style={{ width:"10rem", height: "5rem"}}>
                            <Link to="/productlist"><img src={steeringimg} style={{width: "100%", height: "100%"}} /></Link>
                            </Box>
                        <Typography>Steering</Typography>
                        </CardContent>
                    </CardActions>
                </Card>
                </Grid>
                <Grid item xs={2}>
                <Card style={{width: "230px", padding: "10px",  borderRadius: "20px"}}>
                    <CardActions>
                    <CardContent>
                    <Box style={{ width:"10rem", height: "5rem"}}>
                            <Link to="/productlist"><img src={suspensionimg} style={{width: "100%", height: "100%"}} /></Link>
                            </Box>
                        <Typography>Suspension and Arms</Typography>
                        </CardContent>
                    </CardActions>
                </Card>
                </Grid>
                <Grid item xs={2}>
                <Card style={{width: "230px", padding: "10px",  borderRadius: "20px"}}>
                    <CardActions>
                    <CardContent>
                    <Box style={{ width:"10rem", height: "5rem"}}>
                            <Link to="/productlist"><img src={oilsimg} style={{width: "100%", height: "100%"}} /></Link>
                            </Box>
                        <Typography>Oils and fluids</Typography>
                        </CardContent>
                    </CardActions>
                </Card>
                </Grid>
                <Grid item xs={2}>
                <Card style={{width: "230px", padding: "10px",  borderRadius: "20px"}}>
                    <CardActions>
                    <CardContent>
                    <Box style={{ width:"10rem", height: "5rem"}}>
                            <Link to="/productlist"><img src={pipesimg} style={{width: "100%", height: "100%"}} /></Link>
                            </Box>
                        <Typography>Pipes and Hoses</Typography>
                        </CardContent>
                    </CardActions>
                </Card>
                </Grid>
                <Grid item xs={2}>
                <Card style={{width: "230px", padding: "10px", borderRadius: "20px"}}>
                    <CardActions>
                    <CardContent>
                    <Box style={{ width:"10rem", height: "5rem"}}>
                            <Link to="/productlist"><img src={repairkitsimg} style={{width: "100%", height: "100%"}} /></Link>
                            </Box>
                        <Typography>Repair</Typography>
                        </CardContent>
                    </CardActions>
                </Card>
                </Grid>
                </Grid>
                </Box>
        <Box>
            <Typography variant="h4" className={classes.searchcategory}>
                Popular Car Makers
            </Typography>
            <Box>
                <Box className={classes.brandbtn}>
                    <Grid container>
                        <Grid item xs={1}>
                            <Button variant="outlined" className={classes.space}>
                                Maruti
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="outlined" className={classes.space}>
                                Hyundai
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="outlined" className={classes.space}>
                                Mahendra
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="outlined" className={classes.space}>
                                Mahendra
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="outlined" className={classes.space}>
                                Mahendra
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="outlined" className={classes.space}>
                                Mahendra
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="outlined" className={classes.space}>
                                Mahendra
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="outlined" className={classes.space}>
                                Mahendra
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="outlined" className={classes.space}>
                                Mahendra
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="outlined" className={classes.space}>
                                Mahendra
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="outlined" className={classes.space}>
                                Mahendra
                            </Button>
                        </Grid>
                        <Grid item xs={1}></Grid>
                    </Grid>
                </Box>
                <Box className={classes.brandbtn}>
                    <Grid container>
                        <Grid item xs={1}>
                            <Button variant="outlined" className={classes.space}>
                                Maruti
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="outlined" className={classes.space}>
                                Hyundai
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="outlined" className={classes.space}>
                                Mahendra
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="outlined" className={classes.space}>
                                Mahendra
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="outlined" className={classes.space}>
                                Mahendra
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="outlined" className={classes.space}>
                                Mahendra
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="outlined" className={classes.space}>
                                Mahendra
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="outlined" className={classes.space}>
                                Mahendra
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="outlined" className={classes.space}>
                                Mahendra
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="outlined" className={classes.space}>
                                Mahendra
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="outlined" className={classes.space}>
                                Mahendra
                            </Button>
                        </Grid>
                        <Grid item xs={1}></Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
        <Box>
            <Typography variant="h4" className={classes.articleheading}>
                Why Choose AfterMarket Products?
            </Typography>
    
            <Grid container >
                <Grid item xs={4}>
                <Card className={classes.article} style={{display: "flex", marginLeft: " 25px", marginRight: "55px"}}>
                        <CardActionArea style={{alignItems: "center"}}>
                            <CardMedia className={classes.articleimage} image="/static/images/cards/contemplative-reptile.jpg" title="Contemplative Reptile" />
                            <CardContent >
                                <Typography align="left"  gutterBottom variant="h5" component="h2">
                                    Original Products
                                </Typography>
    
                                <Typography align="left" style={{paddingBottom: "40px"}} variant="body2"  component="p">
                                   Only reliable parts from trusted Aftermarket brands
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card className={classes.article} style={{display: "flex"}}>
                        <CardActionArea style={{alignItems: "center"}}>
                            <CardMedia className={classes.articleimage} image="/static/images/cards/contemplative-reptile.jpg" title="Contemplative Reptile" />
                            <CardContent>
                                <Typography align="left" gutterBottom variant="h5" component="h2">
                                    Affordable Rates
                                </Typography>
    
                                <Typography align="left" variant="body2"  component="p">
                                    Repairing a damaged vehicle can be expensive. Using the aftermrket products is a good situation if you're on a budget.
                                 </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card className={classes.article} style={{display: "flex", marginRight: "30px"}}>
                        <CardActionArea style={{alignItems: "left"}}>
                            <CardMedia className={classes.articleimage} image="/static/images/cards/contemplative-reptile.jpg" title="Contemplative Reptile" />
                            <CardContent>
                                <Typography align="left" gutterBottom variant="h5" component="h2">
                                    Wide variety
                                </Typography>
    
                                <Typography align="left" variant="body2"  component="p">
                                    We have something for everyone when it comes to after market products. Just apply the "Aftermarket" filter in the catalogue and check the offers.
                                 </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                {/* <Grid item xs={3}>
                    <Card className={classes.article} style={{display: "flex"}}>
                        <CardActionArea style={{alignItems: "center"}}>
                            <CardMedia className={classes.articleimage} image="/static/images/cards/contemplative-reptile.jpg" title="Contemplative Reptile" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" >
                                    Heading
                                </Typography>
    
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid> */}
            </Grid>
        </Box>
        {/* <Box className={classes.root}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handlingChange} />}
        label="Show"
      />
                             <div className={classes.container}>
        <Collapse in={checked}>
          <Paper elevation={4} className={classes.paper}>
            <svg className={classes.svg}>
              <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
            </svg>
          </Paper>
        </Collapse>
        <Collapse in={checked} >
          <Paper elevation={4} >
            <svg className={classes.svg}>
              <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
            </svg>
          </Paper>
        </Collapse>
        </div>
        </Box>
     */}
        <Box>
            <Typography variant="h4" className={classes.articleheading}>
                Article & Reviews
            </Typography>
            <Grid container >
                <Grid item xs={4}>
                <Card className={classes.article} style={{display: "flex", marginLeft: " 25px", marginRight: "55px"}}>
                        <CardActionArea style={{alignItems: "center"}}>
                            <CardMedia className={classes.articleimage} image="/static/images/cards/contemplative-reptile.jpg" title="Contemplative Reptile" />
                            <CardContent>
                                <Typography align="left" gutterBottom variant="h6" component="h2">
                                    Original Products
                                </Typography>
    
                                <Typography align="left" style={{paddingBottom: "40px", fontSize: 12}} variant="body2" color="textSecondary" component="p">
                                   Only reliable parts from trusted Aftermarket brands
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card className={classes.article} style={{display: "flex"}}>
                        <CardActionArea style={{alignItems: "center"}}>
                            <CardMedia className={classes.articleimage} image="/static/images/cards/contemplative-reptile.jpg" title="Contemplative Reptile" />
                            <CardContent>
                                <Typography align="left" gutterBottom variant="h6" component="h2">
                                    Affordable Rates
                                </Typography>
    
                                <Typography align="left" variant="body2" color="textSecondary"  component="p" style={{fontSize: 12}}>
                                    Repairing a damaged vehicle can be expensive. Using the aftermrket products is a good situation if you're on a budget.
                                 </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card className={classes.article} style={{display: "flex", marginRight: "30px"}}>
                        <CardActionArea style={{alignItems: "left"}}>
                            <CardMedia className={classes.articleimage} image="/static/images/cards/contemplative-reptile.jpg" title="Contemplative Reptile" />
                            <CardContent>
                                <Typography align="left" gutterBottom variant="h6" component="h2">
                                    Wide variety
                                </Typography>
    {/* Date  */}
                                <Typography align="left" variant="body2" color="textSecondary" component="p" style={{fontSize: 12}}>
                                    We have something for everyone when it comes to after market products. Just apply the "Aftermarket" filter in the catalogue and check the offers.
                                 </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
        </Grid>
        </Box>
        <Box>
            <Grid container>
                <Grid item xs={12}>
                    <Card className={classes.border} style={{marginLeft: "20px",  marginTop: "20px ", marginBottom: "5px "}}>
                        <CardActions style={{ display: "flex", justifyContent: "flex-start" }}>
                            <CardContent>
                                <Typography variant="h4" align="center" style={{ fontSize: 32,
        fontFamily: 'nano-sans'}}>
                                    Smartpartsexports.com – #1 Online Marketplace to Sell or Buy Car Parts
                                </Typography>
                                <CardActions>
                                    <Typography style={{fontSize: 15}}>
                                        Using your own car gives you an independence from external circumstances and the opportunity to plan your day exactly how you want. No rush to miss urban transport and even be late for work, because of
                                        outside factors.With an own car, you feel free, have the ability to address business and pleasure travel, as you want. All these reasons have a huge influence on the number of vehicles, on the road. Among
                                        them are passenger cars, lorries, buses, etc.Bringing this into focus: in 1986 there were only 500 million cars in the whole world. And in 2010 the number increased to 1 billion vehicles. Researchers with
                                        the International Energy Agency suggest that by the year 2035 nearly 25 percent of the world population will own a car. According to research, the current number is going to increase to 1,7 billion.
                                        That's why auto car spare parts are in demand among car owners. Smartpartsexports.com is a car parts marketplace in India, which pursues the aim to organize the replacement parts market and make the
                                        shopping process easier and more convenient.The offer from Smartpartsexports.com -
                                    </Typography>
                                </CardActions>
                                <CardActions>
                                    <Box component="span" style={{display: "flex", justifyContent: "center"}}>
                                    
                                        <ShowMoreText lines={2} more={<ExpandMore />} less={<ExpandLess />} onClick={onClick} expanded={expand} width={30}>
                                    
                                                <Typography style={{fontSize: 15}} >     
                                                   {text}
                                                   </Typography>

                                        </ShowMoreText>
                                    </Box>
                                </CardActions>
                            </CardContent>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
             {/* <Box> 
 
                         <Box bgcolor="#8517FF" style={{margin: "25px"}}>
                         <Box >
                    <Typography variant="h6" style={{paddingTop: "40px", color: "white"}} align="center">Workflow of Order Management</Typography>
                    </Box>
                    <Box >
                    <Grid container style={{marginLeft: "160px"}} >
                        <Grid item xs={2} alignItems="center">
                        <Avatar className={classes.avatar}>

                        <EmailIcon />
                        </Avatar>
                        </Grid>
                        <Grid item xs={2}>
                        <Avatar className={classes.avatar}>
                        <EmailIcon />
                        </Avatar>
                        </Grid>
                        <Grid item xs={2}>
                        <Avatar className={classes.avatar}>
                        <EmailIcon />
                        </Avatar>
                        </Grid>
                        <Grid item xs={2}>
                        <Avatar className={classes.avatar}>
                        <EmailIcon />
                        </Avatar>
                        </Grid>
                        <Grid item xs={2}>
                        <Avatar className={classes.avatar}>
                        <EmailIcon />
                        </Avatar>
                        </Grid>
                    </Grid>
                    </Box>
                    </Box>
 
 </Box> */}

  {/* article and reviews   instead of switch i want on click on image*/}
 {/* <Box>
 <div className={classes.root}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handlingChange} />}
        label="Show"
      />
      <div className={classes.container}>
        <Collapse in={checked}>
          <Paper elevation={4} className={classes.paper}>
            <svg className={classes.svg}>
              <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
            </svg>
          </Paper>
        </Collapse>
        
      </div>
    </div>
 </Box> */}

            <Footer />
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
        <Box className={classes.slider}>
         {/* <Carousel breakPoints={breakPoints}>
          <Item>One</Item>
          <Item>Two</Item>
          <Item>Three</Item>
          <Item>Four</Item>
          <Item>Five</Item>
          <Item>Six</Item>
          <Item>Seven</Item>
          <Item>Eight</Item>
        </Carousel>  */}
        </Box> 
        </Box>
    






        </Box>

        
               )
}
