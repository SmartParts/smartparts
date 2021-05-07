import React from 'react';
import {Table,TableContainer,Paper,TableHead,TableRow,TableCell, TableBody} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

const Overview = ()=> {
    const classes =useStyles();

    return (
        <TableContainer component={Paper}>
             <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Tracing</TableCell>
                        <TableCell align="center">Backend</TableCell>
                        <TableCell align="center">RequestInfo</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                </TableBody>
             </Table>
        </TableContainer>
    )
}

export default Overview
