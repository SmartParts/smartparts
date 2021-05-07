import React from 'react';
import {Table,TableContainer,Paper,TableHead,TableRow,TableCell, TableBody} from "@material-ui/core";
import {makeStyles,withStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    tableCell:{
        border: "1px solid rgba(224, 224, 224, 1)",
        padding:"10px 0px"
    },
    tableSubHeader:{
        border: "1px solid rgba(224, 224, 224, 1)",
        padding:"0px"
    }
  });


const Overview = ()=> {
    const classes =useStyles();

    return (
        <TableContainer component={Paper}>
             <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell style={{width: "20%" }} className={classes.tableCell} align="center">Tracing</TableCell>
                        <TableCell style={{width: "20%" }} className={classes.tableCell} align="center">Backend</TableCell>
                        <TableCell style={{width: "20%" }} align="center"></TableCell>
                        <TableCell style={{width: "20%" }}  align="center">Backend</TableCell>
                        <TableCell style={{width: "20%" }} align="center"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell style={{width: "20%"}} className={classes.tableCell} align="center">Tracing</TableCell>
                        <TableCell style={{width: "20%"}} className={classes.tableCell} align="center">Tracing</TableCell>
                        <TableCell style={{width: "20%"}} className={classes.tableCell} align="center">Tracing</TableCell>
                        <TableCell style={{width: "20%"}} className={classes.tableCell} align="center">Tracing</TableCell>
                        <TableCell style={{width: "20%"}} className={classes.tableCell} align="center">Tracing</TableCell>
                    </TableRow>
                </TableBody>
             </Table>
        </TableContainer>
    )
}

export default Overview
