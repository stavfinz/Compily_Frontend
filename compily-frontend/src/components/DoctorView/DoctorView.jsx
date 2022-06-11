import React, { useState } from "react";
import PatientTable from './PatientTable/PatientTable';
import './DoctorView.css';

import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';

import docData from '../../JSON/Doctors.json';
import patiData from '../../JSON/Ronens_Allpatients.json';

const DoctorView = (props) => {

    const [patientFound, setPatientFound] = useState(false);
    const [newTreatment, setNewTreatment] = useState(false);
    const [treatName, setTreatName] = useState('');
    const [treatDisc, setTreatDisc] = useState('');


    const handleDelete = () => {
        console.info('You clicked the delete icon.');
        setPatientFound(false);
    };

    const handleClick = () => {
        console.log("Click!");
        setPatientFound(true);
    }

    const logOut = () => {
        props.onLogOut();
    }

    const openAddNewTreatment = () => {
        setNewTreatment(true);
    }

    const addNewTreatment = () => {
        setNewTreatment(false);
    }




    return (
        <div className="patient-container">
            <h3>שלום {docData[0].firstName}</h3>
            <div className="patient-item">
                <div className="search-container" >
                    {patientFound ? <div className="search-item"><AddBoxIcon fontSize="large" color="primary" onClick={openAddNewTreatment} /></div> : null}
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
                {newTreatment ? <div>
                    <div className="diff-margin"><TextField fullWidth id="outlined-basic" label="שם טיפול" variant="outlined" onChange /></div>
                    <div className="diff-margin"><TextField fullWidth id="outlined-basic" label="תיאור הטיפול" variant="outlined" /></div>
                    <div className="diff-margin"><Button onClick={addNewTreatment}>הוסף</Button></div>
                </div> : null}
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