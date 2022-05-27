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

import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import './PatientTable.css';
import { LocalConvenienceStoreOutlined, PropaneSharp } from '@mui/icons-material';
import { IndexKind } from 'typescript';

import Dialog from '../../../ui/Dialog/Dialog'
import PatientRow from './PatientRow';

function createData(name, date) {
    return { name, date };
}

const rows = [
    createData('כאב ראש', '2/5/2022',),
    createData('כאב בטן', '27/2/2022',),
    createData('כאב שיניים', '8/8/2022',),
];

export default function BasicTableAndSearch() {

    const [treatments, setTreatments] = React.useState(rows)
    const [editDialog, setEditDialog] = React.useState(false)


    const editTreatment = (id) => {
        console.log('Edit Clicked!');
        setEditDialog(true);
    }

    const clickHendleClose = () => {
        setEditDialog(false)
    }

    const deleteTreatment = (id) => {
        console.log('Delete Clicked!');
        setTreatments(prevTreatments => {
            return prevTreatments.filter((treatment, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
            {editDialog ? <Dialog title="כאן ניתן לערוך טיפול" input={true} button="אישור" onCloseDialog={clickHendleClose} /> : null}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table" dir="rtl">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">שם הטיפול</TableCell>
                            <TableCell align="right">תאריך</TableCell>
                            <TableCell align="right">עריכה</TableCell>
                            <TableCell align="right">מחיקה</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {treatments.map((treatment, index) => (
                            <PatientRow
                                key={index}
                                id={index}
                                onDelete={deleteTreatment}
                                onEdit={editTreatment}
                                treatment={treatment}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
