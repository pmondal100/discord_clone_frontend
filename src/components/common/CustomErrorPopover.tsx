import React from 'react';
import { Paper, Box, Fade } from '@mui/material';
import classes from './css/CustomErrorPopover.module.css';

interface propStructure {
    popoverText: string | undefined,
    showPop: boolean
}

const CustomPopover = (props: propStructure) => {
    const { popoverText, showPop } = props;
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                marginTop: '-8px',
                marginLeft: '-6px',
                '& > :not(style)': {
                    m: 1,
                    width: '42%',
                    height: '100%',
                },
            }}
        ><Fade in={showPop}
            style={{ transitionDelay: '200ms' }}
        >
                <Paper className={classes.paper} elevation={0}>{popoverText}</Paper>
            </Fade>
        </Box>
    )
}

export default CustomPopover;