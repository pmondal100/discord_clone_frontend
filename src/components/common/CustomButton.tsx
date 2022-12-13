import React from "react";
import { Button } from "@mui/material";

interface propStructure {
    disabled: boolean,
    onClickHandler: () => void,
    buttonLabel: string,
}

const CustomButton = (props: propStructure) => {
    const { disabled, onClickHandler, buttonLabel } = props;
    return(
        <Button
          sx={{
            marginLeft: "2%",
            marginTop: "5%",
            width: "20%",
            marginBottom: "10px",
          }}
          disabled={disabled}
          onClick={onClickHandler}
          variant="contained"
        >
          {buttonLabel}
        </Button>
    )
}

export default CustomButton;