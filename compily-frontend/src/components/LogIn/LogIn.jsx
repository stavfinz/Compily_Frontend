import Card from "../../ui/Card/Card";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import "./LogIn.css"
import { useState } from "react";

const LogIn = (props) => {


    const [personState, setPersonState] = useState('')

    const handleChange = (event) => {
        setPersonState(event.target.value)
        props.onSelectView(personState)
    }

    const clickHandler = () => {
        props.onLogin();
    }

    return ([
        <Card className="form-size">
            <form>
                <div className="container">
                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                        <FormControlLabel id="patient" value="patient" onChange={handleChange} control={<Radio />} label="מטופל" labelPlacement="start" />
                        <FormControlLabel id="doctor" value="doctor" onChange={handleChange} control={<Radio />} label="דוקטור" labelPlacement="start" />
                    </RadioGroup>
                </div>

                <div className='container'>
                    <TextField sx={{ m: 3 }} id="filled-basic" label="הכנס מספר זיהוי" variant="filled" margin="normal" />
                </div>

                <Button variant="contained" onClick={clickHandler}>התחבר</Button>
            </form>
        </Card >
    ]
    )
}

export default LogIn;