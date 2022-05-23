import React, { useState } from 'react';
import './Stage.css';
import LogIn from '../LogIn/LogIn';
import DoctorView from '../DoctorView/DoctorView'
import PatientView from '../PatientView/PatientView'

const Stage = () => {
    const [doctor, setDoctor] = useState(false);

    return (
        <div className='stage'>
            {doctor ?
                <LogIn /> :
                //<DoctorView />
                <PatientView />
            }
        </div>
    );
}

export default Stage;