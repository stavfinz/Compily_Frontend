import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import './PatientTable.css';

function createData(name, calories) {
    return { name, calories };
}

const rows = [
    createData('כאב ראש', '2/5/2022'),
    createData('כאב בטן', '27/2/2022'),
    createData('כאב שיניים', '8/8/2022'),
];

export default function BasicTableAndSearch() {
    return (
        <div>
            <div className="search-container" >
                <div className="search-item">
                    <Button variant="contained" size='large'>חפש</Button>
                </div>
                <div className="search-item">
                    <TextField fullWidth id="outlined-basic" label="חפש לפי ת״ז" variant="outlined" />
                </div>

            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table" dir="rtl">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">שם הטיפול</TableCell>
                            <TableCell align="right">תאריך</TableCell>
                            <TableCell align="right">האם בוצע?</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="right" component="th" scope="row">{row.name}</TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">
                                    <input type="checkbox" />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
