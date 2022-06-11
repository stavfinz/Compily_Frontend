import React, { useState } from "react";
import PatientTable from './PatientTable/PatientTable';
import './DoctorView.css';

import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import docData from '../../JSON/Doctors.json'
import patiData from '../../JSON/Ronens_Allpatients.json'

const DoctorView = (props) => {

    const [patientFound, setPatientFound] = useState(false);

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
        setPatientFound(false);
    };

    const handleClick = () => {
        console.log("Click!");
        setPatientFound(true);
        //window.location.reload();
    }

    const logOut = () => {
        props.onLogOut();
    }

    return (
        <div className="patient-container">
            <h3>שלום {docData[0].firstName}</h3>
            <div className="patient-item">
                <div className="search-container" >
                    <div className="search-item">
                        <Button variant="contained" size='large' type="submit" onClick={handleClick}>חפש</Button>
                    </div>
                    <div className="search-item">
                        <TextField fullWidth id="outlined-basic" label="חפש לפי מטופל ת״ז" variant="outlined" />
                    </div>
                    <div className="search-item">
                        {patientFound ? <Chip label={`${patiData[1].firstName} ${patiData[1].lastName}`} variant="outlined" onDelete={handleDelete} /> : null}
                    </div>

                </div>
                <br />
                {patientFound ? <PatientTable /> : null}
                <br />
                <div>
                    <Button onClick={logOut}>התנתק</Button>
                </div>
            </div>
        </div>
    )
}

export default DoctorView;