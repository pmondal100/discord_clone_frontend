import React from "react";
import Avatar from "../../../common/Avatar";
import { Typography } from "@mui/material";

interface propStructure {
    name: string
}

const MessageHeader = (props: propStructure) => {
    const { name } = props;
    return (
        <div style={{ width: "98%", display: "column", marginTop: "10px" }}>
            <Avatar large={true} username={name}/>
            <Typography
             variant="h4"
             sx={{
                fontWeight: 'bold',
                color: 'white',
                marginLeft: '5px',
                marginRight: '5px'
            }}>
                {name}
            </Typography>
            <Typography sx={{
                color: '#b9bbbe',
                marginLeft: '5px',
                marginRight: '5px'
            }}>
                This is beginning of the conversation with {name}
            </Typography>
        </div>
    )
}


export default MessageHeader;