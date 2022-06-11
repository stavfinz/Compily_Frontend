import React from 'react';

import { Button } from '@mui/material';

import TreatmentTable from './TreatmentTable/TreatmentTable';

const PatientView = (props) => {

    const logOut = () => {
        props.onLogOut();
    }

    return (
        <div dir="rtl">
            <TreatmentTable />
            <br />
            <Button onClick={logOut}>התנתק</Button>
        </div>
    );
}

export default PatientView;