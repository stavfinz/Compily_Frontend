import React, { useState } from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Radio from '@mui/material/Radio';

import Dialog from '../../../ui/Dialog/Dialog';

import patientData from '../../../JSON/Liors_allTreatments.json'

export default function SimpleAccordion() {

    const [bravoo, setBravoo] = useState(false);

    const clickHandle = () => {
        setBravoo(true);
    }

    const clickHendleClose = () => {
        setBravoo(false)
    }

    const dialogTitle = "כל הכבוד לך";

    return (
        <div>
            {bravoo ? <Dialog title="כל הכבוד לך" content="המשך כך!" button="אישור" onCloseDialog={clickHendleClose} /> : null}
            {patientData.map((patiData) => {
                return (
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography><Radio color="success" onChange={clickHandle} />{patiData.treatmentPk.treatmentName}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {patiData.description}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                )
            })}

            {/* <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography><Radio color="success" onChange={clickHandle} />אנטיביוטיקה</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        יש לקחת שלוש פעמים ביום למשך חמישה ימים אחרי אוכל
                        לוודא שלוקחים עד 4 שעות לפני שינה.
          </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography><Radio color="success" onChange={clickHandle} />משכחי כאבים</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        חשוב לקחת רק כאשר כואב,
                        לקחת עם שתייה לפחות 2 כוסות מים מחשש להתייבשות.
          </Typography>
                </AccordionDetails>
            </Accordion> */}


            {/* <Accordion disabled>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography>Disabled Accordion</Typography>
                </AccordionSummary>
            </Accordion> */}
        </div>
    );
}
