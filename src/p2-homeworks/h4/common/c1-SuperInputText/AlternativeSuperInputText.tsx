import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import classes from './SuperInputText.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type InputTextPropsType = DefaultInputPropsType  & {
    onEnter?: () => void
    error?: string | number
}

const AlternativeSuperInputText: React.FC<InputTextPropsType> =
    ({type,onChange, error, ...restProps}) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
            onChange && onChange(e)
    }
    return (
        <div>
            <input type={'text'}
                   onChange={onChangeCallback}
                   className={classes.input}
                   {...restProps}/>
            {error && <div className={classes.error}> {error} </div> }
        </div>


    )
}

export default AlternativeSuperInputText
