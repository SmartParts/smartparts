import React from 'react';
import {Box, Typography} from '@material-ui/core';

export default function SingleProduct({products}) {
    return(
        <Box style={{marginTop: "120px"}}>
{
    products.map((product) =>(
        <Box key={product.sno}>
        <Typography>{product.Description}</Typography>
        <Typography>{product.Partno}</Typography>
    </Box>
    
    ))
}
        </Box>

    )
}