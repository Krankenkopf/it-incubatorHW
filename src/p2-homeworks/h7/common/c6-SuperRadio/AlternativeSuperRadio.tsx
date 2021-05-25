import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    set?: string[]
    activeSet: string[]
    onChangeOption?: (option: any) => void
}

const AlternativeSuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        set, activeSet, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeOption && onChangeOption(e.currentTarget.value)
        onChange && onChange(e)
    }


    const mappedOptions: any[] = set ? set.map((s, i) => ( // map options with key
        <label key={name + '-' + i}>
            <input
                type={'radio'}
                name={s}
                value={s}
                checked={activeSet?.some(a => a === s)}
                onChange={onChangeCallback}
            />
            {s}
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default AlternativeSuperRadio
