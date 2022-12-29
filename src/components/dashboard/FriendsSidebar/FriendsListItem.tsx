import React from "react";
import Button from "@mui/material/Button";
import Avatar from "../../common/Avatar";
import Typography from "@mui/material/Typography";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import classes from '../css/FriendsListItem.module.css';

interface propStructure {
    username: string,
    isOnline: boolean
}

const FriendsListItem = (props: propStructure) => {
    const { username, isOnline } = props;
    return (
        <Button sx={{
            width: '100%',
            height: '42px',
            marginTop: '10px',
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'flex-start',
            textTransform: 'none',
            color: 'black',
            position: 'relative'
        }}>
            <Avatar username={username} large={false}/>
            <Typography sx={{
                marginLeft: '7px',
                fontWeight: 700,
                color: '#8e9297',
                fontSize: '15px'
            }}
            variant="subtitle1"
            >
                {username}
            </Typography>
            <FiberManualRecordIcon fontSize="small" className={isOnline ? classes.onlineIcon : classes.offlineIcon}/>
        </Button>
    )
}

export default FriendsListItem