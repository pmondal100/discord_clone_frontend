import React from "react";
import AddIcon from '@mui/icons-material/Groups';
import Button from '@mui/material/Button';

const AddRoomIcon = () => {
    return (
        <Button sx={{
            width: '48px',
            height: '48px',
            borderRadius: '16px',
            margin: '0',
            padding: '0',
            minWidth: '0',
            marginTop: '10px',
            color: 'white',
            backgroundColor: '#5865F2',
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: '#5865F2'
            }
        }}>
            <AddIcon />
        </Button>
    )
}

export default AddRoomIcon;