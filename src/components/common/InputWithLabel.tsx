import React, { useState } from "react";
import classes from './css/InputWithLabel.module.css';
import CustomPopover from './CustomErrorPopover';
import { Grid } from '@mui/material';

interface inputPropStructure {
    label: string,
    type: string,
    placeholder: string,
    value: string,
    setValue: Function,
    validationSchema: string,
    popoverErrorText?: string
}

const InputWithLabel = (props: inputPropStructure) => {
    const { label, type, placeholder, value, setValue, validationSchema, popoverErrorText } = props;

    const [inputClass, setInputClass] = useState<string>('input');

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue((e.target as HTMLInputElement)?.value);
    }

    const onBlurHandler = (): void => {
        const re = new RegExp(validationSchema);
        const result = re.exec(value);
        if (result === null) {
            setInputClass('errorInput');
            return;
        }

        setInputClass('input');
    }


    return (
        <div className={classes.inputWrapper}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <label className={classes.label}>{label}</label>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <input className={classes[inputClass]} placeholder={placeholder} type={type} value={value} onBlur={onBlurHandler} onChange={(e) => onChangeHandler(e)} />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    {inputClass === 'errorInput' ? <CustomPopover showPop={true} popoverText={popoverErrorText} /> : null}
                </Grid>
            </Grid>
        </div >

    )
}

export default InputWithLabel;