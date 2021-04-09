import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, LabelHTMLAttributes} from 'react'
import classes from './SuperInputText.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type InputTextPropsType = DefaultInputPropsType  & { // и + ещё пропсы которых нет в стандартном инпуте
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
