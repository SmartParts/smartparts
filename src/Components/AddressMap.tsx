import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
 containerStyle: {
  maxWidth: "950px",
  height: "350px",
  [theme.breakpoints.down("md")] :{

    maxWidth: "680px",
},
 },
}));
const AddressMap=()=>{
  const  classes= useStyles();
    return (
        <div className="google-map-code"   style={{marginTop: "20px"}}>
         
          <iframe className={classes.containerStyle} title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="910" height="450"  style={{border:0}}  aria-hidden="false" ></iframe>
         
        </div>
    );
 }
 export{AddressMap}