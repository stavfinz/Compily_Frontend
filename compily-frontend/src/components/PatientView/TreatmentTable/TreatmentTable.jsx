import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Radio from '@mui/material/Radio';
import Dialog from './Dialog/Dialog';


export default function SimpleAccordion() {

    const [bravoo, setBravoo] = useState(false);

    const clickHandle = () => {
        setBravoo(true);
    }

    return (
        <div>
            {bravoo ? null : <Dialog />}
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography><Radio color="success" onClick={clickHandle} />אנטיביוטיקה</Typography>
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
                    <Typography><Radio color="success" />משכחי כאבים</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        חשוב לקחת רק כאשר כואב,
                        לקחת עם שתייה לפחות 2 כוסות מים מחשש להתייבשות.
          </Typography>
                </AccordionDetails>
            </Accordion>
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
