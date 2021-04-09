import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import classes from './SuperButton.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
}

const AlternativeSuperButton: React.FC<ButtonPropsType> =
    ({red, children, onClick, disabled, value, ...restProps}) => {
    return (
        <button onClick={onClick}
                disabled={disabled}
                className={`${red ? classes.red : ''} ${classes.button}`}
                value={value}> {children} {restProps} </button>
    )
}

export default AlternativeSuperButton
