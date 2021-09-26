import React from 'react';
import {Box, Typography} from '@material-ui/core';

export default function SingleProduct({products}) {
   
   console.log(products);
    return(
        <Box style={{marginTop: "120px"}}>
{
    products.map((product,index) =>(
        <Box key={index}>
        <Typography>{product.Description}</Typography>
        <Typography>{product.Partno}</Typography>
    </Box>
    
    ))
}
        </Box>

    )
}