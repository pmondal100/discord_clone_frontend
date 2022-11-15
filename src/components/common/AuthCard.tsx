import React from "react";
import Box from '@mui/material/Box';

interface authCardProps {
    'width': string,
    'height': string,
    'children': any
}

const AuthCard = (props: authCardProps) => {
    const { width, height } = props;
    return (
        <>
            <Box
                sx={{
                    width: width,
                    height: height,
                    backgroundColor: '#484848',
                    margin: 'auto',
                    marginTop: '10%',
                    borderRadius: '5px',
                    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);',
                    flexDirection: 'column',
                }}
            >{props.children}</Box>
        </>
    )
}

export default AuthCard;