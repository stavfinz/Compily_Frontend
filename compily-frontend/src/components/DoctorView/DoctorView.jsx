import React from "react";
import PatientTable from './PatientTable/PatientTable';
import './DoctorView.css';

const DoctorView = () => {
    return (
        <div className="patient-container">
            <div className="patient-item">
                <PatientTable />
            </div>

            <div className="patient-item">
                <PatientTable />
            </div>

        </div>
    )
}

export default DoctorView;