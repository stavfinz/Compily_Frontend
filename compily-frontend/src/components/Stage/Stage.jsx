import React, { useState } from 'react';
import './Stage.css';
import LogIn from '../LogIn/LogIn';
import DoctorView from '../DoctorView/DoctorView'
import PatientView from '../PatientView/PatientView'

const Stage = () => {
    const [login, setLogin] = useState(true);
    const [toggleView, setToggleView] = useState('doctor')

    const selectViewHandler = (personState) => {
        setToggleView(personState);
        console.log(toggleView);
    }

    const formSend = () => {
        setLogin(false);
    }

    return (
        <div className='stage'>
            {/* <LogIn /> */}
            <DoctorView />
            {/* <PatientView /> */}
            {/* {login ?
                <LogIn onSelectView={selectViewHandler} onLogin={formSend} /> :
                (toggleView === 'doctor' ?
                    <DoctorView /> :
                    (toggleView === 'patient' && <PatientView />))
            } */}
        </div>
    );
}

export default Stage;