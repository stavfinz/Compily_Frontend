import React, { useState } from 'react';
import './Stage.css';
import LogIn from '../LogIn/LogIn';
import DoctorView from '../DoctorView/DoctorView'

const Stage = () => {
    const [doctor, setDoctor] = useState(false);

    return (
        <div className='stage'>
            {doctor ?
                <LogIn /> :
                <DoctorView />
            }
        </div>
    );
}

export default Stage;