import React from "react";
import Button from "@mui/material/Button";
import Avatar from "../../common/Avatar";
import Typography from "@mui/material/Typography";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import classes from '../css/FriendsListItem.module.css';
import { connect } from "react-redux";
import { setChatDetailsAction } from "../../../store/actions/chatActions";
import { dispatchBodyStructure } from "../../common/utils/commonInterfaces";
import { Dispatch } from "react";

interface propStructure {
    username: string,
    isOnline: boolean,
    id: string,
    setChatDetails: Function
}

const FriendsListItem = (props: propStructure) => {
    const { username, isOnline, id, setChatDetails } = props;

    const onFriendButtonClick = () => {
        setChatDetails('DIRECT', {username, id})
    }

    return (
        <Button 
        onClick={onFriendButtonClick}
            sx={{
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

const mapDispatchToProps = (dispatch: Dispatch<dispatchBodyStructure>) => {
    return {
        setChatDetails: (chatType: string, userDetails: {username: string, id: string}) => dispatch(setChatDetailsAction(chatType, userDetails))
    }
}

export default connect(null, mapDispatchToProps)(FriendsListItem);