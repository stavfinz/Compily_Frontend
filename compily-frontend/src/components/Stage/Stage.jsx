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
        console.log("to the <stage/> component: '" + toggleView + "'");
    }

    const formSend = () => {
        setLogin(false);
    }

    const logOut = () => {
        setLogin(true);
    }

    return (
        <div className='stage'>
            {/* <LogIn /> */}
            {/* <DoctorView /> */}
            {/* <PatientView /> */}
            {login ?
                <LogIn onSelectView={selectViewHandler} onLogin={formSend} /> :
                (toggleView === 'doctor' ?
                    <DoctorView onLogOut={logOut} /> :
                    (toggleView === 'patient' && <PatientView onLogOut={logOut} />))
            }
        </div>
    );
}

export default Stage;