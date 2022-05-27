import React from 'react';

import TableCell from '@mui/material/TableCell';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import TableRow from '@mui/material/TableRow';


const PatientRow = (props) => {

    const clickHandleForDelete = () => {
        props.onDelete(props.id)
    }

    const clickHandleForEdit = () => {
        props.onEdit(props.id)
    }

    return (
        <TableRow
            key={props.key}
            id={props.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell align="right" component="th" scope="row">{props.treatment.name}</TableCell>
            <TableCell align="right">{props.treatment.date}</TableCell>
            <TableCell align="right" onClick={clickHandleForEdit}>
                <ModeEditOutlineOutlinedIcon className="icons" />
            </TableCell>
            <TableCell align="right" onClick={clickHandleForDelete}>
                <DeleteOutlineOutlinedIcon className="icons" />
            </TableCell>
        </TableRow >
    );
}

export default PatientRow;