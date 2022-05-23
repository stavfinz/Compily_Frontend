import React, { useState } from "react";
import PatientTable from './PatientTable/PatientTable';
import './DoctorView.css';
import Chip from '@mui/material/Chip';

import Paper from '@mui/material/Paper';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const DoctorView = () => {

    const [patientFound, setPatientFound] = useState(true);

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
        setPatientFound(false);
    };

    const handleClick = () => {
        console.log("Click!");
        window.location.reload();
    }

    return (
        <div className="patient-container">
            <div className="patient-item">
                <div className="search-container" >
                    <div className="search-item">
                        <Button variant="contained" size='large' type="submit" onClick={handleClick}>חפש</Button>
                    </div>
                    <div className="search-item">
                        <TextField fullWidth id="outlined-basic" label="חפש לפי ת״ז" variant="outlined" />
                    </div>
                    <div className="search-item">
                        {patientFound ? <Chip label="ריאל ז׳ורנו" variant="outlined" onDelete={handleDelete} /> : null}
                    </div>

                </div>
                <br />
                {patientFound ? <PatientTable /> : null}
            </div>


        </div>
    )
}

export default DoctorView;